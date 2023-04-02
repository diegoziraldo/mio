const express = require('express');
const app = express();
const router = express.Router();
const productos =  require('./routes/productos.routes.js');
const clientes =  require('./routes/clientes.routes.js');
const proveedores =  require('./routes/proveedores.routes.js');
const connectDB = require('./db/database')

app.use(express.static('./public/styles.css'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.use('/', router)
router.use('/productos', productos);
router.use('/clientes', clientes);
router.use('/proveedores', proveedores);










app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });