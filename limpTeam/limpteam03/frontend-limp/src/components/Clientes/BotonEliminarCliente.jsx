import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import axios from "axios";

const BotonEliminarCliente = ({ data }) => {
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/clientes/${data._id}`);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#Eliminar-${data._id}`}
      >
        Eliminar
      </button>
      <form>
        <div className="modal fade" id={`Eliminar-${data._id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <h3>Eliminar {data.name}</h3>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(data._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
BotonEliminarCliente.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BotonEliminarCliente;
