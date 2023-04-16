import React, { Component } from "react";
import {Link} from "react-router-dom"; /* Con este componente podremos hacer que la pagina no renderize cada ves que cambio de pagina */


export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">NotesApp</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Notas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Crear Nota</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">Crear Cliente</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
