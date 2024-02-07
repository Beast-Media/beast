FROM node:20-buster-slim as building
WORKDIR /app

ARG API_PORT
ENV API_PORT=$API_PORT

ARG API_WS_PORT
ENV API_WS_PORT=$API_WS_PORT

COPY . .
RUN npm install
RUN npm run build
RUN mkdir -p ./build/front ./build/server
RUN cp -r -L ./node_modules ./build/server
RUN cp -r apps/front/dist/* ./build/front
RUN cp -r apps/server/dist/* ./build/server


FROM node:20-buster-slim

RUN set -ex; \
    apt-get update -y; \
    apt-get install -y --no-install-recommends \
        ffmpeg libx265-dev openssl supervisor nginx \
    ; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
    :

WORKDIR /app

COPY --from=building /app/build/front /app/front
COPY --from=building /app/build/server /app/server

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
