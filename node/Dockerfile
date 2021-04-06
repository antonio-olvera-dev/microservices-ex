FROM node:argon
RUN mkdir -p /project
WORKDIR /project
COPY "." "."
RUN npm i
EXPOSE 3000
CMD [ "npm", "start" ]