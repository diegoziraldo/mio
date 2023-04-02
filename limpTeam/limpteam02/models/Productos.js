const {Schema, model} = require('mongoose');


const ProductosSchema = new Schema({

  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true }

},
{
  tipoDeProducto: { type: String, required: true }
  
},{
  timestamps: true  //Esta propiedad nos va a dar la fecha de creacion y la fecha de actualizacion
})

model('Productos',ProductosSchema)

