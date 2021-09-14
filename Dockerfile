FROM node:alpine

WORKDIR '/'

COPY package.json .
RUN npm install

COPY ./src ./src
COPY ./public ./public

CMD ["npm", "run", "start"]
