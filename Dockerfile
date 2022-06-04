FROM node:16-alpine

USER node
WORKDIR /home/node/app

CMD ["sh", "-c", "npm install && tail -f /dev/null"]