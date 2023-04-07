import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {
  
  state = {
    users:[],
    userSelected:'',
    title:'',
    content: '',
    date: new Date()
  }



  async componentDidMount(){
    const res = await axios.get('http://localhost:3000/api/users')
    this.setState({users: res.data.map(user => user.username),
                  userSelected: res.data[0].username})
  }

  onSubmit = async(e)=>{
    e.preventDefault()

    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected

    }
    await axios.post('http://localhost:3000/api/notes', newNote)
    window.location.href = '/';
  }
  
  onInputChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  onChangeDate = date =>{
    this.setState({date})
  }

  render() {
    return (
      <div className='col-md-10 offset-md-1'>
        <div className='card card-body' >
          <h2 >Notas</h2>
          {/* Select user */}
          <div style={{ marginBottom: '20px' }} className='form-group' >
            <select className='form-control' name='userSelected' onChange={this.onInPutChange}>
              {
                  this.state.users.map(user => 
                  <option key={user} value={user}>
                    {user}
                  </option>)
              }
            </select>
            
              
          </div>
          <div className='form-group'>
          <input 
            style={{ marginBottom: '20px' }} 
            type="text" 
            name='title'
            className='form-control'
            placeholder='Titulo'
            value={this.state.title}
            onChange={this.onInputChange} // Aquí está el cambio
            required
/>
          </div>
          <div style={{ marginBottom: '20px' }} className='form-group'>
            <textarea
              name='content'
              className='form-control'
              placeholder='Contenido'
              onChange={this.onInputChange}
              required
              >

            </textarea>
          </div>

          <div style={{ marginBottom: '20px' }} className='form-group'>
              <DatePicker
                className='form-control' 
                selected={this.state.date}
                onChange={this.onChangeDate}

                />
          </div>

          <form onSubmit={this.onSubmit} >
            <button type='submit' className='btn btn-primary' >
              Guardar
            </button>
          </form> 
        </div>
      </div>
    )
  }
}


