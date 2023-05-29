import React from "react";
import { MyContext } from "../MyContext";

function ModalInfoBody(props){
    let infoProveedor = props.info;
    let departmentList = ['Ahuachapán','Cabañas','Chalatenango','Cuscatlán','La Libertad','Morazán','La Paz','Santa Ana','San Miguel','San Salvador','San Vicente','Sonsonate','La Unión','Usulután'];
  
   
    const {editarCampo} =React.useContext(MyContext)
    return (
      <React.Fragment>
        <h5>
          <b>Nombre: </b> {infoProveedor.nombre}{" "}
        </h5>
        {editarCampo === true ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <input defaultValue={infoProveedor.nombre} id="nombrePro" className="form-control" type="text" />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <br />
        <h5>
          <b>Dirección: </b> {infoProveedor.direccion}
        </h5>
        {editarCampo === true ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <input defaultValue={infoProveedor.direccion} id="dirPro" className="form-control" type="text" />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <br />
        <h5>
          <b>Departamento</b>: {infoProveedor.departamento}
        </h5>
        {editarCampo === true ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <select defaultValue={infoProveedor.departamento} className="form-select" id="departPro">
                    {departmentList.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <br />
        <h5>
          <b>Estado: </b> {infoProveedor.estado === 1 ? "Activo" : "Inactivo"}
        </h5>
        {editarCampo === true ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <select defaultValue={infoProveedor.estado === 1 ? "Activo" : "Inactivo"} className="form-select" id="estadoPro">
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <br />
        <h5>
          <b>Fecha de alta: </b> {infoProveedor.fecha_alta}
        </h5>
        {editarCampo === true ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-8">
                <input defaultValue={infoProveedor.fecha_alta} required="required" id="fechaPro" className="form-control" type="date" />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <br />
        <h5>
          <b>Costo de servicios: </b> ${infoProveedor.costo_servicios}
        </h5>
        {editarCampo === true ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-8">
                <input defaultValue={infoProveedor.costo_servicios} required="required" id="costoPro" className="form-control" type="number" />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </React.Fragment>
    );
}

export {ModalInfoBody}