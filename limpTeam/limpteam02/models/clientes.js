const {Schema, model} = require('mongoose');

const clienteSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,

    }
},{
    timestamps: true
})