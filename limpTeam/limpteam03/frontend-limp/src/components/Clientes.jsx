import { Component } from "react";
import axios from "axios";
/* import { Link } from "react-router-dom"; */
import "../stylesComponents/styleInputCliente.css";
import AgegarCliente from "./AgregarCliente";
import BuscarCliente from "./BuscarClientes";
import ListaClientes from "./ListaClientes";

export default class Clientes extends Component {
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
    console.log('hola');
    try {
      const res = await axios.put(
        "http://localhost:3000/api/clientes/" + id, updatedClient);
      console.log("Cliente actualizado:", res.data);
      this.getClientes(); // Actualiza la lista de clientes después de la edición
      console.log(res.data);
    } catch (error) {
      console.error("Error al editar el cliente:", error);
    }
  }

  deleteProduct = (id) => {
    axios.delete("http://localhost:3000/api/clientes/" + id);
    this.getClientes();
  };

  render() {
    return (
      <>
        <div className="bg-light p-4 rounded">
        <h2>Clientes</h2>
          <BuscarCliente/>

          <AgegarCliente />

          <ListaClientes />


        </div>
      </>
    );
  }
}
