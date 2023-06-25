import { Link } from "react-router-dom";
import SearchComponents from "../stock/serchComponents";

const AddArticles = () => {
  return (
    <>
      <nav className="">
        <h1>Stock</h1>
        <div className="container d-flex justify-content-between">
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
