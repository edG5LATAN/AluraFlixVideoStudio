import React from 'react'
import './FondoImagen.css'
import Informacion from '../informacion/Informacion'

function FondoImagen(props) {
  return (
    <div className='fondo_imagen'>
      <Informacion datosVideo={props.datosVideo} />
    </div>
  )
}

export default FondoImagen
