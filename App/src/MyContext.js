import React from 'react';
import { useState,useEffect } from 'react';

const MyContext = React.createContext();
const server = 'http://192.168.0.10:3001/';

function MyProvider(props){

    const [proveedoresList, setProveedoresList] = useState([]);
    const [idProveedor, setIdProveedor] = useState('');
    const [infoProveedor, setinfoProveedor] = useState('');
    const [editarCampo, setEditarCampo] = useState(false);
    const [crearProveedor, setCrearProveedor] = useState(false);

    useEffect(()=>{
        getProveedores();
        getInfo();
    },[idProveedor,editarCampo,infoProveedor,crearProveedor, proveedoresList])

    async function getProveedores(){
        const res = await fetch(server, {
          method: 'GET',
          headers: {
              'Content-Type' : 'application/json',
              'Access-Control-Allow-Origin': '*',
          },
          
      });
      const proveedores = await res.json();
        let list = [];
        proveedores.forEach(proveedor => {
            list.push(<h1 key={proveedor.nombre}>{proveedor.nombre}</h1>);
        });
        setProveedoresList(proveedores)
    }

    const onClickEdit = (id) => {
            setIdProveedor(id);
        }
    
    async function getInfo (){
        const res = await fetch(server+"?id="+idProveedor, {
          method: 'GET',
          headers: {
              'Content-Type' : 'application/json',
              'Access-Control-Allow-Origin': '*',
          }          
      });
      const info = await res.json();
      let fecha = info[0].fecha_alta; 
      info[0].fecha_alta = fecha.substring(0,10);
      setinfoProveedor(info[0]);
    }

    const editCampo = (id,campo) =>{
        setEditarCampo(true);
    }

    const onSave = ()=> {
        
        let valNombre = document.getElementById('nombrePro').value;
        let valDireccion = document.getElementById('dirPro').value;
        let valDepartamento = document.getElementById('departPro').value;
        let valEstado = document.getElementById('estadoPro').value
        let valFecha_alta = document.getElementById('fechaPro').value;
        let valCosto = document.getElementById('costoPro').value;

        let metodo = "";
        
        if(crearProveedor === true){
            metodo = "POST"
        }else{
            metodo="PUT"
        }
        
        let data = {
            "id": infoProveedor.id,
            "nombre": valNombre,
            "direccion": valDireccion,
            "departamento": valDepartamento,
            "estado": valEstado,
            "fecha_alta": valFecha_alta,
            "costo_servicios": valCosto,}
            
            async function saveInfo(){
                const res = await fetch(server, {
                    method: metodo,
                    headers: {
                        'Content-Type' : 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(data),
                    
                });
            }
        saveInfo();
        setEditarCampo(false);
    }

    const deleteProveedor = (id) => {
        async function Del(){
            const res = await fetch(server+"?id="+id, {
              method: 'DELETE',
              headers: {
                  'Content-Type' : 'application/json',
                  'Access-Control-Allow-Origin': '*',
              }          
          });
        }
        Del();
    }

    return(
        <MyContext.Provider value={{
            setProveedoresList,
            proveedoresList,
            onClickEdit,
            infoProveedor,
            editarCampo,
            editCampo,
            setEditarCampo,
            onSave,
            crearProveedor, 
            setCrearProveedor,
            deleteProveedor,

        }}>
            {props.children}
        </MyContext.Provider>
    );
}

export{
    MyContext, MyProvider
}