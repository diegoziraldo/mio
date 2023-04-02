const express = require('express')
const productRoutes = require('./routes/product');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/v1', productRoutes )





module.exports = app;