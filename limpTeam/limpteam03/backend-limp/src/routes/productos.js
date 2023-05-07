const {Router} = require('express');
const router = Router();
const { getProductos, createProducto, deleteProducto } = require('../controllers/productos.controllers')


router.route('/')
    .get(getProductos)
    .post(createProducto)

    


router.route('/:id')

    .delete(deleteProducto)



.post()
.put()
.delete()

module.exports = router;