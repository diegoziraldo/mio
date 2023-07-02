const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
const dbLocal = 'mongodb://localhost:27017/inventaryDrFlac';

async function connectToDatabase() {
  try {
    await mongoose.connect(dbLocal, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error(error);
  }
}

connectToDatabase();