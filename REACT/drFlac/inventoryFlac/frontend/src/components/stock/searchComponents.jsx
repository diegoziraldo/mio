import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import img from "../../img/transistor.png";

const StockTable = ({ searchResults, showActions }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Código</th>
              <th>Stock</th>
              {showActions && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <tr key={result.id} onClick={() => handleRowClick(result)}>
                <td className="bold-name">{result.name}</td>
                <td>{result.description}</td>
                <td>{result.code}</td>
                <td>{result.stock}</td>
                {showActions && (
                  <td>
                    <div className="action-icons-container">
                      {showActions === "simularPresupuestos" ? (
                        <button className="btn btn-success">Agregar</button>
                      ) : (
                        <>
                          <button className="btn btn-primary">
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="action-icon"
                            />
                          </button>
                          <button className="btn btn-danger">
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="action-icon"
                            />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && selectedItem && (
        <div className="col-md-4">
          <div className="card tarjetaComponentes">
            <img src={img} className="card-img-top" alt="Componente" />
            <div className="card-body">
              <h5>{selectedItem.name}</h5>
              <p>{selectedItem.description}</p>
              <p className="card-text">Código: {selectedItem.code}</p>
              <p>Categoría: {selectedItem.category}</p>
              <p>Marca: {selectedItem.brand}</p>
              <p>Precio: {selectedItem.price}</p>
              <p>Proveedor: {selectedItem.infoProveedor}</p>
              <p>Stock: {selectedItem.stock}</p>
              <button
                className="btn btn-primary"
                onClick={() => setIsPopupOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

StockTable.propTypes = {
  searchResults: PropTypes.array.isRequired,
  showActions: PropTypes.bool.isRequired,
};

const SearchComponents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm === "") {
          setSearchResults([]);
          return;
        }

        const response = await axios.get(
          "http://localhost:3000/api/components"
        );
        const data = response.data;

        if (typeof data === "object") {
          const components = Object.values(data);

          const results = components.filter((component) => {
            const lowercaseTerm = searchTerm.toLowerCase();
            const propertiesToSearch = [
              "name",
              "description",
              "category",
              "brand",
              "code",
              "price",
              "stock",
              "infoProveedor",
            ];

            return propertiesToSearch.some((property) =>
              component[property]
                ?.toString()
                .toLowerCase()
                .startsWith(lowercaseTerm)
            );
          });

          setSearchResults(results);
        } else {
          console.log("Los datos no son un objeto");
        }
      } catch (error) {
        console.error("Error al obtener los componentes:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const showActions =
    location.pathname === "/stock" ||
    location.pathname === "/simularPresupuestos";

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="input-group">
            <input
              placeholder="Buscar Componente..."
              type="search"
              className="form-control"
              id="search-input"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>

        {searchResults.length > 0 && (
          <StockTable
            searchResults={searchResults}
            showActions={showActions ? location.pathname.split("/")[1] : false}
          />
        )}
      </div>
    </div>
  );
};

export default SearchComponents;
