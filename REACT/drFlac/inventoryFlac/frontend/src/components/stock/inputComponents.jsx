import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ComponentInput = ({ component }) => {
  ComponentInput.propTypes = {
    component: PropTypes.object.isRequired,
  };

  const [name, setName] = useState(component?.name || "");
  const [description, setDescription] = useState(component?.description || "");
  const [category, setCategory] = useState(component?.category || "");
  const [brand, setBrand] = useState(component?.brand || "");
  const [price, setPrice] = useState(component?.price || "");
  const [code, setCode] = useState(component?.code || "");
  const [stock, setStock] = useState(component?.stock || "");
  const [infoProveedor, setProviderinfo] = useState(component?.infoProveedor || "");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComponent = {
      name,
      description,
      category,
      brand,
      price,
      code,
      stock,
      infoProveedor,
    };

    try {
      const formData = new FormData();
      formData.append("component", JSON.stringify(newComponent));
      formData.append("image", imageFile);

      const res = await axios.post("http://localhost:3000/api/components", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data); // Imprime la respuesta del servidor si es necesario

      // Realiza alguna acción adicional después de guardar los datos, como redireccionar o mostrar una notificación de éxito
    } catch (error) {
      console.error(error);
      // Maneja el error de la solicitud, muestra una notificación de error o realiza alguna acción adicional
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };


  return ( 
    <div className="container"> 
      <form onSubmit={handleSubmit} className="container"> 
        <div className="form-row"> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="name">Nombre</label> 
            <input 
              type="text" 
              id="name" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            /> 
          </div> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="description">Descripcion</label> 
            <input 
              type="text" 
              id="description" 
              className="form-control" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            /> 
          </div> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="description">Codigo</label> 
            <input 
              type="text" 
              id="description" 
              className="form-control" 
              value={code} 
              onChange={(e) => setCode(e.target.value)} 
            /> 
          </div> 
        </div> 
        <div className="form-row"> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="category">Categoria</label> 
            <input 
              type="text" 
              id="category" 
              className="form-control" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
            /> 
          </div> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="brand">Marca</label> 
            <input 
              type="text" 
              id="brand" 
              className="form-control" 
              value={brand} 
              onChange={(e) => setBrand(e.target.value)} 
            /> 
          </div> 
        </div> 
        <div className="form-row"> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="price">Precio</label> 
            <input 
              type="number" 
              id="price" 
              className="form-control" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
            /> 
          </div> 
        <div className="col-md-6 mb-3">
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            id="image"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        </div> 
        <div className="form-row"> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="stock">Stock</label> 
            <input 
              type="number" 
              id="stock" 
              className="form-control" 
              value={stock} 
              onChange={(e) => setStock(e.target.value)} 
            /> 
          </div> 
          <div className="col-md-6 mb-3"> 
            <label htmlFor="infoProveedor">Proveedor</label> 
            <input 
              type="text" 
              id="infoProveedor" 
              className="form-control" 
              value={infoProveedor} 
              onChange={(e) => setProviderinfo(e.target.value)} 
            /> 
            <button type="submit" className="btn btn-primary"> 
              Guardar 
            </button> 
          </div> 
        </div> 
      </form> 
    </div> 
  ); 
}; 
 
export default ComponentInput;