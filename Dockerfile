FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 60000 -g
RUN npm install --verbose
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]