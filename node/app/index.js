'use strict';
const express = require("express");
const axios = require("axios").default;
const app = express();
const cors = require('cors');
app.use(cors());
const port = 3000;

axios
  .post("http://192.168.1.144:8080/node", { url: `http://192.168.1.144:${port}` })
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Microservice in Node.js");
});


app.listen(port, () => {
  console.log(`Microservice in Node.js run in http://192.168.1.144:${port}`);
});
