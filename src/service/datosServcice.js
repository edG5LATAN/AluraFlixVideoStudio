import {v4 as uuid} from 'uuid'

const url="http://localhost:3000/datos"

const listaDatos=()=>{
   return fetch(url).then(res=>res.json());
}

const crearDatos=(categoria,titulo,video,imagen,descripcion)=>{
    return fetch("http://localhost:3000/datos",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({categoria,titulo,video,imagen,descripcion,id:uuid()})
    })  ;
}

const eliminarDatos=(id)=>{
    return fetch(`${url}/${id}`,{
        method:"DELETE"}
    );
}

const updateDatos=(categoria,titulo,video,imagen,descripcion,id)=>{
    return fetch(`http://localhost:3000/datos/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({categoria,titulo,video,imagen,descripcion})
    })  ;
}

const detalleDatos=(id)=>{
  return fetch(`${url}/${id}`).then(res=>res.json());  
}

const nombreDatos=(nombre)=>{
    return fetch(`${url}/?q=${nombre}`).then(res=>res.json());  
  }

export const listaVideosData={
    listaDatos,
    crearDatos,
    eliminarDatos,
    detalleDatos,
    updateDatos,
    nombreDatos,
}