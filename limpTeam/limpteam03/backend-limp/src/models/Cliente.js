const { Schema, model } = require('mongoose')

const clienteSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: false,
        trim: true,

    },
    email:{
        type: String,
        required: false,
        trim: true,
        unquique: true
    },
    address:{
        type: String,
        required: false,
        trim: true,

    },

},{
    timestamps: true
});

module.exports = model('Cliente', clienteSchema);
