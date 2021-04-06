const express = require("express");
const axios = require("axios").default;
const app = express();
const router = express.Router();
const port = 3000;

axios
  .post("http://localhost:8080/node", { url: `http://localhost:${port}` })
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });

router.get("/", (req, res) => {
  res.send("Microservice in Node.js");
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Microservice in Node.js run in http://localhost:${port}`);
});
