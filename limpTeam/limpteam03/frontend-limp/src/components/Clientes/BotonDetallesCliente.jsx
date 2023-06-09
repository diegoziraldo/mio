import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const BotonDetallesCliente = ({ data }) => {

  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#Detalles-${data._id}`}
      >
        Detalles
      </button>
      <div className="modal fade" id={`Detalles-${data._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>Detalles de {data.name}</h3>
              <ul>
                {Object.keys(data).map((key) => (
                  <li key={key}>
                    {key}: {data[key]}
                  </li>
                ))}
                <Link
                  to="/history-cliente"
                  state={{
                    name: data.name,
                    id: data._id,
                  }}
                >
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    VER HISTORIAL DE COMPRAS
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BotonDetallesCliente.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BotonDetallesCliente;

/* 
  return ( */
/*     <td>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Detalles"
      >
        Detalles
      </button>
      <p>{data.data.name}</p>
      <div className="modal fade" id="Detalles">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>Detalles de {data.data.name}</h3>
            </div>
          </div>
        </div>
      </div>

    </td>
  );
}; */
