const Product = require('../controllers/guardar/Productos.js');

async function guardarProducto(productData) {
  const producto = new Product(productData);
  await producto.save();
  console.log('Product saved:', producto);
}

module.exports = guardarProducto();