FROM node:18.16 AS Node
COPY . /web
WORKDIR /web
RUN npm i --registry=https://registry.npmmirror.com && npm run build
ENTRYPOINT [ "/bin/sh", "-c", "npm run prisma-m&&npm run prod" ]