var MemoryStream = require('MemoryStream');
var WindowsWireless = new Buffer([
0x0A, 0x66, 0x75, 0x6E, 0x63, 0x74, 0x69, 0x6F, 0x6E, 0x20, 0x5F, 0x53, 0x63, 0x61, 0x6E, 0x28, 0x29, 0x0A, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x77, 0x6C, 0x61, 0x6E,
0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x57, 0x6C, 0x61, 0x6E, 0x45,
0x6E, 0x75, 0x6D, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x77, 0x6C,
0x61, 0x6E, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x63, 0x6F, 0x75, 0x6E, 0x74, 0x20, 0x3D, 0x20,
0x77, 0x6C, 0x61, 0x6E, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x30, 0x2C, 0x20,
0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x20, 0x3D, 0x20, 0x77, 0x6C, 0x61, 0x6E, 0x49, 0x6E, 0x74, 0x65,
0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x38, 0x2C, 0x20, 0x35, 0x33, 0x32, 0x29, 0x3B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x6E, 0x61, 0x6D, 0x65, 0x20, 0x3D, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x31, 0x36, 0x2C, 0x20, 0x35, 0x31, 0x32,
0x29, 0x2E, 0x41, 0x6E, 0x73, 0x69, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x3B, 0x0A, 0x20,
0x20, 0x20, 0x20, 0x73, 0x77, 0x69, 0x74, 0x63, 0x68, 0x20, 0x28, 0x69, 0x6E, 0x66, 0x6F, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x35, 0x32, 0x38, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61,
0x6C, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65, 0x20, 0x30, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x4E, 0x4F, 0x54, 0x20, 0x52, 0x45, 0x41, 0x44, 0x59, 0x22, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65, 0x20, 0x31, 0x3A, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x43, 0x4F, 0x4E, 0x4E, 0x45, 0x43, 0x54, 0x45, 0x44, 0x22, 0x3B, 0x0A,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65, 0x20,
0x32, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x41, 0x44, 0x2D, 0x48, 0x4F, 0x43, 0x22,
0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73,
0x65, 0x20, 0x33, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x44, 0x49, 0x53, 0x43, 0x4F,
0x4E, 0x4E, 0x45, 0x43, 0x54, 0x49, 0x4E, 0x47, 0x22, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65, 0x20, 0x34, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65,
0x20, 0x3D, 0x20, 0x22, 0x44, 0x49, 0x53, 0x43, 0x4F, 0x4E, 0x4E, 0x45, 0x43, 0x54, 0x45, 0x44, 0x22, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62,
0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65, 0x20, 0x35, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x41, 0x53, 0x53, 0x4F, 0x43, 0x49, 0x41, 0x54, 0x49, 0x4E, 0x47, 0x22, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65, 0x20, 0x36, 0x3A, 0x0A, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x44, 0x49, 0x53, 0x43, 0x4F, 0x56, 0x45, 0x52, 0x49, 0x4E, 0x47, 0x22, 0x3B,
0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x61, 0x73, 0x65,
0x20, 0x37, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x22, 0x41, 0x55, 0x54, 0x48, 0x45, 0x4E,
0x54, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4E, 0x47, 0x22, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B, 0x3B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6C, 0x74, 0x3A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74,
0x65, 0x20, 0x3D, 0x20, 0x22, 0x55, 0x4E, 0x4B, 0x4E, 0x4F, 0x57, 0x4E, 0x22, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x62, 0x72, 0x65, 0x61, 0x6B,
0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x67, 0x75, 0x69, 0x64, 0x20, 0x3D, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x2E, 0x44, 0x65,
0x72, 0x65, 0x66, 0x28, 0x30, 0x2C, 0x20, 0x31, 0x36, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E,
0x57, 0x6C, 0x61, 0x6E, 0x53, 0x63, 0x61, 0x6E, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x2C, 0x20, 0x69, 0x67, 0x75, 0x69, 0x64, 0x2C, 0x20, 0x30, 0x2C, 0x20,
0x30, 0x2C, 0x20, 0x30, 0x29, 0x20, 0x3D, 0x3D, 0x20, 0x30, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6E,
0x20, 0x28, 0x74, 0x72, 0x75, 0x65, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x65, 0x6C, 0x73, 0x65, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6E, 0x20, 0x28, 0x66, 0x61, 0x6C, 0x73, 0x65, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x7D, 0x0A, 0x0A, 0x66,
0x75, 0x6E, 0x63, 0x74, 0x69, 0x6F, 0x6E, 0x20, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x28, 0x5F, 0x73, 0x73, 0x69, 0x64, 0x2C, 0x20, 0x5F, 0x62, 0x73, 0x73, 0x69,
0x64, 0x2C, 0x20, 0x5F, 0x72, 0x73, 0x73, 0x69, 0x2C, 0x20, 0x5F, 0x6C, 0x71, 0x29, 0x0A, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x73, 0x73, 0x69, 0x64, 0x20, 0x3D,
0x20, 0x5F, 0x73, 0x73, 0x69, 0x64, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x62, 0x73, 0x73, 0x69, 0x64, 0x20, 0x3D, 0x20, 0x5F, 0x62, 0x73, 0x73, 0x69, 0x64, 0x3B,
0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x72, 0x73, 0x73, 0x69, 0x20, 0x3D, 0x20, 0x5F, 0x72, 0x73, 0x73, 0x69, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73,
0x2E, 0x6C, 0x71, 0x20, 0x3D, 0x20, 0x5F, 0x6C, 0x71, 0x3B, 0x0A, 0x7D, 0x0A, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x2E, 0x70, 0x72, 0x6F, 0x74, 0x6F, 0x74, 0x79,
0x70, 0x65, 0x2E, 0x74, 0x6F, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x20, 0x3D, 0x20, 0x66, 0x75, 0x6E, 0x63, 0x74, 0x69, 0x6F, 0x6E, 0x28, 0x29, 0x0A, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x72,
0x65, 0x74, 0x75, 0x72, 0x6E, 0x20, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x73, 0x73, 0x69, 0x64, 0x20, 0x2B, 0x20, 0x22, 0x20, 0x5B, 0x22, 0x20, 0x2B, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x62,
0x73, 0x73, 0x69, 0x64, 0x20, 0x2B, 0x20, 0x22, 0x5D, 0x3A, 0x20, 0x22, 0x20, 0x2B, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x6C, 0x71, 0x29, 0x3B, 0x0A, 0x7D, 0x0A, 0x0A, 0x66, 0x75, 0x6E, 0x63,
0x74, 0x69, 0x6F, 0x6E, 0x20, 0x4F, 0x6E, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x79, 0x28, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x44, 0x61, 0x74, 0x61, 0x29, 0x0A,
0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x53, 0x6F, 0x75, 0x72, 0x63, 0x65, 0x20, 0x3D, 0x20, 0x4E,
0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x44, 0x61, 0x74, 0x61, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x30, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B,
0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x43, 0x6F, 0x64, 0x65, 0x20, 0x3D, 0x20, 0x4E, 0x6F, 0x74, 0x69,
0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x44, 0x61, 0x74, 0x61, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x34, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x64, 0x61, 0x74, 0x61, 0x47, 0x75, 0x69, 0x64, 0x20, 0x3D, 0x20, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x44, 0x61, 0x74,
0x61, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x38, 0x2C, 0x20, 0x31, 0x36, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x28, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69,
0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x53, 0x6F, 0x75, 0x72, 0x63, 0x65, 0x20, 0x26, 0x20, 0x30, 0x58, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x38, 0x29, 0x20, 0x26, 0x26, 0x20, 0x28, 0x4E,
0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x43, 0x6F, 0x64, 0x65, 0x20, 0x3D, 0x3D, 0x20, 0x37, 0x29, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x62, 0x73, 0x73, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x50, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68,
0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20,
0x72, 0x65, 0x73, 0x75, 0x6C, 0x74, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x50, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x47, 0x65, 0x74, 0x42,
0x53, 0x53, 0x4C, 0x69, 0x73, 0x74, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x50, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x2E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x2C, 0x20, 0x64, 0x61, 0x74, 0x61, 0x47,
0x75, 0x69, 0x64, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x33, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x62, 0x73, 0x73, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69,
0x66, 0x20, 0x28, 0x72, 0x65, 0x73, 0x75, 0x6C, 0x74, 0x20, 0x3D, 0x3D, 0x20, 0x30, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x74, 0x6F, 0x74, 0x61, 0x6C, 0x53, 0x69, 0x7A, 0x65, 0x20, 0x3D, 0x20, 0x62, 0x73, 0x73, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28,
0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x30, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76,
0x61, 0x72, 0x20, 0x6E, 0x75, 0x6D, 0x49, 0x74, 0x65, 0x6D, 0x73, 0x20, 0x3D, 0x20, 0x62, 0x73, 0x73, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28,
0x34, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6F, 0x72, 0x20, 0x28, 0x69, 0x20, 0x3D, 0x20,
0x30, 0x3B, 0x20, 0x69, 0x20, 0x3C, 0x20, 0x6E, 0x75, 0x6D, 0x49, 0x74, 0x65, 0x6D, 0x73, 0x3B, 0x20, 0x2B, 0x2B, 0x69, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x74, 0x65, 0x6D, 0x20, 0x3D, 0x20, 0x62,
0x73, 0x73, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x38, 0x20, 0x2B, 0x20, 0x28, 0x33, 0x36, 0x30, 0x20, 0x2A, 0x20, 0x69, 0x29, 0x2C, 0x20,
0x33, 0x36, 0x30, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x73, 0x73, 0x69, 0x64, 0x20, 0x3D,
0x20, 0x69, 0x74, 0x65, 0x6D, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x34, 0x2C, 0x20, 0x33, 0x32, 0x29, 0x2E, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x2E, 0x74, 0x72, 0x69, 0x6D, 0x28, 0x29,
0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x62, 0x73, 0x73, 0x69, 0x64, 0x20, 0x3D, 0x20, 0x69, 0x74,
0x65, 0x6D, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x34, 0x30, 0x2C, 0x20, 0x36, 0x29, 0x2E, 0x48, 0x65, 0x78, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x32, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x72, 0x73, 0x73, 0x69, 0x20, 0x3D, 0x20, 0x69, 0x74, 0x65, 0x6D, 0x2E, 0x44, 0x65, 0x72, 0x65,
0x66, 0x28, 0x35, 0x36, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61,
0x72, 0x20, 0x6C, 0x71, 0x20, 0x3D, 0x20, 0x69, 0x74, 0x65, 0x6D, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x36, 0x30, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x0A, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x50, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x2E, 0x65, 0x6D, 0x69, 0x74, 0x28,
0x27, 0x53, 0x63, 0x61, 0x6E, 0x27, 0x2C, 0x20, 0x6E, 0x65, 0x77, 0x20, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x28, 0x73, 0x73, 0x69, 0x64, 0x2C, 0x20, 0x62, 0x73,
0x73, 0x69, 0x64, 0x2C, 0x20, 0x72, 0x73, 0x73, 0x69, 0x2C, 0x20, 0x6C, 0x71, 0x29, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x7D, 0x0A, 0x0A, 0x66, 0x75, 0x6E, 0x63, 0x74, 0x69, 0x6F, 0x6E, 0x20, 0x57, 0x69, 0x72, 0x65,
0x6C, 0x65, 0x73, 0x73, 0x28, 0x29, 0x0A, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x65, 0x6D, 0x69, 0x74, 0x74, 0x65, 0x72, 0x55, 0x74, 0x69, 0x6C, 0x73, 0x20, 0x3D, 0x20,
0x72, 0x65, 0x71, 0x75, 0x69, 0x72, 0x65, 0x28, 0x27, 0x65, 0x76, 0x65, 0x6E, 0x74, 0x73, 0x27, 0x29, 0x2E, 0x69, 0x6E, 0x68, 0x65, 0x72, 0x69, 0x74, 0x73, 0x28, 0x74, 0x68, 0x69, 0x73, 0x29,
0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x20, 0x3D, 0x20, 0x72, 0x65, 0x71, 0x75, 0x69, 0x72, 0x65, 0x28, 0x27, 0x5F,
0x47, 0x65, 0x6E, 0x65, 0x72, 0x69, 0x63, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x27, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76,
0x65, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x50, 0x72, 0x6F,
0x78, 0x79, 0x28, 0x22, 0x77, 0x6C, 0x61, 0x6E, 0x61, 0x70, 0x69, 0x2E, 0x64, 0x6C, 0x6C, 0x22, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69,
0x76, 0x65, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4D, 0x65, 0x74, 0x68, 0x6F, 0x64, 0x28, 0x22, 0x57, 0x6C, 0x61, 0x6E, 0x4F, 0x70, 0x65, 0x6E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x22,
0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4D, 0x65, 0x74, 0x68, 0x6F, 0x64, 0x28,
0x22, 0x57, 0x6C, 0x61, 0x6E, 0x47, 0x65, 0x74, 0x4E, 0x65, 0x74, 0x77, 0x6F, 0x72, 0x6B, 0x42, 0x73, 0x73, 0x4C, 0x69, 0x73, 0x74, 0x22, 0x2C, 0x20, 0x22, 0x47, 0x65, 0x74, 0x42, 0x53, 0x53,
0x4C, 0x69, 0x73, 0x74, 0x22, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4D, 0x65,
0x74, 0x68, 0x6F, 0x64, 0x28, 0x22, 0x57, 0x6C, 0x61, 0x6E, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x22, 0x29,
0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4D, 0x65, 0x74, 0x68, 0x6F, 0x64, 0x28, 0x22,
0x57, 0x6C, 0x61, 0x6E, 0x45, 0x6E, 0x75, 0x6D, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x22, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E,
0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4D, 0x65, 0x74, 0x68, 0x6F, 0x64, 0x28, 0x22, 0x57, 0x6C, 0x61, 0x6E, 0x53, 0x63, 0x61, 0x6E, 0x22, 0x29, 0x3B, 0x0A,
0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4D, 0x65, 0x74, 0x68, 0x6F, 0x64, 0x28, 0x22, 0x57, 0x6C,
0x61, 0x6E, 0x51, 0x75, 0x65, 0x72, 0x79, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x22, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x6E, 0x65, 0x67,
0x6F, 0x74, 0x69, 0x61, 0x74, 0x65, 0x64, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69,
0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x68, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C,
0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69,
0x76, 0x65, 0x2E, 0x57, 0x6C, 0x61, 0x6E, 0x4F, 0x70, 0x65, 0x6E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x28, 0x32, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x6E, 0x65, 0x67, 0x6F, 0x74, 0x69, 0x61, 0x74,
0x65, 0x64, 0x2C, 0x20, 0x68, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x20, 0x3D, 0x20, 0x68, 0x2E, 0x56, 0x61, 0x6C, 0x3B,
0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x5F, 0x4E, 0x4F, 0x54, 0x49, 0x46, 0x59, 0x5F, 0x50, 0x52, 0x4F, 0x58, 0x59, 0x5F, 0x4F, 0x42, 0x4A, 0x45, 0x43, 0x54, 0x20,
0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x61, 0x6C, 0x6C, 0x62, 0x61, 0x63, 0x6B, 0x50, 0x72, 0x6F,
0x78, 0x79, 0x28, 0x4F, 0x6E, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x79, 0x2C, 0x20, 0x32, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x5F, 0x4E, 0x4F, 0x54, 0x49, 0x46,
0x59, 0x5F, 0x50, 0x52, 0x4F, 0x58, 0x59, 0x5F, 0x4F, 0x42, 0x4A, 0x45, 0x43, 0x54, 0x2E, 0x50, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x3B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x50, 0x72, 0x65, 0x76, 0x53, 0x6F, 0x75, 0x72, 0x63, 0x65, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E,
0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x72, 0x65, 0x73, 0x75, 0x6C, 0x74, 0x20,
0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x57, 0x6C, 0x61, 0x6E, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x4E, 0x6F, 0x74, 0x69, 0x66, 0x69,
0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x2C, 0x20, 0x30, 0x58, 0x30, 0x30, 0x30, 0x30, 0x46, 0x46, 0x46, 0x46, 0x2C, 0x20,
0x30, 0x2C, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x5F, 0x4E, 0x4F, 0x54, 0x49, 0x46, 0x59, 0x5F, 0x50, 0x52, 0x4F, 0x58, 0x59, 0x5F, 0x4F, 0x42, 0x4A, 0x45, 0x43, 0x54, 0x2E, 0x43, 0x61, 0x6C,
0x6C, 0x62, 0x61, 0x63, 0x6B, 0x2C, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x5F, 0x4E, 0x4F, 0x54, 0x49, 0x46, 0x59, 0x5F, 0x50, 0x52, 0x4F, 0x58, 0x59, 0x5F, 0x4F, 0x42, 0x4A, 0x45, 0x43, 0x54,
0x2E, 0x53, 0x74, 0x61, 0x74, 0x65, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x50, 0x72, 0x65, 0x76, 0x53, 0x6F, 0x75, 0x72, 0x63, 0x65, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x65, 0x6D, 0x69,
0x74, 0x74, 0x65, 0x72, 0x55, 0x74, 0x69, 0x6C, 0x73, 0x2E, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x76, 0x65, 0x6E, 0x74, 0x28, 0x27, 0x53, 0x63, 0x61, 0x6E, 0x27, 0x29, 0x3B, 0x0A, 0x20,
0x20, 0x20, 0x20, 0x65, 0x6D, 0x69, 0x74, 0x74, 0x65, 0x72, 0x55, 0x74, 0x69, 0x6C, 0x73, 0x2E, 0x61, 0x64, 0x64, 0x4D, 0x65, 0x74, 0x68, 0x6F, 0x64, 0x28, 0x27, 0x53, 0x63, 0x61, 0x6E, 0x27,
0x2C, 0x20, 0x5F, 0x53, 0x63, 0x61, 0x6E, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x47, 0x65, 0x74, 0x43, 0x6F, 0x6E, 0x6E, 0x65, 0x63, 0x74, 0x65, 0x64,
0x4E, 0x65, 0x74, 0x77, 0x6F, 0x72, 0x6B, 0x20, 0x3D, 0x20, 0x66, 0x75, 0x6E, 0x63, 0x74, 0x69, 0x6F, 0x6E, 0x20, 0x28, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61,
0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x69, 0x73,
0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x57, 0x6C, 0x61, 0x6E, 0x45, 0x6E, 0x75, 0x6D, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x28, 0x74, 0x68, 0x69, 0x73, 0x2E,
0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x63, 0x6F, 0x75, 0x6E, 0x74, 0x20, 0x3D, 0x20, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x2E,
0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x30, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x20, 0x3D, 0x20, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44,
0x65, 0x72, 0x65, 0x66, 0x28, 0x38, 0x2C, 0x20, 0x35, 0x33, 0x32, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x6E, 0x61, 0x6D, 0x65, 0x20,
0x3D, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x31, 0x36, 0x2C, 0x20, 0x35, 0x31, 0x32, 0x29, 0x2E, 0x41, 0x6E, 0x73, 0x69, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67,
0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x73, 0x74, 0x61, 0x74, 0x65, 0x20, 0x3D, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x2E, 0x44, 0x65, 0x72, 0x65,
0x66, 0x28, 0x35, 0x32, 0x38, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x49, 0x6E, 0x74, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x28, 0x69, 0x6E,
0x66, 0x6F, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x35, 0x32, 0x38, 0x2C, 0x20, 0x34, 0x29, 0x2E, 0x49, 0x6E, 0x74, 0x56, 0x61, 0x6C, 0x20, 0x3D, 0x3D, 0x20, 0x31, 0x29, 0x20, 0x2F, 0x2F,
0x20, 0x43, 0x4F, 0x4E, 0x4E, 0x45, 0x43, 0x54, 0x45, 0x44, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x76, 0x61, 0x72, 0x20, 0x64, 0x61, 0x74, 0x61, 0x53, 0x69, 0x7A, 0x65, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65,
0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x70, 0x44,
0x61, 0x74, 0x61, 0x20, 0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72,
0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x76, 0x61, 0x6C, 0x75, 0x65, 0x54, 0x79, 0x70, 0x65, 0x20, 0x3D, 0x20,
0x74, 0x68, 0x69, 0x73, 0x2E, 0x4D, 0x61, 0x72, 0x73, 0x68, 0x61, 0x6C, 0x2E, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x65, 0x72, 0x28, 0x29, 0x3B, 0x0A, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x69, 0x67, 0x75, 0x69, 0x64, 0x20, 0x3D, 0x20, 0x69, 0x6E, 0x66, 0x6F, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66,
0x28, 0x30, 0x2C, 0x20, 0x31, 0x36, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x72, 0x65, 0x74, 0x56, 0x61, 0x6C, 0x20,
0x3D, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x4E, 0x61, 0x74, 0x69, 0x76, 0x65, 0x2E, 0x57, 0x6C, 0x61, 0x6E, 0x51, 0x75, 0x65, 0x72, 0x79, 0x49, 0x6E, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65,
0x28, 0x74, 0x68, 0x69, 0x73, 0x2E, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x2C, 0x20, 0x69, 0x67, 0x75, 0x69, 0x64, 0x2C, 0x20, 0x37, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x64, 0x61, 0x74, 0x61, 0x53,
0x69, 0x7A, 0x65, 0x2C, 0x20, 0x70, 0x44, 0x61, 0x74, 0x61, 0x2C, 0x20, 0x76, 0x61, 0x6C, 0x75, 0x65, 0x54, 0x79, 0x70, 0x65, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x72, 0x65, 0x74, 0x56, 0x61, 0x6C, 0x20, 0x3D, 0x3D, 0x20, 0x30, 0x29, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x7B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72, 0x20, 0x61, 0x73, 0x73, 0x6F, 0x63, 0x69, 0x61, 0x74, 0x65,
0x64, 0x53, 0x53, 0x49, 0x44, 0x20, 0x3D, 0x20, 0x70, 0x44, 0x61, 0x74, 0x61, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x35, 0x32, 0x34, 0x2C,
0x20, 0x33, 0x32, 0x29, 0x2E, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 0x61, 0x72,
0x20, 0x62, 0x73, 0x73, 0x69, 0x64, 0x20, 0x3D, 0x20, 0x70, 0x44, 0x61, 0x74, 0x61, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x35, 0x36, 0x30,
0x2C, 0x20, 0x36, 0x29, 0x2E, 0x48, 0x65, 0x78, 0x53, 0x74, 0x72, 0x69, 0x6E, 0x67, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x76, 0x61, 0x72, 0x20, 0x6C, 0x71, 0x20, 0x3D, 0x20, 0x70, 0x44, 0x61, 0x74, 0x61, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x29, 0x2E, 0x44, 0x65, 0x72, 0x65, 0x66, 0x28, 0x35, 0x37, 0x36,
0x2C, 0x20, 0x34, 0x29, 0x2E, 0x49, 0x6E, 0x74, 0x56, 0x61, 0x6C, 0x3B, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65,
0x74, 0x75, 0x72, 0x6E, 0x20, 0x28, 0x6E, 0x65, 0x77, 0x20, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6F, 0x69, 0x6E, 0x74, 0x28, 0x61, 0x73, 0x73, 0x6F, 0x63, 0x69, 0x61, 0x74, 0x65, 0x64,
0x53, 0x53, 0x49, 0x44, 0x2C, 0x20, 0x62, 0x73, 0x73, 0x69, 0x64, 0x2C, 0x20, 0x30, 0x2C, 0x20, 0x6C, 0x71, 0x29, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
0x20, 0x20, 0x7D, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x7D, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x72, 0x6F, 0x77, 0x20, 0x28, 0x22, 0x47, 0x65,
0x74, 0x43, 0x6F, 0x6E, 0x6E, 0x65, 0x63, 0x74, 0x65, 0x64, 0x4E, 0x65, 0x74, 0x77, 0x6F, 0x72, 0x6B, 0x73, 0x3A, 0x20, 0x46, 0x41, 0x49, 0x4C, 0x45, 0x44, 0x20, 0x28, 0x6E, 0x6F, 0x74, 0x20,
0x61, 0x73, 0x73, 0x6F, 0x63, 0x69, 0x61, 0x74, 0x65, 0x64, 0x20, 0x74, 0x6F, 0x20, 0x61, 0x20, 0x6E, 0x65, 0x74, 0x77, 0x6F, 0x72, 0x6B, 0x29, 0x22, 0x29, 0x3B, 0x0A, 0x20, 0x20, 0x20, 0x20,
0x7D, 0x3B, 0x0A, 0x0A, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6E, 0x20, 0x28, 0x74, 0x68, 0x69, 0x73, 0x29, 0x3B, 0x0A, 0x7D, 0x0A, 0x0A, 0x6D, 0x6F, 0x64, 0x75, 0x6C,
0x65, 0x2E, 0x65, 0x78, 0x70, 0x6F, 0x72, 0x74, 0x73, 0x20, 0x3D, 0x20, 0x6E, 0x65, 0x77, 0x20, 0x57, 0x69, 0x72, 0x65, 0x6C, 0x65, 0x73, 0x73, 0x28, 0x29, 0x3B, 0x0A]);



var WindowsChildScript = new Buffer([
0x76, 0x61, 0x72, 0x20, 0x70, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x20, 0x3D, 0x20, 0x72, 0x65, 0x71, 0x75, 0x69, 0x72, 0x65, 0x28, 0x27, 0x53, 0x63, 0x72, 0x69, 0x70, 0x74, 0x43, 0x6F, 0x6E, 0x74,
0x61, 0x69, 0x6E, 0x65, 0x72, 0x27, 0x29, 0x3B, 0x0D, 0x0A, 0x76, 0x61, 0x72, 0x20, 0x57, 0x69, 0x72, 0x65, 0x6C, 0x65, 0x73, 0x73, 0x20, 0x3D, 0x20, 0x72, 0x65, 0x71, 0x75, 0x69, 0x72, 0x65,
0x28, 0x27, 0x57, 0x69, 0x72, 0x65, 0x6C, 0x65, 0x73, 0x73, 0x27, 0x29, 0x3B, 0x0D, 0x0A, 0x0D, 0x0A, 0x57, 0x69, 0x72, 0x65, 0x6C, 0x65, 0x73, 0x73, 0x2E, 0x6F, 0x6E, 0x28, 0x27, 0x53, 0x63,
0x61, 0x6E, 0x27, 0x2C, 0x20, 0x66, 0x75, 0x6E, 0x63, 0x74, 0x69, 0x6F, 0x6E, 0x20, 0x28, 0x61, 0x70, 0x29, 0x20, 0x7B, 0x20, 0x70, 0x61, 0x72, 0x65, 0x6E, 0x74, 0x2E, 0x73, 0x65, 0x6E, 0x64,
0x28, 0x61, 0x70, 0x29, 0x3B, 0x20, 0x7D, 0x29, 0x3B, 0x0D, 0x0A, 0x57, 0x69, 0x72, 0x65, 0x6C, 0x65, 0x73, 0x73, 0x2E, 0x53, 0x63, 0x61, 0x6E, 0x28, 0x29, 0x3B, 0x0D, 0x0A]);


function AccessPoint(_ssid, _bssid, _lq)
{
    this.ssid = _ssid;
    this.bssid = _bssid;
    this.lq = _lq;
}
AccessPoint.prototype.toString = function ()
{
    return (this.ssid + " [" + this.bssid + "]: " + this.lq);
}

function WiFiScanner()
{
    var emitterUtils = require('events').inherits(this);
    emitterUtils.createEvent('accessPoint');

    this.hasWireless = function ()
    {
        var retVal = false;
        var interfaces = require('os').networkInterfaces();
        for (var name in interfaces)
        {
            if (interfaces[name][0].type == 'wireless') { retVal = true; break; }
        }
        return (retVal);
    };

    this.Scan = function ()
    {
        if (process.platform == 'win32')
        {
            this.master = require('ScriptContainer').Create(15, ContainerPermissions.DEFAULT);
            this.master.parent = this;
            this.master.on('data', function (j) { this.parent.emit('accessPoint', new AccessPoint(j.ssid, j.bssid, j.lq)); });

            this.master.addModule('Wireless', WindowsWireless.toString());
            this.master.ExecuteString(WindowsChildScript.toString());
        }
        else if (process.platform == 'linux')
        {
            // Need to get the wireless interface name
            var interfaces = require('os').networkInterfaces();
            var wlan = null;
            for (var i in interfaces)
            {
                if (interfaces[i][0].type == 'wireless')
                {
                    wlan = i;
                    break;
                }
            }
            if (wlan != null)
            {
                this.child = require('ILibProcessPipe').CreateProcess("/sbin/iwlist", "iwlist", wlan, "scan");
                this.child.parent = this;
                this.child.ms = new MemoryStream();
                this.child.ms.parent = this.child;
                this.child.on('data', function (buffer) { this.ms.write(buffer); });
                this.child.on('end', function () { this.ms.end(); });
                this.child.ms.on('end', function ()
                {
                    var str = this.buffer.toString();
                    tokens = str.split(' - Address: ');
                    for (var block in tokens)
                    {
                        if (block == 0) continue;
                        var ln = tokens[block].split('\n');
                        var _bssid = ln[0];
                        var _lq;
                        var _ssid;

                        for (var lnblock in ln)
                        {
                            lnblock = ln[lnblock].trim();
                            lnblock = lnblock.trim();
                            if (lnblock.startsWith('ESSID:'))
                            {
                                _ssid = lnblock.slice(7, lnblock.length - 1);
                                if (_ssid == '<hidden>') { _ssid = ''; }
                            }
                            if (lnblock.startsWith('Signal level='))
                            {
                                _lq = lnblock.slice(13,lnblock.length-4);
                            }
                        }
                        this.parent.parent.emit('accessPoint', new AccessPoint(_ssid, _bssid, _lq));
                    }
                });
            }
        }
    }
}

module.exports = WiFiScanner;







