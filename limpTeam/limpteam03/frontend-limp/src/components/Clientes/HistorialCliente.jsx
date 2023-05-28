import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const HistorialCliente = () => {
  const location = useLocation();
  const { name } = location.state || {};

  console.log(name)


  return (
    <div>
      <h1>Historial de {name}</h1>
    </div>
  );
};



HistorialCliente.propTypes = {
  location: PropTypes.object.isRequired,
};

export default HistorialCliente;