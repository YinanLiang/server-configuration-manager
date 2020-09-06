FROM node:12-alpine

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY ./dist ./wait-for-it.sh ./

EXPOSE 9999 