const express = require('express');
const db = require('./server.js')
const app = express();


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})


app.get('/',(req,res)=>{
    res.send('Index')
})


app.get('/product',(req,res)=>{
    res.send('productos')
})



