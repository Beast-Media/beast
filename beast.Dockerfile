FROM node:20-slim AS base

RUN set -ex; \
    apt-get update -y; \
    apt-get install -y --no-install-recommends \
        ffmpeg libx265-dev openssl supervisor nginx \
    ; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
    :


ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ARG API_PORT
ENV API_PORT=$API_PORT

ARG API_WS_PORT
ENV API_WS_PORT=$API_WS_PORT

RUN pnpm run -r --filter='./apps/*' build
RUN pnpm deploy --filter=server --prod /prod/server
RUN cp -r /usr/src/app/apps/front/dist /prod/front

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
