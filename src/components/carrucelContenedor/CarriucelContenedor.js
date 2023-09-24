import React, { useEffect, useState } from 'react'
import './CarrucelContenedor.css'
import CarrucelInformacion from '../carrucelInformacion/CarrucelInformacion.js'
import Carrucel from '../carrucel/Carrucel'
import Cargando from '../cargando/Cargando'

function CarriucelContenedor(props) {
 console.log(props.datos.length)
  return (
    <>
    {
      props.datos.length>0 ?
       <div className='carrucel_contenedor'>
       {
         props.equipo.map((dat,index)=>{
           return<div key={index}> 
             <CarrucelInformacion datos={dat} info={props.datos.filter(dato=>dato.categoria===dat.categoria)}  />
 
             <Carrucel info={props.datos.filter(equipo=>equipo.categoria===dat.categoria)}
              color={dat.color} cambiarImagenVideo={props.cambiarImagenVideo}
              actualizar={props.actualizar} />
           </div>
             
          })
         } 
       </div>
       :
       <Cargando />
    }
    </>
    
  )
}

export default CarriucelContenedor
