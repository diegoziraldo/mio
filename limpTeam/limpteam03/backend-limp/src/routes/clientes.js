const {Router} = require('express');
const router = Router();
const { getClientes, createCliente, deleteCliente } = require('../controllers/clientes.controllers')


router.route('/')
    .get(getClientes)
    .post(createCliente)

    


router.route('/:id')

    .delete(deleteCliente)



.post()
.put()
.delete()

module.exports = router;