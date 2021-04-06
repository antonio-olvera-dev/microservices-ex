const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Microservice in Node.js')
})

app.listen(port, () => {
  console.log(`Microservice in Node.js run in http://localhost:${port}`);
})
