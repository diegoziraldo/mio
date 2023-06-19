const componentsControllers = {}

const Component = require('../models/Components')

componentsControllers.getComponents = async(req,res)=>{
    const components = await Component.find();
    res.json(components);
}

componentsControllers.createComponents = async(req,res)=>{
    const {name, description, categoria, marca, price, img, stock, infoProveedor} = req.body;
    const newComponent = new Component({name, description, categoria, marca, price, img, stock, infoProveedor})
    await newComponent.save();
    res.json('Component Create');
    console.log(req.body);
}

componentsControllers.deleteComponents = async(req,res)=>{
    await Component.findByIdAndDelete(req.params.id)
    res.json('Component deleted');
}


module.exports = productosControllers;