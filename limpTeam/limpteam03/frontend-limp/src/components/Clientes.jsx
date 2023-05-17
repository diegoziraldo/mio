import { Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

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
        <div className='bg-light p-4 rounded'>
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
                    <a href="#" className="btn btn-primary">Detalles</a>
                  </td>
                  <td>
                    <a href="#" className="btn btn-success">Editar</a>
                  </td>
                  <td>
                    <a href="#" className="btn btn-danger">Eliminar</a>
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