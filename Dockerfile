FROM node:10

WORKDIR /opt/dynak.com
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

CMD npm start & node server.js
