import { Component } from "react";


export default class BuscarProveedor extends Component {
    render() {
        return (

<div className="input-group rounded mb-3 inputCliente">
  <input
    type="search"
    className="form-control rounded "
    placeholder="Buscar proveedor"
    aria-label="Search"
    aria-describedby="search-addon"
  />
  <button className="input-group-text" id="addon-wrapping">
    <b className="fas fa-search">Buscar</b>
  </button>
</div>

)}}