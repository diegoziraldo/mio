const { Schema, model } = require('mongoose')

const clienteSchema = new Schema({
    name: {
        type: String,

    },
    lastname: {
        type: String,


    },
    email:{
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
    }

},{
    timestamps: true
});

module.exports = model('Cliente', clienteSchema);
