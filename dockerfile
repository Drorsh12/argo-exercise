FROM node:26.2-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "node", "main.js"]
