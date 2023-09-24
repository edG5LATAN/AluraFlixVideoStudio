import React, { useEffect, useState } from 'react'
import './CarrucelContenedor.css'
import CarrucelInformacion from '../carrucelInformacion/CarrucelInformacion.js'
import Carrucel from '../carrucel/Carrucel'
import Cargando from '../cargando/Cargando.js'

function CarriucelContenedor(props) {
  // const[cargando,setcargando]=useState(true);

  // useEffect(() => {
  //    mostrar()
  // }, [cargando])
  
  
  // const mostrar=()=>{
  //   props.equipo.map((dat)=>{
  //     props.datos.filter(dato=>dato.categoria===dat.categoria).length >= 0 ?
  //     setcargando(false) 
  //     :
  //     setcargando(true)
  //   })
  // }
  
  return (
    <div className='carrucel_contenedor'>
      {
        props.cargando===false ?
        props.equipo.map((dat,index)=>{
          return<div key={index}> 
            <CarrucelInformacion datos={dat} info={props.datos.filter(dato=>dato.categoria===dat.categoria)}  />

            <Carrucel info={props.datos.filter(equipo=>equipo.categoria===dat.categoria)}
             color={dat.color} cambiarImagenVideo={props.cambiarImagenVideo}
             actualizar={props.actualizar} />
          </div>
            
        })
        :
        <Cargando />
      }

      
    </div>
  )
}

export default CarriucelContenedor
