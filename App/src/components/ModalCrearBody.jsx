import React from "react";
import { MyContext } from "../MyContext";

function ModalCrearBody(){
    let departmentList = ['Ahuachapán','Cabañas','Chalatenango','Cuscatlán','La Libertad','Morazán','La Paz','Santa Ana','San Miguel','San Salvador','San Vicente','Sonsonate','La Unión','Usulután'];
  
   
    const {editarCampo} =React.useContext(MyContext)
    return (
      <React.Fragment>
        <h5>
          <b>Nombre: </b>
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input id="nombrePro" className="form-control" type="text" />
            </div>
          </div>
        </div>
        <br />
        <h5>
          <b>Dirección: </b>
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input id="dirPro" className="form-control" type="text" />
            </div>
          </div>
        </div>
        <br />
        <h5>
          <b>Departamento</b>:
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <select className="form-select" id="departPro">
                {departmentList.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <br />
        <h5>
          <b>Estado: </b>
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <select className="form-select" id="estadoPro">
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <h5>
          <b>Fecha de alta: </b>
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input
                required="required"
                id="fechaPro"
                className="form-control"
                type="date"
              />
            </div>
          </div>
        </div>
        <br />
        <h5>
          <b>Costo de servicios: </b>
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input
                defaultValue={0}
                required="required"
                id="costoPro"
                className="form-control"
                type="number"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export {ModalCrearBody}