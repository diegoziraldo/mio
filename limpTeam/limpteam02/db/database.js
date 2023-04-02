const mongoose = require('mongoose')
const url = 'mongodb+srv://ziraldodiego:1234@cluster0.rjmqobw.mongodb.net/test';


const connectDB = async()=>{
    await mongoose.connect(url,{useNewUrlParser:true})
}

mongoose.connection.on('open',()=>console.log('db conected'))

module.exports = connectDB;