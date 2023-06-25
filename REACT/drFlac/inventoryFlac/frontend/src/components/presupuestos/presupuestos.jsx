import { Link } from "react-router-dom";

const Presupuestos = () => {
  return (
    <>
      <h1>Presupuestos</h1>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
          <Link to="/simularPresupuestos" className="btn btn-primary btnIndex">
            Simular presupuesto
          </Link>
          <Link to="/crearPresupuestos" className="btn btn-danger btnIndex">
            Crear presupuesto
          </Link>
          <Link to="/presupuestosArmados" className="btn btn-dark btnIndex">
            Presupuestos
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Presupuestos;
