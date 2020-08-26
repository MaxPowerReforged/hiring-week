'use strict'

const express = require('../modules/node_modules/express');
const mongoose = require('../modules/node_modules/mongoose');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});