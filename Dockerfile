FROM node:20-buster

RUN apt-get update && \
    apt-get install -y ffmpeg libx265-dev build-essential pkg-config openssl && \
    # Clean up
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
RUN npm i -g turbo

COPY package*.json ./
COPY /apps/backend/package*.json ./

RUN npm install
COPY . .
