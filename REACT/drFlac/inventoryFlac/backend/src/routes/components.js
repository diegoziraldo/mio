const {Router} = require('express');
const router = Router();
const { getComponents, createComponents,updateComponents, deleteComponents } = require('../controllers/components.controllers')

router.route('/')
    .get(getComponents)
    .post(createComponents)

    


router.route('/:id')
    .put(updateComponents)
    .delete(deleteComponents)



.post()
.put()
.delete()

module.exports = router;