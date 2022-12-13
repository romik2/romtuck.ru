FROM node:16

WORKDIR /app
COPY . .
RUN npm ci --only=production

EXPOSE 4567
WORKDIR /app/server
CMD [ "node", "index.js" ]
