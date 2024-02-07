FROM node:20-buster

RUN set -ex; \
    apt-get update -y; \
    apt-get install -y \
        ffmpeg libx265-dev openssl supervisor nginx postgresql postgresql-client \
    ; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
    :

WORKDIR /app

RUN mkdir -p /app/apps/front /app/apps/server /app/packages/tmdb /app/packages/sockets /app/packages/server-db-schemas /app/packages/nestjs-commons
COPY package*.json /app
COPY apps/front/package.json /app/apps/front
COPY apps/server/package.json /app/apps/server
COPY packages/tmdb/package.json /app/packages/tmdb
COPY packages/sockets/package.json /app/packages/sockets
COPY packages/server-db-schemas/package.json /app/packages/server-db-schemas
COPY packages/nestjs-commons/package.json /app/packages/nestjs-commons

RUN npm ci
COPY turbo.json /app 
COPY apps/ /app/apps 
COPY packages/ /app/packages 

ARG API_PORT
ENV API_PORT=$API_PORT

ARG API_WS_PORT
ENV API_WS_PORT=$API_WS_PORT

RUN npm run build

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# COPY docker/init.sh /opt/init.sh

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
