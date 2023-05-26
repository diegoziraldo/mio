import { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const BotonDetallesCliente = ({ data }) => {
  const [objeto, setObjeto] = useState(data);

  const handleClick = () => {
    setObjeto(data);
  };

  console.log(data);

  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#Detalles-${data._id}`}
        onClick={handleClick}
      >
        Detalles
      </button>
      <p>{objeto.name}</p>
      <div className="modal fade" id={`Detalles-${data._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
            <h3>Detalles de {objeto.name}</h3>

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
