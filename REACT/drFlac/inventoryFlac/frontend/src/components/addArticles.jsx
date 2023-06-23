//import { useState } from 'react';
import { Link } from "react-router-dom";
//import Components from './getComponentes'
//import ComponentInput from './inputComponents';
import SearchComponents from "./serchComponents";

const AddArticles = () => {

  //const [showComponent, setShowComponent] = useState(false);

  /*   const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
 */
  return (
    <>
      <nav className="" >
        <div className="container d-flex justify-content-between" >
          <Link to="/addarticles" className="btn btn-success">
            Agregar componente
          </Link>
        </div>
      </nav>
      <SearchComponents />
    </>
  );
};

export default AddArticles;
