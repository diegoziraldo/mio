import { Component } from 'react';
import axios from 'axios';


export default class CreateCliente extends Component {
  
state = {
    clientes: [],
    name:'',
    lastname:'',
    email:'',
    direccion:'',
    localidad:'',
    telephono:''

  }

  async componentDidMount(){
    this.getClientes();
  }
  
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
      direccion: e.target.value
    })
  }

  onChangeClienteLocalidad = (e)=>{
    this.setState({
      localidad: e.target.value
    })
  }

  onChangeClienteTelephone = (e)=>{
    this.setState({
      telephono: e.target.value
    })
  }




  onSubmit = async(e)=>{
    e.preventDefault();
    const newCliente = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      direccion: this.state.direccion,
      localidad: this.state.localidad,
      telephono: this.state.telephono
    }
    await axios.post('http://localhost:3000/api/clientes', newCliente)
    window.location.href = '/';

    this.setState({name: ''})
    this.setState({lastname: ''})
    this.setState({email: ''})
    this.setState({direccion: ''})
    this.setState({localidad: ''})
    this.setState({telephono: ''})
    this.getClientes();

  }

  deleteUser = async(id)=>{
    await axios.delete(`http://localhost:3000/api/clientes/${id}`);
    this.getClientes()
    console.log(id);
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
              value={this.state.direccion}
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
              value={this.state.telephono}
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


