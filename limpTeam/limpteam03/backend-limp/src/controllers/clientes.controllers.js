const clienteControllers = {}

const Cliente = require('../models/Cliente')

clienteControllers.getClientes = async(req,res)=>{
    const clientes = await Cliente.find();
    res.json(clientes);
}

clienteControllers.createCliente = async(req,res)=>{
    const {name, lastname, email, address, localidad, telephone, numeroDeCompras} = req.body;
    const newCliente = new Cliente({name, lastname, email, address, localidad, telephone, numeroDeCompras})
    await newCliente.save();
    res.json('Cliente Create');
    console.log(req.body);
}

clienteControllers.deleteCliente = async(req,res)=>{
    await Cliente.findByIdAndDelete(req.params.id)
    res.json('Cliente deleted');
}


module.exports = clienteControllers;