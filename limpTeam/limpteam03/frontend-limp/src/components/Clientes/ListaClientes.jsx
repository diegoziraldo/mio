import { useState, useEffect } from "react";
import axios from "axios";
import "../stylesComponents/styleInputCliente.css";
import BotonDetallesCliente from "./BotonDetallesCliente";
import BotonEditarCliente from "./BotonEditarCliente";
import BotonEliminarCliente from "./BotonEliminarCliente";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  async function getClientes() {
    const res = await axios.get("http://localhost:3000/api/clientes");
    setClientes(res.data);
  }

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
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{cliente.name}</td>
              <td>{cliente.lastname}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.localidad}</td>
              <td>{cliente.telephono}</td>
              <td>{cliente.email}</td>

              <td>
                <BotonDetallesCliente data={cliente} />
              </td>
              <td>
                <BotonEditarCliente />
              </td>
              <td>
                <BotonEliminarCliente />
              </td>
            </tr>
            
          ))}
        </tbody>
      </div>
    </>
  );
};

export default ListaClientes;
