import { Link, useLocation } from "react-router-dom";
import "../components/styles/botonesStyles.css";

const NavMenu = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between">
        <Link
          to="/clientes"
          className={`btn btn-danger btnIndex ${
            location.pathname === "/clientes" || location.pathname === "/clientes/addclientes" ? "active"  : ""
          }`}
        >
          Clientes
        </Link>

        <Link
          to="/presupuestos"
          className={`btn btn-primary btnIndex ${
            location.pathname === "/presupuestos" ? "active" : ""
          }`}
        >
          Presupuestos
        </Link>

        <Link
          to="/reparaciones"
          className={`btn btn-dark btnIndex ${
            location.pathname === "/reparaciones" ? "active" : ""
          }`}
        >
          Reparaciones
        </Link>

        <Link
          to="/stock"
          className={`btn btn-warning btnIndex ${
            location.pathname === "/stock" || location.pathname === "/stock/addarticles" ? "active" : ""
          }`}
        >
          Stock
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
