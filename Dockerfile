FROM node:alpine
WORKDIR /app-server
ADD . .
RUN npm install
CMD npm run dev