import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export default class CreateUser extends Component {

  state = {
    users: [],
    username: ''
  }


  
  async componentDidMount(){
    this.getUsers();
    console.log(this.state.users);

  }
  getUsers = async()=>{
    const res = await axios.get('http://localhost:3000/api/users');
    this.setState({users:res.data})
    console.log(res.data);
  }

  onChangeUserName = (e)=>{
     this.setState({
        username: e.target.value
    })
  }

  onSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/users',{
      username: this.state.username
    })
    this.setState({username: ''})
    this.getUsers();
  }

  deleteUser = async(id)=>{
    await axios.delete(`http://localhost:3000/api/users/${id}`);
    this.getUsers()
    console.log(id);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className='card card-body'>
            <h3>Crear Nuevo Cliente</h3>
            <form onSubmit={this.onSubmit}>
              <div style={{ marginBottom: '20px' }} className='form-grup'>
                <input 
                type='text' 
                className='form-control' 
                value={this.state.username}
                onChange={this.onChangeUserName}/>
              </div>
              <button type='submit' className='btn btn-primary'>
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className='col-md-8'>
          <ul className='list-group'>
          {
            this.state.users.map(user => (
              <li 
                className='list-group-item list-group-item-action' 
                key={user._id}
                onDoubleClick={()=> this.deleteUser(user._id)}
                >
              {user.username}
            </li>)
            )
          }
          </ul>
        </div>
      </div>
    )
  }
}
