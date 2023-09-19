import React from 'react'
import './CarrucelContenedor.css'
import CarrucelInformacion from '../carrucelInformacion/CarrucelInformacion.js'
import Carrucel from '../carrucel/Carrucel'

function CarriucelContenedor(props) {
  

  return (
    <div className='carrucel_contenedor'>
      {
        props.equipo.map((dat,index)=>{
          return <div key={index}> 
            <CarrucelInformacion datos={dat} info={props.datos.filter(dato=>dato.categoria===dat.categoria)}  />

            <Carrucel info={props.datos.filter(equipo=>equipo.categoria===dat.categoria)}
             color={dat.color} cambiarImagenVideo={props.cambiarImagenVideo}
             actualizar={props.actualizar} />
          </div>
        })
      }

      
    </div>
  )
}

export default CarriucelContenedor
