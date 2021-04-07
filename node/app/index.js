'use strict';
const express = require("express");
const axios = require("axios").default;
const app = express();
const cors = require('cors');
const port = 3000;
const ip = "192.168.1.144";
app.use(cors());

axios
  .post(`http://${ip}:8080/node`, { url: `http://${ip}:${port}` })
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Microservice in Node.js");
});


app.listen(port, () => {
  console.log(`Microservice in Node.js run in http://${ip}:${port}`);
});
