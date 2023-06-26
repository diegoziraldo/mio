import { Link } from "react-router-dom";
import SearchComponents from "./searchComponents";

const AddArticles = () => {
  return (
    <>
      <SearchComponents />
      <nav className="">
        <div className="container d-flex justify-content-between">
          <Link to="./addarticles" className="btn btn-success">
            Agregar componente
          </Link>
        </div>
      </nav>
    </>
  );
};

export default AddArticles;
