const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;


async function connectToDatabase() {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error(error);
  }
}

connectToDatabase();