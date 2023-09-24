import React from 'react'
import './Videos.css'
import { listaVideosData } from '../../service/datosServcice'

function Videos(props) {
  const {imagen,color,cambiarImagenVideo,datos,actualizar} = props

  const enviarVideo=()=>{
     const info={
      "categoria": datos.categoria,
      "titulo": datos.titulo,
      "video": datos.video,
      "imagen": datos.imagen,
      "descripcion": datos.descripcion,
      "color":color,
     }
     cambiarImagenVideo(info)
  }
  const borrar=(e)=>{
    const id=e.target.id
    
      try {
        listaVideosData.eliminarDatos(id)
        .then(res=>{
          actualizar()
        }).catch(error=>console.log(error))
      } catch (error) {
        console.log(error)
      }
    
  }

  return (
   <div className='video-contenedor' title={datos.titulo}>
      <img onClick={enviarVideo} style={{border:`4px solid ${color}`}} 
     className='videos' src={imagen} 
     alt={datos.titulo}/>
     <span className='delete-video' id={datos.id} onClick={(e)=>borrar(e)}>X</span>
   </div>

     
  )
}

export default Videos
