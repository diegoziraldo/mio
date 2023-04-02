const Product = require('../models/Product')



const addProduct = async(req,res)=>{
    try {
        const {name, size, unityPrice, description} = req.body

        const product = Product({
            name,
            size,
            unityPrice,
            description
        })

        const productStored = await product.save()


    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    addProduct
}