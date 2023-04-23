import React, { Component } from 'react';
import axios from 'axios';


export default class FormularioCliente extends Component {
  
state = {
    clientes: [],
    name:'',
    lastname:'',
    email:'',
    address:''

  }

  async componentDidMount(){
    this.getClientes();
    console.log(this.state.clientes);
  }

  getClientes = async()=>{
    const res = await axios.get('http://localhost:3000/api/clientes');
    this.setState({clientes:res.data})
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

  onSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/clientes',{
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address
    })

/*     this.setState({name: ''})
    this.setState({lastname: ''})
    this.setState({email: ''})
    this.setState({address: ''})
    this.getClientes(); */
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
              id="lastname" 
              name="lastname" 
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeClienteLastName}/>
              
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input  
              type="email" 
              id="email" 
              name="email" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeClienteEmail}/>
          </div>

          <div className="form-group">
            <label htmlFor="address">Direccion:</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              className="form-control" 
              value={this.state.address}
              onChange={this.onChangeClienteAddress}
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


