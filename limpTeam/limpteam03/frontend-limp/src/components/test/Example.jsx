import { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class Example extends Component {


  render() {
    return (
      <div>
        <td>
          <a href="#" className="btn btn-primary" onClick={this.handleShowModal}>
            Detalles
          </a>
        </td>

        <Modal  onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Aquí puedes agregar el contenido del pop-up.</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={this.handleCloseModal}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}