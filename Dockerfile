FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY dist ./dist

EXPOSE 3000

CMD ["node", "--max-old-space-size=4096", "dist/index.js"]