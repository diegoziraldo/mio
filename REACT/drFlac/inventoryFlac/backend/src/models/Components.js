const mongoose= require('mongoose')
const Schema = mongoose.Schema;

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
    },
    author:{
        type:mongoose.Types.ObjectId
    }


},{
    
    timestamps: true
});


module.exports = mongoose.model('Component', componentSchema);