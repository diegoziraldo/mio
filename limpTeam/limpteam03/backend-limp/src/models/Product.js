const { Schema, model } = require('mongoose')

const productoSchema = new Schema({
    name: {
        type: String,

    },
    description: {
        type: String,


    },
    categoria:{
        type: String,

    },
    marca:{
        type: String,
    },
    
    price:{
        type: Number,
    },

    img:{
        type: Number,
    },
    stock:{
        type: Number,
    },
    infoProveedor:{
        type: String,
    }

},{
    timestamps: true
});

module.exports = model('Producto', productoSchema);