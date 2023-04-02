const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'))


const crearProducto = (req, res, next)=>{
  res.render('crearProducto.ejs', 
  {
    nombre:'Diego',
    apellido: 'Ziraldo'
  });
}







module.exports =  crearProducto;