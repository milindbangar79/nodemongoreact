FROM node:latest
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 4000
CMD [ "node", "app.js" ]
