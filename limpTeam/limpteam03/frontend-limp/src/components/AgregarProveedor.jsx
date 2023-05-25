import { Component } from "react";
import { Link } from "react-router-dom";

export default class AgegarProveedor extends Component {
  render() {
    return (
      <button className="btn btn-warning float-end mb-3">
        <Link className="nav-link" to="/createProveedor">
          Agregar Proveedor
        </Link>
      </button>
    );
  }
}
