FROM node:latest

# Create app directory
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app

RUN apt-get update
RUN apt-get install -y vim

# Install dependencies
COPY package.json .
RUN yarn install --dev

# Bundle app source
COPY . .

# Exports
EXPOSE 5000 3000
CMD [ "yarn", "run", "start:dev" ]