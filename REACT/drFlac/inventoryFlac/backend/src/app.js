const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sharp = require("sharp");
const app = express();

//settings
app.set("port",process.env.PORT || 3000); /*De esta manera seteamos una variable 'port' con su valor '3000'*/


//middlewares
app.use(cors());
app.use(express.json());


//routes
//app.use('/')
app.use("/api/components", require("./routes/components")); /* Cuando reciba una peticion desde esta url voy a requerir el archivo de la direccion './routes/users'*/
//app.use('/api/notes', require('./routes/notes'))
//app.use('/api/clientes', require('./routes/clientes'))
//app.use('/api/productos', require('./routes/productos'))



module.exports = app;
