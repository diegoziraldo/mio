import { Component } from 'react';
import axios from 'axios';


export default class CreateProducto extends Component {
  
state = {
    productos: [],
    name:'',
    description:'',
    category:'',
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

  onChangeProductCategory = (e)=>{
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

  onChangeImagen = (e)=>{
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

    await axios.post('http://localhost:3000/api/productos', newProducto)
    window.location.href = 'products';

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
        <h1>Formulario Productos</h1>

          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeProductName}/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrpcion:</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeProductDescription}/>
              
          </div>

          <div className="form-group">
            <label htmlFor="email">Categoria:</label>
            <input  
              type="text" 
              className="form-control"
              value={this.state.categoria}
              onChange={this.onChangeProductCategory}/>
          </div>

          <div className="form-group">
            <label htmlFor="address">Marca:</label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.marca}
              onChange={this.onChangeMarca}
              />
          </div>  

          <div className="form-group">
            <label htmlFor="address">Price:</label>
            <input 
              type="number" 
              className="form-control" 
              value={this.state.price}
              onChange={this.onChangePrice}
              />
          </div> 

          <div className="form-group">
            <label htmlFor="address">Imagen:</label>
            <input 
              type="file" 
              className="form-control" 
              value={this.state.img}
              onChange={this.onChangeImagen}
              />

          </div>  

          <div className="form-group">
            <label htmlFor="address">Stock:</label>
            <input 
              type="number" 
              className="form-control" 
              value={this.state.stock}
              onChange={this.onChangeStock}
              />
          </div>

          <div className="form-group">
            <label htmlFor="address">InfoProveedor:</label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.infoProveedor}
              onChange={this.onChangeInfoProveedor}
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


