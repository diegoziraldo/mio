import React, { Component } from 'react';
import axios from 'axios';


export default class CreateProducto extends Component {
  
state = {
    productos: [],
    name:'',
    description:'',
    categoria:'',
    marca:'',
    price:'',
    img:'',
    stock:'',
    infoProveedor:''

  }

  async componentDidMount(){
    this.getProductos();
  }
  
  getProductos = async()=>{
    const res = await axios.get('http://localhost:3000/api/productos');
    this.setState({productos:res.data})
    console.log(res);
  }

  onChangeProductName = (e)=>{
    this.setState({
       name: e.target.value
   })
 }
  onChangeProductDescription = (e)=>{
    this.setState({
     description: e.target.value
    })
  }

  onChangeCategory = (e)=>{
    this.setState({
      category: e.target.value
    })  
  }

  onChangeMarca = (e)=>{
    this.setState({
      marca: e.target.value
    })
  }

  onChangePrice = (e)=>{
    this.setState({
      price: e.target.value
    })
  }

  onChangeImg = (e)=>{
    this.setState({
      img: e.target.value
    })
  }

  onChangeStock = (e)=>{
    this.setState({
      stock: e.target.value
    })
  }

  onChangeInfoProveedor= (e)=>{
    this.setState({
      infoProveedor: e.target.value
    })
  }


  onSubmit = async(e)=>{
    e.preventDefault();
    const newProducto = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      marca: this.state.marca,
      price: this.state.price,
      img: this.state.img,
      stock: this.state.stock,
      infoProveedor: this.state.infoProveedor
    }

    await axios.post('http://localhost:3000/api/producto', newProducto)
    window.location.href = '/';

    this.setState({name: ''})
    this.setState({description: ''})
    this.setState({category: ''})
    this.setState({marca: ''})
    this.setState({price: ''})
    this.setState({img: ''})
    this.setState({stock: ''})
    this.setState({infoProveedor: ''})
    this.getProductos();

  }

  deleteProduct = async(id)=>{
    await axios.delete(`http://localhost:3000/api/productos/${id}`);
    this.getProductos()
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
              onChange={this.onChangeProductoName}/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrpcion:</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescrption}/>
              
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


