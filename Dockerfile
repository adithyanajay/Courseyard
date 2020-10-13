FROM node:12-alpine
RUN mkdir -p /home/node/app/client && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
COPY client/package*.json ./client/

USER node

RUN npm install --only=prod
RUN cd ./client && npm install --only=prod

COPY --chown=node:node . .

RUN npm run build
RUN rm -rf client

EXPOSE 8080

CMD ["npm", "start"]