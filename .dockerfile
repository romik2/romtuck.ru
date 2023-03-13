FROM node:16 as node

RUN apt update && apt install nginx -y

WORKDIR /app
COPY . .
RUN npm ci --only=production
RUN npm run build

COPY default.conf /etc/nginx/sites-enabled/default
EXPOSE 80

RUN cd /app/server && node index.js &
CMD ["nginx", "-g", "daemon off;"]