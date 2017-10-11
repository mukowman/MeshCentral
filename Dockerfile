FROM node
MAINTAINER mukowman

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm config set package-lock false && \
    npm install --production && \
    npm cache clean --force

COPY . /usr/src/app

WORKDIR /root

EXPOSE 8001 2008
VOULME /root
ENTRYPOINT ["/usr/src/app/bin/meshcentral.js", "--notls", "--port 8001", "--mpsport 8002"]
