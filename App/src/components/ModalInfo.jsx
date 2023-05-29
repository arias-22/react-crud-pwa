import React from "react";
import { MyContext } from "../MyContext";
import { ModalInfoBody } from "./ModalInfoBody";
import { ModalCrearBody } from "./ModalCrearBody";

function Modal () {
    
    const { infoProveedor, editCampo, editarCampo, setEditarCampo, onSave, crearProveedor } =
      React.useContext(MyContext);
    
    return (
      <React.Fragment>
        <div className="modal" tabIndex="-1" id="infoModal">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Proveedor </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {crearProveedor === false ? 
                <ModalInfoBody info={infoProveedor}></ModalInfoBody> : 
                <ModalCrearBody></ModalCrearBody>}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {setEditarCampo(false)}}
                >
                  Cerrar
                </button>
                {editarCampo === false && crearProveedor === false ?  <button
                  className="btn btn-primary"
                  onClick={() => {
                    editCampo(infoProveedor.id, "nombre");
                  }}
                >Editar</button> : <button
                className="btn btn-success"
                onClick={() => {
                 onSave();
                }}
                >Guardar</button>}
               
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export {Modal}