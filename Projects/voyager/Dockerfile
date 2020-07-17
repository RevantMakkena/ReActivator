FROM node:10 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -f

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]