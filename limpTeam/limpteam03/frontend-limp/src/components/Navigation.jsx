import { Component } from "react";
import {Link} from "react-router-dom"; /* Con este componente podremos hacer que la pagina no renderize cada ves que cambio de pagina */


export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">LimpTeam</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/clientes">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Proveedores">Proveedores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createProveedores">Crear Proveedores</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
