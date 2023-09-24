import React from 'react'
import './Carrucel.css'
import Videos from '../videos/Videos'

function Carrucel(props) {

  return (
    <div className='carrucel-contenedor'>
      <div className='carrucel'>
        {
          props.info.map((dat,index)=>
          { return <Videos key={index} imagen={dat.imagen} 
          datos={dat} color={props.color} 
          cambiarImagenVideo={props.cambiarImagenVideo}
          actualizar={props.actualizar} />}
          )
        }
    
       </div>
    </div>
    
  )
}

export default Carrucel
