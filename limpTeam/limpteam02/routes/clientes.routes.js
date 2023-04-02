const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs');

const crearProducto = (req, res, next)=>{
    res.render('crearClientes.ejs');
  }
  





module.exports = crearProducto;