﻿/**
* @description Meshcentral Intel AMT Local Scanner
* @author Ylian Saint-Hilaire & Joko Sastriawan
* @version v0.0.1
*/

// Construct a Intel AMT Scanner object
module.exports.CreateAmtScanner = function (parent) {
    var obj = {};
    obj.active = false;
    obj.parent = parent;
    obj.dns = require('dns');
    obj.dgram = require('dgram');
    obj.common = require('./common.js');
    obj.servers = {};
    obj.rserver = {};
    obj.rpacket = null;
    obj.tagToId = {}; // Tag --> { lastpong: time, id: NodeId }
    obj.scanTable = {}; // NodeId --> ScanInfo : { lastping: time, lastpong: time, nodeinfo:{node} }
    obj.scanTableTags = {}; // Tag --> ScanInfo
    obj.pendingSends = []; // We was to stagger the sends using a 10ms timer
    obj.pendingSendTimer = null;
    obj.mainTimer = null;
    obj.nextTag = 0;
    var PeriodicScanTime = 30000; // Interval between scan sweeps
    var PeriodicScanTimeout = 65000; // After this time, timeout the device.

    // Build a RMCP packet with a given tag field
    obj.buildRmcpPing = function (tag) {
        var packet = new Buffer(obj.common.hex2rstr('06000006000011BE80000000'), 'ascii');
        packet[9] = tag;
        return packet;
    }

    // Start scanning for local network Intel AMT computers
    obj.start = function () {
        obj.active = true;
        obj.performScan();
        obj.mainTimer = setInterval(obj.performScan, PeriodicScanTime);
        return obj;
    }

    // Stop scanning for local network Intel AMT computers
    obj.stop = function () {
        obj.active = false;
        for (var i in obj.servers) { obj.servers[i].close(); } // Stop all servers
        obj.servers = {};
        if (obj.mainTimer != null) { clearInterval(obj.mainTimer); obj.mainTimer = null; }
    }

    // Scan for Intel AMT computers using network multicast
    obj.performRangeScan = function (userid, rangestr) {
        if (obj.rpacket == null) { obj.rpacket = obj.buildRmcpPing(0); }
        var range = obj.parseIpv4Range(rangestr);
        //console.log(obj.IPv4NumToStr(range.min), obj.IPv4NumToStr(range.max));
        if (range == null || (range.min > range.max)) return false;
        var rangeinfo = { id: userid, range: rangestr, min: range.min, max: range.max, results: {} };
        obj.rserver[userid] = rangeinfo;
        rangeinfo.server = obj.dgram.createSocket("udp4");
        rangeinfo.server.bind(0);
        rangeinfo.server.on('error', (err) => { console.log(err); });
        rangeinfo.server.on('message', (data, rinfo) => { obj.parseRmcpPacket(data, rinfo, 0, obj.reportMachineState, rangeinfo); });
        rangeinfo.server.on('listening', () => {
            for (var i = rangeinfo.min; i <= rangeinfo.max; i++) { rangeinfo.server.send(obj.rpacket, 623, obj.IPv4NumToStr(i)); }
        });
        rangeinfo.timer = setTimeout(function () {
            obj.parent.DispatchEvent(['*', userid], obj, { action: 'scanamtdevice', range: rangeinfo.range, results: rangeinfo.results, nolog: 1 });
            rangeinfo.server.close();
            delete rangeinfo.server;
            delete rangeinfo;
        }, 3000);
        return true;
    }

    // Parse range, used to parse "ip", "ip/mask" or "ip-ip" notation.
    // Return the start and end value of the scan
    obj.parseIpv4Range = function (range) {
        if (range == undefined || range == null) return null;
        var x = range.split('-');
        if (x.length == 2) { return { min: obj.parseIpv4Addr(x[0]), max: obj.parseIpv4Addr(x[1]) }; }
        x = range.split('/');
        if (x.length == 2) {
            var ip = obj.parseIpv4Addr(x[0]), masknum = parseInt(x[1]), mask = 0;
            if (masknum <= 16 || masknum > 32) return null;
            masknum = 32 - masknum;
            for (var i = 0; i < masknum; i++) { mask = (mask << 1); mask++; }
            return { min: ip & (0xFFFFFFFF - mask), max: (ip & (0xFFFFFFFF - mask)) + mask };
        }
        x = obj.parseIpv4Addr(range);
        if (x == null) return null;
        return { min: x, max: x };
    }

    // Parse IP address. Takes a 
    obj.parseIpv4Addr = function (addr) {
        var x = addr.split('.');
        if (x.length == 4) { return (parseInt(x[0]) << 24) + (parseInt(x[1]) << 16) + (parseInt(x[2]) << 8) + (parseInt(x[3]) << 0); }
        return null;
    }

    // IP address number to string
    obj.IPv4NumToStr = function (num) {
        return ((num >> 24) & 0xFF) + '.' + ((num >> 16) & 0xFF) + '.' + ((num >> 8) & 0xFF) + '.' + (num & 0xFF);
    }

    // Look for all AMT computers that may be locally reachable and poll their presence
    obj.performScan = function () {
        if (obj.action == false) { return false; }
        obj.parent.db.getLocalAmtNodes(function (err, docs) {
            for (var i in obj.scanTable) { obj.scanTable[i].present = false; }
            if (err == null && docs.length > 0) {
                for (var i in docs) {
                    var doc = docs[i];
                    var host = doc.host.toLowerCase();
                    if ((host != '127.0.0.1') && (host != '::1') && (host != 'localhost')) { // Don't scan localhost
                        var scaninfo = obj.scanTable[doc._id];
                        if (scaninfo == undefined) {
                            var tag = obj.nextTag++;
                            obj.scanTableTags[tag] = obj.scanTable[doc._id] = scaninfo = { nodeinfo: doc, present: true, tag: tag, state: 0 };
                        } else {
                            scaninfo.present = true;
                            if (scaninfo.state == 1) {
                                var delta = Date.now() - scaninfo.lastpong;
                                if (delta > PeriodicScanTimeout) { // More than 10 seconds without a response, mark the node as unknown state
                                    scaninfo.state = 0;
                                    obj.parent.ClearConnectivityState(scaninfo.nodeinfo.meshid, scaninfo.nodeinfo._id, 4); // Clear connectivity state
                                }
                            }
                        }
                        // Start scanning this node
                        scaninfo.lastping = Date.now();
                        obj.checkAmtPresence(doc.host, scaninfo.tag);
                    }
               }
            }
            for (var i in obj.scanTable) {
                if (obj.scanTable[i].present == false) {
                    // Stop scanning this node
                    delete obj.scanTableTags[obj.scanTable[i].tag];
                    delete obj.scanTable[i];
                }
            }
        });
        return true;
    }

    // Check the presense of a specific Intel AMT computer
    obj.checkAmtPresence = function (host, tag) {
        var serverid = Math.floor(tag / 255);
        var servertag = (tag % 255);
        var packet = obj.buildRmcpPing(servertag);
        var server = obj.servers[serverid];
        if (server == undefined) {
            // Start new server
            server = obj.dgram.createSocket('udp4');
            server.on('error', (err) => { });
            server.on('message', (data, rinfo) => { obj.parseRmcpPacket(data, rinfo, serverid, obj.changeConnectState, null); });
            server.on('listening', () => {
                obj.pendingSends.push([ server, packet, host ]);
                if (obj.pendingSendTimer == null) { obj.pendingSendTimer = setInterval(obj.sendPendingPacket, 10); }
            });
            server.bind(0);
            obj.servers[serverid] = server;
        } else {
            // Use existing server
            obj.pendingSends.push([ server, packet, host ]);
            if (obj.pendingSendTimer == null) { obj.pendingSendTimer = setInterval(obj.sendPendingPacket, 10); }
        }
    }

    // Send a pending RMCP packet
    obj.sendPendingPacket = function() {
        try {
            var p = obj.pendingSends.shift();
            if (p != undefined) {
                p[0].send(p[1], 623, p[2]);
                p[0].send(p[1], 623, p[2]);
            } else {
                clearInterval(obj.pendingSendTimer);
                obj.pendingSendTimer = null;
            }
        } catch (e) { }
    }

    // Parse RMCP packet
    obj.parseRmcpPacket = function (data, rinfo, serverid, func, user) {
        if (data == null || data.length < 20) return;
        if (((data[12] == 0) || (data[13] != 0) || (data[14] != 1) || (data[15] != 0x57)) && (data[21] & 32)) {
            var servertag = data[9];
            var tag = (serverid * 255) + servertag;
            var minorVersion = data[18] & 0x0F;
            var majorVersion = (data[18] >> 4) & 0x0F;
            var provisioningState = data[19] & 0x03; // Pre = 0, In = 1, Post = 2
            
            var openPort = (data[16] * 256) + data[17];
            var dualPorts = ((data[19] & 0x04) != 0) ? true : false;
            var openPorts = [openPort];
            if (dualPorts == true) { openPorts = [16992, 16993]; }
            if (provisioningState <= 2) { func(tag, minorVersion, majorVersion, provisioningState, openPort, dualPorts, rinfo, user); }
        }
    }

    // Use the RMCP packet to change the computer state
    obj.changeConnectState = function (tag, minorVersion, majorVersion, provisioningState, openPort, dualPorts, rinfo, user) {
        //var provisioningStates = { 0: 'Pre', 1: 'in', 2: 'Post' };
        //var provisioningStateStr = provisioningStates[provisioningState];
        //console.log('Intel AMT ' + majorVersion + '.' + minorVersion + ', ' + provisioningStateStr + '-Provisioning at ' + rinfo.address + ', Open Ports: [' + openPorts.join(', ') + '], tag: ' + tag);
        var scaninfo = obj.scanTableTags[tag];
        if (scaninfo != undefined) {
            scaninfo.lastpong = Date.now();
            if (scaninfo.state == 0) {
                scaninfo.state = 1;
                scaninfo.nodeinfo.intelamt.tls = (((openPort == 16993) || (dualPorts == true)) ? 1 : 0);
                scaninfo.nodeinfo.intelamt.ver = majorVersion + '.' + minorVersion;
                scaninfo.nodeinfo.intelamt.state = provisioningState;
                obj.parent.SetConnectivityState(scaninfo.nodeinfo.meshid, scaninfo.nodeinfo._id, scaninfo.lastpong, 4, 7); // Report power state as "present" (7).
                obj.changeAmtState(scaninfo.nodeinfo._id, scaninfo.nodeinfo.intelamt.ver, provisioningState, scaninfo.nodeinfo.intelamt.tls);
            }
        }
    }

	// Use the RMCP packet to change the computer state
	obj.reportMachineState = function (tag, minorVersion, majorVersion, provisioningState, openPort, dualPorts, rinfo, user) {
	    //var provisioningStates = { 0: 'Pre', 1: 'in', 2: 'Post' };
	    //var provisioningStateStr = provisioningStates[provisioningState];
	    //console.log(rinfo.address + ': Intel AMT ' + majorVersion + '.' + minorVersion + ', ' + provisioningStateStr + '-Provisioning, Open Ports: [' + openPorts.join(', ') + ']');
        obj.dns.reverse(rinfo.address, function (err, hostname) {
            if ((err != undefined) && (hostname != undefined)) {
	            user.results[rinfo.address] = { ver: majorVersion + '.' + minorVersion, tls: (((openPort == 16993) || (dualPorts == true)) ? 1 : 0), state: provisioningState, hostname: hostname[0] };
	        } else {
	            user.results[rinfo.address] = { ver: majorVersion + '.' + minorVersion, tls: (((openPort == 16993) || (dualPorts == true)) ? 1 : 0), state: provisioningState, hostname: rinfo.address };
	        }
	    });
	}

    // Change Intel AMT information in the database and event the changes
    obj.changeAmtState = function (nodeid, version, provisioningState, tls) {
        //console.log('changeAmtState', nodeid, version, provisioningState, tls);
        obj.parent.db.Get(nodeid, function (err, nodes) {
            if (nodes.length != 1) return;
            var node = nodes[0];

            // Get the mesh for this device
            obj.parent.db.Get(node.meshid, function (err, meshes) {
                if (meshes.length != 1) return;
                var mesh = meshes[0];

                // Ready the node change event
                var changes = [], event = { etype: 'node', action: 'changenode', nodeid: node._id };
                event.msg = +": ";

                // Make the change & save
                var change = false;
                if (node.intelamt == undefined) { node.intelamt = {}; }
                if (node.intelamt.tls != tls) { node.intelamt.tls = tls; change = true; changes.push(tls==1?'TLS':'NoTLS'); }
                if (obj.compareAmtVersionStr(node.intelamt.ver, version)) { node.intelamt.ver = version; change = true; changes.push('Version ' + version); }
                if (node.intelamt.state != provisioningState) { node.intelamt.state = provisioningState; change = true; changes.push('State'); }
                if (change == true) {
                    // Make the change in the database
                    obj.parent.db.Set(node);

                    // Event the node change
                    event.msg = 'Intel&reg; AMT changed device ' + node.name + ' from mesh ' + mesh.name + ': ' + changes.join(', ');
                    var node2 = obj.parent.common.Clone(node);
                    if (node2.intelamt && node2.intelamt.pass) delete node2.intelamt.pass; // Remove the Intel AMT password before eventing this.
                    event.node = node2;
                    obj.parent.DispatchEvent(['*', node.meshid], obj, event);
                }
            });
        });
    }

    // Return true if we should change the Intel AMT version number
    obj.compareAmtVersionStr = function (oldVer, newVer) {
        if (oldVer == newVer) return false; // Versions are same already, don't update.
        if (newVer == undefined || newVer == null) return false; // New version is bad, don't update it.
        if (oldVer == undefined || oldVer == null) return true; // Old version is no good anyway, update it.
        var oldVerArr = oldVer.split('.');
        var newVerArr = newVer.split('.');
        if ((oldVerArr.length < 2) || (newVerArr.length < 2)) return false;
        if ((oldVerArr[0] != newVerArr[0]) || (oldVerArr[1] != newVerArr[1])) return true;
        if (newVerArr.length > oldVerArr.length) return true;
        if ((newVerArr.length == 3) && (oldVerArr.length == 3) && (oldVerArr[2] != newVerArr[2])) return true;
        return false;
    }

    return obj;
}