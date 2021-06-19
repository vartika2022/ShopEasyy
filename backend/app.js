const express = require("express");
const app = express();

app.use(express.json());

const products = require('./routers/product');

app.use('/api/v1', products);
module.exports = app
