# Contributing to Beast

This document describes essential knowledge required to contribute to beast.

### Prerequisites

- Git
- Docker
- NodeJs >= 20 (We recommend the use of nvm instead of installing Node.js directly)
- ffmpeg

## Cloning the code

First, clone the codebase using git in a terminal in the folder you want.

git clone https://github.com/loucass003/beast.

## Building the code

> This project use pnpm

- Run ``corepack enable pnpm``
- Run ``pnpm i`` in your terminal.
- make your own ``.env`` file from the ``.env.template`` template file (all instructions inside).
- We provide a ``docker-compose.yml`` file that help you setup a postgres database, simply run it using ``docker-compose up -d``.
- To launch the project in dev mode, run ``pnpm dev``.
- Finally to compile for production run ``pnpm build``.
> Note that building for production is not needed as no official builds exists yet.

## Endpoints

Frontend -> http://locahost:5173

Server Swagger -> http://localhost:3000/api
> We recommend you do go check it, it is really useful to test your endpoints and stuff

Api Swagger -> http://localhost:4000/api

## Code Style

We use ESLint and Prettier to format our code.

- You can run ``pnpm run lint`` to check for formatting, it will also fix the fixable problems.

## Useful commands

### Updating Swagger / Models
When changing controllers and DTOs you need to run ``pnpm run swagger`` to update the swagger definition of the backend and also generate the new models of the frontend based on it.
