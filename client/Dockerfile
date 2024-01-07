FROM node:alpine 

#ARG NEO4J_PASSWORD
#ENV NEO4J_PASSWORD ${NEO4J_PASSWORD}

WORKDIR /app

COPY package.json .

RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "node", "build/index.js" ]
