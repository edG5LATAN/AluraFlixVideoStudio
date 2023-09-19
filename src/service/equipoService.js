import {v4 as uuid} from 'uuid'

const url="https://apialuraflix-xik5.onrender.com/equipo"

const listaCliente=()=>{
   return fetch(url).then(res=>res.json());
}

const crearCliente=(codigoSeguridad,color,categoria,descripcion)=>{
    return fetch("https://apialuraflix-xik5.onrender.com/equipo",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({codigoSeguridad,color,categoria,descripcion,id:uuid()})
    })  ;
}

const eliminarCcliente=(id)=>{
    return fetch(`${url}/${id}`,{
        method:"DELETE"}
    );
}

const updateCliente=(codigoSeguridad,color,categoria,descripcion,id)=>{
    return fetch(`https://apialuraflix-xik5.onrender.com/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({codigoSeguridad,color,categoria,descripcion})
    })  ;
}

const detalleCliente=(id)=>{
  return fetch(`${url}/${id}`).then(res=>res.json());  
}

const nombreCliente=(nombre)=>{
    return fetch(`${url}/?q=${nombre}`).then(res=>res.json());  
  }

export const listaEquipoCliente={
    listaCliente,
    crearCliente,
    eliminarCcliente,
    detalleCliente,
    updateCliente,
    nombreCliente,
}