import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BotonDetallesCliente extends Component {
  render() {
    return (
      <td>
        <a
          href="#"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#Detalles"
        >
          Detalles
        </a>
        <form>
          <div className="modal fade" id="Detalles">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <h3>Detalles del Cliente</h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </td>
    );
  }
}
