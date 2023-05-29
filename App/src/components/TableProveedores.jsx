import React from "react";
import { TableBody } from "./TableBody";

function TableProveedores(){
    return (
      <React.Fragment>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Costo</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
           <TableBody></TableBody>
          </tbody>
        </table>
      </React.Fragment>
    );

}
export{TableProveedores}