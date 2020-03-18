FROM node:10

WORKDIR /opt/dynak.com
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g serve
RUN npm run build
EXPOSE 5000

CMD serve -s build & node server.js
