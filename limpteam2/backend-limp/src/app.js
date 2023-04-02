const express = require('express');
const cors = require('cors')
const app = express();

//settings
app.set('port', process.env.PORT || 3000)   /*De esta manera seteamos una variable 'port' con su valor '3000'*/


//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use('/api/users', require('./routes/users')) /* Cuando reciba una peticion desde esta url voy a requerir el archivo de la direccion './routes/users'*/
app.use('/api/notes', require('./routes/notes'))




module.exports = app;
