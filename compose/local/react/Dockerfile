# frontend/Dockerfile

FROM node:14.17.4

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
