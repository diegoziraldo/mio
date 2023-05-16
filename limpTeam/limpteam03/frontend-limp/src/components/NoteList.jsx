import { Component } from 'react';
import axios from 'axios';
import {format} from 'timeago.js'

export default class NoteList extends Component {

  state = {
    notes: []
  }

  async componentDidMount(){
    this.getNotes()

  }

  async getNotes(){
    const res = await axios.get('http://localhost:3000/api/notes')
    this.setState({
      notes: res.data
    })
  }



  deleteNote = (id)=>{
    axios.delete('http://localhost:3000/api/notes/' + id);
    this.getNotes()
  }


  render() {
    return (
      <div className='row'>
        {
          this.state.notes.map(note => (
          <div className='col-md-4 p-2' key={note._id}>
            <div className='card'>
              <div className='card-header'>
                <h3>{note.title}</h3>
              </div>
              <div className='card-body'>
                <p>{note.content}</p>
                <p>{note.author}</p>
                <p>{format(note.date)}</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-danger' onClick={()=> this.deleteNote(note._id)}>
                  Delete
                </button>

              </div>
            </div>

          </div>
        ))
        }
      </div>
    )
  }
}
