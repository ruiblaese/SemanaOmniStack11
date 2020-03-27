const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const connection = require('./database/connection');

if (process.env.NODE_ENV !== 'test') {
  (async () => {
    await connection.migrate.latest();
  })();
}


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
