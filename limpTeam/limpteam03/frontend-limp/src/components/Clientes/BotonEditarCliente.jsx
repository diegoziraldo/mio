import { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class BotonEditarCliente extends Component {
  state = {
    clientes: [],
  };

  async componentDidMount() {
    this.getClientes();
  }

  async getClientes() {
    const res = await axios.get("http://localhost:3000/api/clientes");
    this.setState({
      clientes: res.data,
    });
  }

  render() {
    return (
      <>
        <a
          href=""
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#Editar"
        >
          Editar
        </a>
        <form>
          <div className="modal fade" id="Editar">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <h3>Editar Cliente</h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <form
                    className="bg-light p-4 rounded"
                    onSubmit={this.onSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="name">Nombre:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeClienteName}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastname">Apellido:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.lastname}
                        onChange={this.onChangeClienteLastName}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeClienteEmail}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="address">Direccion:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.direccion}
                        onChange={this.onChangeClienteAddress}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Localidad:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.localidad}
                        onChange={this.onChangeClienteLocalidad}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Telefono:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.telephono}
                        onChange={this.onChangeClienteTelephone}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Modificar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
