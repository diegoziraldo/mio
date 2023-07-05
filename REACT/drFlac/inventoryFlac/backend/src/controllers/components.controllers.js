const componentsControllers = {};
const Component = require("../models/Components");
const fs = require('fs');
const path = require('path'); // Importa el módulo 'path'


componentsControllers.getComponents = async (req, res) => {
  const components = await Component.find();
  res.json(components);
};

componentsControllers.createComponents = async (req, res) => {
  const {
    name,
    description,
    category,
    brand,
    price,
    code,
    image,
    stock,
    infoProveedor,
    author,
  } = req.body;

  const newComponent = new Component({
    name,
    description,
    category,
    brand,
    price,
    code,
    image, // Aquí está el dato de la imagen en formato base64
    stock,
    infoProveedor,
    author,
  });

  // Guardar la imagen en el servidor
  const directorioImagenes =  path.join(__dirname, '../upload'); // Reemplaza con la ruta absoluta al directorio de imágenes
  const nombreImagen = `${name}.jpg`; // Genera un nombre único para la imagen

  const imagenBase64 = image; // Suponiendo que la imagen se envía en el campo 'image' del cuerpo de la solicitud

  // Convierte la imagen de base64 a Buffer
  const imagenBuffer = Buffer.from(imagenBase64, 'base64');

  // Ruta completa donde se almacenará la imagen en el servidor
  const rutaImagen = path.join(directorioImagenes, nombreImagen);

  // Guarda la imagen en el servidor
  fs.writeFile(rutaImagen, imagenBuffer, 'binary', (error) => {
    if (error) {
      console.error('Error al guardar la imagen:', error);
      // Manejar el error apropiadamente, enviar una respuesta de error al cliente, etc.
      return;
    }

    // Actualiza el campo 'image' de newComponent con la ruta de la imagen guardada
    newComponent.image = rutaImagen;

    // Guarda el componente en la base de datos
    newComponent.save()
      .then(() => {
        console.log('Componente creado correctamente');
        res.json('Component Created');
      })
      .catch((error) => {
        console.error('Error al crear el componente:', error);
        // Manejar el error apropiadamente, enviar una respuesta de error al cliente, etc.
      });
  });
};
componentsControllers.deleteComponents = async (req, res) => {
  await Component.findByIdAndDelete(req.params.id);
  res.json("Component deleted");
};
componentsControllers.updateComponents = async (req, res) => {
  const {
    id,
    name,
    description,
    category,
    brand,
    price,
    image,
    code,
    stock,
    infoProveedor,
    author,
  } = req.body;
  const components = await Component.findByIdAndUpdate(id, {
    name,
    description,
    category,
    brand,
    price,
    image,
    code,
    stock,
    infoProveedor,
    author,
  });

  res.json("Component updated");
};
componentsControllers.uploadComponents = async (req, res) => {
  console.log(req.headers['content-type']);
  const boundary = req.headers['content-type'].split('boundary=')[1];
  let body = '';

  req.on('data',(chunk)=>(body+=chunk));
  req.on('end',()=>{
    body.split(boundary).map((data,index)=>console.log(index, data))
    res.sendStatus(200)
  })
};


module.exports = componentsControllers;
