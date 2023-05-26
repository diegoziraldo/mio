import { Link } from "react-router-dom";

const AgegarProveedor = ()=>{

    return (
      <button className="btn btn-warning float-end mb-3">
        <Link className="nav-link" to="/createProveedor">
          Agregar Proveedor
        </Link>
      </button>
    );
  
}


export default AgegarProveedor;
