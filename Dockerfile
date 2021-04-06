FROM node:argon as main
RUN mkdir -p /project
WORKDIR /project
COPY "." "."
RUN npm i
EXPOSE 3000
CMD [ "npm", "start" ]