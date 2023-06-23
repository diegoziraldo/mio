import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import { useState, useEffect } from "react";

const SearchComponents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      axios
        .get("http://localhost:3000/api/components")
        .then((response) => {
          const data = response.data;

          if (typeof data === "object") {
            const components = Object.keys(data).map((key) => data[key]);

            const results = components.filter(
              (component) =>
                component.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                component.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                component.category
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                component.brand
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
/*                 component.price
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) || */
/*                 component.stock
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) || */
                component.infoProveedor
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            );

            setSearchResults(results);
          } else {
            console.log("Los datos no son un objeto");
          }
        })
        .catch((error) => {
          console.error("Error al obtener los componentes:", error);
        });
    }, 1);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="input-group">
            <input
              placeholder="Buscar Componente..."
              type="search"
              className="form-control"
              id="search-input"
              value={searchTerm}
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="search-input"></label>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          {searchResults.map((result) => (
            <div key={result.id}>
              {/* Renderizar los resultados de búsqueda */}
              {result.description}
              {result.stock}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponents;
