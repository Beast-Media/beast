FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache ffmpeg

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r --filter=front --filter=server build
RUN pnpm deploy --filter=server --prod /prod/server

FROM base AS api
COPY --from=build /prod/server /prod/server
COPY --from=build /usr/src/app/apps/front/dist /prod/front
WORKDIR /prod/server
ENV SERVER_FRONT_DIST=/prod/front
CMD [ "node", "/prod/server/dist/src/main.js" ]
