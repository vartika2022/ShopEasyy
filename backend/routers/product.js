const express = require('express')
const router express.Router();

const { getProducts } = require('../controllers/productionController');

router.route('/products').get(getProducts);
module.exports = router;