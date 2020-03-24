const express = require('express')
const cors = require('cors')
const routes = require('./routes');
const connection = require('./database/connection')

connection.migrate.latest();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT ? process.env.PORT : 3333)