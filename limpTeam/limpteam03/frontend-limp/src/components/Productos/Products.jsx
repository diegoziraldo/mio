import { Component } from "react";
import axios from "axios";
import AgegarProducto from "./AgregarProducto";
import BuscarProducto from "./BuscarProductos";
import "../stylesComponents/styleTarjetaProductos.css";
import "../stylesComponents/styleInputCliente.css";
export default class Products extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.getProductos();
  }

  async getProductos() {
    const res = await axios.get("http://localhost:3000/api/productos");
    this.setState({
      products: res.data,
    });
  }

  deleteProduct = (id) => {
    axios.delete("http://localhost:3000/api/products/" + id);
    this.getProductos();
  };

  render() {
    return (
      <>
        <BuscarProducto/>
        <AgegarProducto />
        <div className="product-grid">
          {this.state.products.map((product) => (
            <div className="card" key={product.id}>
              <img
                className="card-img-top"
                src={product.image_url}
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Categoría: </strong>
                  {product.category}
                </p>
                <p className="card-text">
                  <strong>Marca: </strong>
                  {product.marca}
                </p>
                <p className="card-text">
                  <strong>Precio: </strong>
                  {product.price}
                </p>
                <p className="card-text">
                  <strong>Stock: </strong>
                  {product.stock}
                </p>
                <p className="card-text">
                  <strong>Proveedor: </strong>
                  {product.infoProveedor}
                </p>
                <div>                  
                  <a href="products" className="btn btn-success">
                    Modificar
                  </a>
                  <a href="products" className="btn btn-danger">
                    Eliminar
                  </a>
                  <a href="products" className="btn btn-primary">
                    Enviar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
