import React from "react";
import { MyContext } from "../MyContext";

function ContainerAdd(){
  const {setCrearProveedor} = React.useContext(MyContext);

    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2>Proveedores</h2>
          </div>
          <div className="col-5">
            <button
              onClick={()=>{setCrearProveedor(true)}}
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#infoModal"
            >
              Nuevo
            </button>
          </div>
        </div>
      </div>
    );

}

export{ContainerAdd}