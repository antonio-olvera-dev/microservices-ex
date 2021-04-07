'use strict';
const express = require("express");
const axios = require("axios").default;
const app = express();
const cors = require('cors');
const port = 8080;
const ip = "192.168.1.144";
app.use(cors());
app.use(express.json());

/**
 * Microservice node
 */
let microserviceNode = `http://${ip}:3000`; //This would be in the local registry
app.post("/node", async (req, res) => {
  try {
    microserviceNode = req.body.url;
    res.send(true);
  } catch (error) {
    console.log(error);
    res.send(false);
  }
});

app.get("/node", async (req, res) => {
  try {
    const data = await axios.get(microserviceNode);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send("Microservice of node not lifted");
  }
});

/**
 * Microservice main module
 */
 app.get("/", (req, res) => {
  res.send("Microservice main module");
});



app.listen(port, () => {
  console.log(`Microservice main module run in http://${ip}:${port}`);
});
