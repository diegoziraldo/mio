import { Component } from "react";
import { Link } from "react-router-dom";

export default class AgegarProducto extends Component {
  render() {
    return (
      <button className="btn btn-warning">
        <Link className="nav-link" to="/createProduct">
          Agregar Producto
        </Link>
      </button>
    );
  }
}
