

const MongoDB = require('mongodb').MongoClient;
MongoDB.connect('mongodb://127.0.0.1/cuadrodb', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Conectado a la base de datos')

})

module.export =  MongoDB;
