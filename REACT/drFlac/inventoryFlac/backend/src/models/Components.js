const { Schema, model } = require('mongoose')

const componentSchema = new Schema({
    name: {
        type: String,

    },
    description: {
        type: String,


    },
    category:{
        type: String,

    },
    brand:{
        type: String,
    },
    
    price:{
        type: Number,
    },
    code:{
        type: String,
    },

    image:{
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

module.exports = model('Component', componentSchema);