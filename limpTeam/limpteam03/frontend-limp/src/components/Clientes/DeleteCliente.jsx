import { useState, useEffect } from "react";
import axios from "axios";

function DeleteCliente() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/clientes");
      setClientes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/clientes/${id}`);
      getClientes();
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {clientes.map((cliente) => (
        <div key={cliente.id}>
          <p>{cliente.name}</p>
          <button onClick={() => deleteUser(cliente.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default DeleteCliente;