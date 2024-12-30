FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY *.config.* ./
COPY tsconfig*.json ./
COPY src ./src
COPY public ./public
COPY index.html ./

RUN npm run build

FROM nginx:stable-alpine AS production

RUN rm -rf /etc/nginx/conf.d

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
