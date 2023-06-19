const componentControllers = {}

const Component = require('../models/Components')

componentsControllers.getComponents = async(req,res)=>{
    const components = await Component.find();
    res.json(components);
}

productosControllers.createProducto = async(req,res)=>{
    const {name, description, categoria, marca, price, img, stock, infoProveedor} = req.body;
    const newProducto = new Producto({name, description, categoria, marca, price, img, stock, infoProveedor})
    await newProducto.save();
    res.json('Producto Create');
    console.log(req.body);
}

productosControllers.deleteProducto = async(req,res)=>{
    await Producto.findByIdAndDelete(req.params.id)
    res.json('Producto deleted');
}


module.exports = productosControllers;