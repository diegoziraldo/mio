import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BotonEditarCliente = ({ data }) => {
  const [name, setName] = useState(data.name !== undefined ? data.name : "");
  const [lastname, setLastname] = useState(data.lastname !== undefined ? data.lastname : "");
  const [email, setEmail] = useState(data.email !== undefined ? data.email : "");
  const [address, setAddress] = useState(data.address !== undefined ? data.address : "");
  const [localidad, setLocalidad] = useState(data.localidad !== undefined ? data.localidad : "");
  const [telephone, setTelephone] = useState(data.telephone !== undefined ? data.telephone : "");

  const editCliente = async (id) => {
    const updatedClient = {
      name,
      lastname,
      email,
      address,
      localidad,
      telephone,
    };

    console.log("Datos a enviar:", updatedClient);

    try {
      const res = await axios.put(`http://localhost:3000/api/clientes/${id}`, updatedClient);
      console.log("Respuesta del servidor:", res.data);
      console.log("Cliente actualizado:", res.data);
      console.log("Hola");
    } catch (error) {
      console.error("Error al editar el cliente:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCliente(data._id);
  };

  return (
    <>
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target={`#Editar-${data._id}`}
      >
        Editar
      </button>
      <div className="modal fade" id={`Editar-${data._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>Editar {data.name}</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <form
                className="bg-light p-4 rounded"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">Apellido:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Dirección:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Localidad:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={localidad}
                    onChange={(e) => setLocalidad(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Teléfono:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Modificar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BotonEditarCliente.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BotonEditarCliente;
