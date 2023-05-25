
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal'

export default class PopUpCliente extends Component {
    state = {
      name: '',
      lastname: '',
      email: '',
      direccion: '',
      localidad: '',
      telephono: '',
      modalIsOpen: false, // Estado para controlar la visibilidad del modal
    };
  
 
    onChangeClienteName = (e) => {
      this.setState({ name: e.target.value });
    };
  
    onChangeClienteLastName = (e) => {
      this.setState({ lastname: e.target.value });
    };
  
    onChangeClienteEmail = (e) => {
      this.setState({ email: e.target.value });
    };
  
    onChangeClienteAddress = (e) => {
      this.setState({ direccion: e.target.value });
    };
  
    onChangeClienteLocalidad = (e) => {
      this.setState({ localidad: e.target.value });
    };
  
    onChangeClienteTelephone = (e) => {
      this.setState({ telephono: e.target.value });
    };
  
  
    render() {
      return (
        <div>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Example">modal</button> 
            <form>
                <div className="modal fade" id="Example">
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
        </div>
      );
    }
  }