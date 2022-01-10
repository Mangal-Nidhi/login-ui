FROM node:alpine

LABEL author="Nidhi Mangal"

ENV NODE_ENV=DEV
ENV PORT=1234

WORKDIR /var/www
COPY package-lock.json package.json ./
RUN npm install

COPY . ./
EXPOSE $PORT

ENTRYPOINT ["npm", "start"]