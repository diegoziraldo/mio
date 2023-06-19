const {Router} = require('express');
const router = Router();
const { getComponents, createComponents, deleteComponents } = require('../controllers/components.controllers')


router.route('/')
    .get(getComponents)
    .post(createComponents)

    


router.route('/:id')

    .delete(deleteComponents)



.post()
.put()
.delete()

module.exports = router;