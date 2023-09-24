import React from 'react'
import './Boton.css'

function Boton(props) {
  const {nombre,cambio,type}=props


  return (
    <button type={type} onClick={cambio} className='botones'>
      {nombre}
    </button>
  )
}

export default Boton
