//import { useState } from 'react';
import { Link } from "react-router-dom";
//import Components from './getComponentes'
//import ComponentInput from './inputComponents';





//import SearchClientes from "../serchClientes"; //Aca vamos a traer el componente que va a buscar los clientes




const AddClientes = () => {

  //const [showComponent, setShowComponent] = useState(false);

  /*   const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
 */
  return (
    <>
      <nav className="" >
        <div className="container d-flex justify-content-between" >
          <Link to="/addclientes" className="btn btn-success">
            Agregar Cliente
          </Link>
        </div>
      </nav>
      {/* <SearchClientes /> */}
    </>
  );
};

export default AddClientes;
