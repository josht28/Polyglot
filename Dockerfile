# Fetching the latest node image on alpine linux
FROM node:18-alpine


# Setting up the work directory
WORKDIR /my-app

# Installing dependencies
COPY ./package.json /my-app
RUN npm install

# Copying all the files in our project
COPY ./my-app .

# Starting our application
CMD npm RUN

CMD npm start