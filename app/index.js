const express = require("express");
const axios = require("axios").default;
const app = express();
const router = express.Router();
const router2 = express.Router();
const port = 8080;

app.use(express.json());

/**
 * Microservice node
 */
let microserviceNode = "http://localhost:3000"; //This would be in the local registry
router.post("/", async (req, res) => {
  try {
    microserviceNode = req.body.url;
    res.send(true);
  } catch (error) {
    console.log(error);
    res.send(false);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log('dvs');
    const data = await axios.get(microserviceNode);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("Microservice of node not lifted");
  }
});

/**
 * Microservice main module
 */
router2.get("/", (req, res) => {
  res.send("Microservice main module");
});

/**
 * Router
 */
app.use("node", router);
app.use("/", router2);


app.listen(port, () => {
  console.log(`Microservice main module run in http://localhost:${port}`);
});
