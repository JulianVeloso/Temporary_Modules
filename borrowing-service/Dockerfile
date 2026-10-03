FROM node:24.18.0-slim AS base

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY server.js .

RUN useradd --create-home appuser

USER appuser

EXPOSE 5003

CMD ["node", "server.js"]
