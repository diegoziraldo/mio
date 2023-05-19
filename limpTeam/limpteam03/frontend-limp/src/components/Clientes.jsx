import { Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'

export default class Clientes extends Component {

  state = {
    clientes: []
  }

  async componentDidMount(){
    this.getClientes()

  }

  async getClientes(){
    const res = await axios.get('http://localhost:3000/api/clientes')
    this.setState({
        clientes: res.data
    })
  }



  deleteProduct = (id)=>{
    axios.delete('http://localhost:3000/api/clientes/' + id);
    this.getClientes()
  }


  render() {
    return (
      <>
        <div className='bg-light p-4 rounded '>
        <div className="input-group rounded mb-3" >
            <input  type="search" className="form-control rounded " placeholder="Buscar cliente" aria-label="Search" aria-describedby="search-addon" />
            <button className="input-group-text" id="addon-wrapping">
            <b className="fas fa-search">Buscar</b>
            </button>
        </div>
        <button className="btn btn-warning float-end">
            <Link className="nav-link" to="/createCliente">Agregar Cliente</Link>
        </button>
          <div className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Direccion</th>
                <th scope="col">Localidad</th>
                <th scope="col">Telefono</th>
                <th scope="col">E-mail</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map((cliente, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{cliente.name}</td>
                  <td>{cliente.lastname}</td>
                  <td>{cliente.direccion}</td>
                  <td>{cliente.localidad}</td>
                  <td>{cliente.telephono}</td>
                  <td>{cliente.email}</td>
                  <td>
                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Detalles">Detalles</a>
                  </td>
                  <td>
                    <a href="" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Editar">Editar</a>
                    <form>

                        <div className="modal fade" id="Editar">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <h3>Editar Cliente</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <button type="submit" className="btn btn-primary">Modificar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            </form>
                  </td>
                  <td>
                    <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Eliminar">Eliminar</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      </>
    );
  }
}  