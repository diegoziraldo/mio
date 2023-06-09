import { Component } from 'react';
import axios from 'axios';
/* import { useNavigate } from 'react-router'; */
import {Link} from "react-router-dom"





export default class CreateCliente extends Component {
  


state = {
    clientes: [],
    name:'',
    lastname:'',
    email:'',
    address:'',
    localidad:'',
    telephone:''

  }

/*   let navigate = useNavigate() */

  goTo = ()=>{
   return <Link className="nav-link" to="/clientes"></Link>

  }

  async componentDidMount(){
    this.getClientes();
  }
  

/*   goTo() {
    navigate('/clientes')
  } */

  getClientes = async()=>{
    const res = await axios.get('http://localhost:3000/api/clientes');
    this.setState({clientes:res.data})
    console.log(this.state.clientes);
    console.log(res);
  }

  onChangeClienteName = (e)=>{
    this.setState({
       name: e.target.value
   })
 }
  onChangeClienteLastName = (e)=>{
    this.setState({
     lastname: e.target.value
    })
  }

  onChangeClienteEmail = (e)=>{
    this.setState({
      email: e.target.value
    })  
  }

  onChangeClienteAddress = (e)=>{
    this.setState({
      address: e.target.value
    })
  }

  onChangeClienteLocalidad = (e)=>{
    this.setState({
      localidad: e.target.value
    })
  }

  onChangeClienteTelephone = (e)=>{
    this.setState({
      telephone: e.target.value
    })
  }



  onSubmit = async(e)=>{
    e.preventDefault();
    const newCliente = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      localidad: this.state.localidad,
      telephone: this.state.telephone
    }
    await axios.post('http://localhost:3000/api/clientes', newCliente)
    window.location.href = 'clientes';

    this.setState({name: ''})
    this.setState({lastname: ''})
    this.setState({email: ''})
    this.setState({address: ''})
    this.setState({localidad: ''})
    this.setState({telephone: ''})
    this.getClientes();

  }



  
  render() {
    return (
      <div>
        <form className="bg-light p-4 rounded" onSubmit={this.onSubmit}>
        <h1>Formulario Cliente</h1>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeClienteName}/>
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Apellido:</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeClienteLastName}/>
              
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input  
              type="email" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeClienteEmail}/>
          </div>

          <div className="form-group">
            <label htmlFor="address">Direccion:</label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.address}
              onChange={this.onChangeClienteAddress}
              />
          </div>     
          <div className="form-group">
            <label htmlFor="address">Localidad:</label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.localidad}
              onChange={this.onChangeClienteLocalidad}
              />
          </div> 
          <div className="form-group">
            <label htmlFor="address">Telefono:</label>
            <input 
              type="number" 
              className="form-control" 
              value={this.state.telephone}
              onChange={this.onChangeClienteTelephone}
              />
          </div>  
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );

  }
}


