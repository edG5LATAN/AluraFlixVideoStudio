import React from 'react'
import './CarrucelInformacion.css'

function CarrucelInformacion(props) {
  
  return (<>{
    props.info.length > 0 && <div className='carrucelInformacion'>
        <h2 style={{backgroundColor:props.datos.color}}>{props.datos.categoria}</h2>
        <p>{props.datos.descripcion}</p>
    </div>
  }</>
   

    
  )
}

export default CarrucelInformacion

