const clienteControllers = {}

const Cliente = require('../models/Cliente')

clienteControllers.getClientes = async(req,res)=>{
    const clientes = await Cliente.find();
    res.json(clientes);
}

clienteControllers.createCliente = async(req,res)=>{
    const {clientename} = req.body;
    const newCliente = new Cliente({clientename})
    await newCliente.save();
    res.json('Cliente Create');
}

clienteControllers.deleteCliente = async(req,res)=>{
    await Cliente.findByIdAndDelete(req.params.id)
    res.json('Cliente deleted');
}


module.exports = clienteControllers;