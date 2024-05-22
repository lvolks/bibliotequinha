FROM node:21-alpine

WORKDIR /app

COPY . ./
RUN npm i
ENV PORT=3000

EXPOSE 3000

CMD [ "node", "./bin/www"]