const mongoose = require('mongoose');
mongoose.connection.on('open', ()=>console.log('db conected')) /* Mensaje de conexion a la base de datos */

const connectDB = async({host, port, dbName})=>{
    const uri = `mongodb+srv://${host}:${port}/${dbName}`
    await mongoose.connect(uri,{useNewUrlParser:true})
}


module.exports = connectDB;





