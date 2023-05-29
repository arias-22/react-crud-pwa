import React from "react";

import { MyContext } from "../MyContext";

function TableBody(){

    const {
        proveedoresList, 
        onClickEdit,
        setCrearProveedor,
        deleteProveedor
    } = React.useContext(MyContext);

    return (
      <React.Fragment>
        {proveedoresList.map((proveedor) => (
          <tr key={proveedor.id}>
            <td>{proveedor.nombre}</td>
            <td>
              <span
                className={`badge text-bg-success ${
                  proveedor.estado || "text-bg-danger"
                } `}
              >
                {(proveedor.estado && "Activo ") ||
                  proveedor.estado ||
                  "Inactivo"}
              </span>
            </td>
            <td>${proveedor.costo_servicios}</td>
            <td>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={() => {
                        onClickEdit(proveedor.id);
                        setCrearProveedor(false);
                    }}
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#infoModal"
                    >
                      <i className="bi bi-card-checklist"></i>
                    </button>
                  </div>
                  <div className="col-5">
                    <button 
                    onClick={()=>{deleteProveedor(proveedor.id)}}
                    className="btn btn-danger btn-sm">
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </React.Fragment>
    );
}

export {TableBody}