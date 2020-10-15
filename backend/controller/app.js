'use strict'

const express = require('../modules/node_modules/express');
const bodyParser = require('../modules/node_modules/body-parser');
const cors = require('../modules/node_modules/cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;