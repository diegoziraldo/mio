const {Router} = require('express');
const router = Router();



const { getComponents, createComponents,updateComponents, deleteComponents, uploadComponents} = require('../controllers/components.controllers')

router.route('/')
    .get(getComponents)
    .post(createComponents)

    


router.route('/:id')
    .put(updateComponents)
    .delete(deleteComponents)

router.route('./upload')
    .post(uploadComponents)




.post()
.put()
.delete()

module.exports = router;