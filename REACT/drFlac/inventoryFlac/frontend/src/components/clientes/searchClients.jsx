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

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/clients");
        const data = response.data;

        if (typeof data === "object") {
          const components = Object.keys(data).map((key) => data[key]);

          const results = components.filter((component) => {
            const lowercaseTerm = searchTerm.toLowerCase();
            const codeAsString = component.code.toString();
            const priceAsString = component.price.toString();
            const stockAsString = component.stock.toString();
            const regex = new RegExp(`\\b${lowercaseTerm}`);
            return (
              regex.test(component.name.toLowerCase()) ||
              regex.test(component.description.toLowerCase()) ||
              regex.test(component.category.toLowerCase()) ||
              regex.test(component.brand.toLowerCase()) ||
              regex.test(codeAsString.toLowerCase()) ||
              regex.test(priceAsString.toLowerCase()) ||
              regex.test(stockAsString.toLowerCase()) ||
              regex.test(component.infoProveedor.toLowerCase())
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
          </div>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="row">
          <div className="col-md-10 mx-auto">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Codigo</th>
                  <th>Categoria</th>
                  <th>Marca</th>
                  <th>Precio</th>
                  <th>Proveedor</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result) => (
                  <tr key={result.id}>
                    <td>{result.name}</td>
                    <td>{result.description}</td>
                    <td>{result.code}</td>
                    <td>{result.category}</td>
                    <td>{result.brand}</td>
                    <td>{result.price}</td>
                    <td>{result.infoProveedor}</td>
                    <td>{result.stock}</td>
                    <td>{result.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponents;
