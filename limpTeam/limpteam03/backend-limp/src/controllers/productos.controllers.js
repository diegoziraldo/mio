const productosControllers = {}

const Producto = require('../models/Product')

productosControllers.getProductos = async(req,res)=>{
    const productos = await Producto.find();
    res.json(productos);
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