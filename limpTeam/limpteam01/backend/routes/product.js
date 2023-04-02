const express = require('express');
const upload = require('../libs/storage')
const api = express.Router();
const { addProduct } =  require('../controllers/productControllers');



api.post('/products', upload.single('image'), addProduct);


module.exports = api;