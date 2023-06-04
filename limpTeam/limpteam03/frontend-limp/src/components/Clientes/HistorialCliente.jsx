import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const HistorialCliente = () => {
  const location = useLocation();
  const { id, name} = location.state || {};

  /* console.log(name) */
  console.log(id)
  console.log(name)

  return (
    <div className="bg-light p-4 rounded">
      <h1>Historial de {name}</h1>
      
    </div>
  );
};



HistorialCliente.propTypes = {
  location: PropTypes.object.isRequired,
};

export default HistorialCliente;