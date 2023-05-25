import { Component } from "react";
import axios from "axios";
/* import { Link } from "react-router-dom"; */
import "../stylesComponents/styleInputCliente.css";
import AgegarProveedor from "./AgregarProveedor";
import BuscarProveedor from "./BuscarProveedores";
import ListaProveedores from "./ListaProveedores"; 

export default class Proveedores extends Component {
  state = {
    proveedores: [],
  };

  async componentDidMount() {
    this.getProveedor();
  }

  async getProveedores() {
    const res = await axios.get("http://localhost:3000/api/proveedores");
    this.setState({
      proveedores: res.data,
    });
  }

  async editProveedor(id, updatedProveedor) {
    console.log('hola');
    try {
      const res = await axios.put(
        "http://localhost:3000/api/clientes/" + id, updatedProveedor);
      console.log("Proveedor actualizado:", res.data);
      this.getProveedores(); // Actualiza la lista de clientes después de la edición
      console.log(res.data);
    } catch (error) {
      console.error("Error al editar el proveedor:", error);
    }
  }

  deleteProveedor = (id) => {
    axios.delete("http://localhost:3000/api/proveedor/" + id);
    this.getProveedor();
  };

  render() {
    return (
      <>
        <div className="bg-light p-4 rounded">
            <h2>Proveedores</h2>
            <BuscarProveedor/>

            <AgegarProveedor />

            <ListaProveedores /> 


        </div>
      </>
    );
  }
}
