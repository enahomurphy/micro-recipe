const express = require('express');
const winston = require('winston');
const { join } = require('path');

const config = require('./app/config');
const db = require('./app/config/db');
const routes = require('./app/routes');

const app = express();
const port = 3000 || process.env.PORT;

require('dotenv').config({ path: join(__dirname, '.env') });

app.get('/', (req, res) => {
  res.send('Hello world');
});
db(config)
  .then(() => {
    app.use('/api/v1', routes(express));
    app.listen(port, err => {
      if (err) {
        throw new Error(err.message);
      }
      winston.info(`recipe service is running on port ${port}`);
    });
  })
  .catch(err => { throw new Error(`Connection error ${err.message}`); });

module.exports = app;
