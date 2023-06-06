import { Component } from "react";
import axios from "axios";
import "../stylesComponents/styleInputCliente.css";
/* import BotonDetallesCliente from "./BotonDetallesCliente";
import BotonEditarCliente from "./BotonEditarCliente";
import BotonEliminarCliente from "./BotonEliminarCliente"; */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'

export default class ListaProveedores extends Component {
  state = {
    proveedores: [],
  };

  async componentDidMount() {
    this.getProveedores();
  }

  async getProveedores() {
    const res = await axios.get("http://localhost:3000/api/proveedores");
    this.setState({
      proveedores: res.data,
    });
  }

  render() {
    return (
      <>
        <div className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Direccion</th>
              <th scope="col">Localidad</th>
              <th scope="col">Telefono</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.proveedores.map((proveedor, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{proveedor.name}</td>
                <td>{proveedor.lastname}</td>
                <td>{proveedor.address}</td>
                <td>{proveedor.localidad}</td>
                <td>{proveedor.telephone}</td>
                <td>{proveedor.email}</td>

{/*                 <td><BotonDetallesCliente data={proveedor}/></td>
                <td><BotonEditarCliente /></td>
                <td><BotonEliminarCliente /></td>  */}
              </tr>
            ))}
          </tbody>
        </div>
      </>
    );
  }
}