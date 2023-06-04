import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import DeleteCliente from "./DeleteCliente";


const BotonEliminarCliente = ({data})=> {

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
                  <DeleteCliente />
                  <button className="btn btn-danger">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  BotonEliminarCliente.propTypes = {
    data: PropTypes.object.isRequired,
  };
  
  export default BotonEliminarCliente;
