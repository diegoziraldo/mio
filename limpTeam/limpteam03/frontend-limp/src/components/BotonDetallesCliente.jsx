/* import {useState} from "react"; */
import "bootstrap/dist/css/bootstrap.min.css";

const ModalDetallesCliente = (data) => {

  

  //console.log(data);


    const objeto = data.data.name;


  
    console.log(objeto);


    return (
<>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Detalles"
      >
        Detalles
      </button>
      <p>{objeto}</p>
      <div className="modal fade" id="Detalles">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>Detalles de {objeto}</h3>
            </div>
          </div>
        </div>
      </div>
</>
    );
  }



  export default ModalDetallesCliente;





/* 
  return ( */
/*     <td>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Detalles"
      >
        Detalles
      </button>
      <p>{data.data.name}</p>
      <div className="modal fade" id="Detalles">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>Detalles de {data.data.name}</h3>
            </div>
          </div>
        </div>
      </div>

    </td>
  );
}; */


