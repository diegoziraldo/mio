const { Schema, model } = require('mongoose')

const clienteSchema = new Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    direccion:{
        type: String,
    },
    
    localidad:{
        type: String,
    },
    
    telephono:{
        type: Number,
    },
    email:{
        type: String,
    },
    

},{
    timestamps: true
});

module.exports = model('Cliente', clienteSchema);
