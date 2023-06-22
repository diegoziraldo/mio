
import {Link} from 'react-router-dom'
import '../components/styles/botonesStyles.css';




const NavMenu = () => {

  return (
<nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between">

        <Link to="/" className="btn btn-success">Inicio</Link>

        <Link to="/presupuestos" className="btn btn-primary">Presupuestos</Link>

        <Link to="/clientes" className="btn btn-danger">Clientes</Link>

        <Link to="/reparaciones" className="btn btn-dark">Reparaciones</Link>

        <Link to="/stock" className="btn btn-warning">Stock</Link>
     
      </div>
</nav>
  );
};



export default NavMenu;
