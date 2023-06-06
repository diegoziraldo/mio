import { Component } from "react";
import axios from "axios";

export default class EditarCliente extends Component {

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
    
      async editCliente(id, updatedClient) {
        try {
          const res = await axios.put(
            "http://localhost:3000/api/clientes/" + id, updatedClient);
            console.log("Cliente actualizado:", res.data);
            this.getClientes(); // Actualiza la lista de clientes después de la edición
            console.log(res.data);
            console.log('hola');
        } catch (error) {
          console.error("Error al editar el cliente:", error);
        }
      }



    render() {
        return (
                <td>
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
                                    value={this.state.address}
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
                                    value={this.state.telephone}
                                    onChange={this.onChangeClienteTelephone}
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary">
                                  Modificar
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </td>
        )}}