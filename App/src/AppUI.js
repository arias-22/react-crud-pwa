import React from "react";

import { Nav } from "./components/Nav";
import { ContainerAdd } from "./components/ContainerAdd";
import { TableProveedores } from "./components/TableProveedores";
import { Modal } from "./components/ModalInfo";

function AppUI(){
    return(
        <React.Fragment>
           <Nav></Nav>
           <ContainerAdd></ContainerAdd>
           <div className="container">
                <TableProveedores>

                </TableProveedores>

            <Modal></Modal>
           </div>
        </React.Fragment>
    )
}

export {AppUI}