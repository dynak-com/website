FROM node:10

WORKDIR /opt/dynak.com
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080

CMD [ "node", "server.js" ]