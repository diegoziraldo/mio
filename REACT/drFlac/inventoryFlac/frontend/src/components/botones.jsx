import { Link } from "react-router-dom";
import "../components/styles/botonesStyles.css";

const NavMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between">
        <Link to="/clientes" className="btn btn-danger btnIndex">
          Clientes
        </Link>

        <Link to="/presupuestos" className="btn btn-primary btnIndex">
          Presupuestos
        </Link>

        <Link to="/reparaciones" className="btn btn-dark btnIndex">
          Reparaciones
        </Link>

        <Link to="/stock" className="btn btn-warning btnIndex">
          Stock
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
