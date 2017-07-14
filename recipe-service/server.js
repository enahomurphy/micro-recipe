const express = require('express');

const app = express();
const port = 3000 || process.env.PORT


app.get('/', (req, res) => {
  res.send("Hello world")
});

app.listen(port, (err) => {
  if (err) {
    throw new Error(err.message)
  }
  console.log(`recipe service is running on port ${port}`)
});