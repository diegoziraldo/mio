const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
mongoose.connect(URI,() => {
    console.log("Connected to MongoDB");
  });