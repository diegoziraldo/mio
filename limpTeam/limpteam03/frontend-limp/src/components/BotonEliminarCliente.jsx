import { Component } from "react";

export default class BotonEliminarCliente extends Component {


  
  render() {
    return (
      <td>
        <a
          href="#"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#Eliminar"
        >
          Eliminar
        </a>
        <form>
          <div className="modal fade" id="Eliminar">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <h3>Eliminar {}</h3>
                  <button className="btn btn-danger">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </td>
    );
  }
}
