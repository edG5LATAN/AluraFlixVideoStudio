import React from 'react'
import './Informacion.css'
import ReactPlayer from 'react-player'

function Informacion(props) {
  

  return (<>
    {
      props.datosVideo.map((dat,index) => {
        let urld=dat.video;
        return <div className='informacion'>
          <div key={index} className='informacion_info'>
            <h2 style={{backgroundColor:dat.color}}>{dat.categoria}</h2>
            <h4>{dat.titulo}</h4>
            <p>{dat.descripcion}</p>
          </div>
          <div className='video'>
            <ReactPlayer style={{border:`3px solid ${dat.color}`}}
          className="video1"
          url={urld}
          controls 
          width='100%'   
          loop
        />
          </div>
          

        </div>
      })
    }
  </>

  )
}

export default Informacion
