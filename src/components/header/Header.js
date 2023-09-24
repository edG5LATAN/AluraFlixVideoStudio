import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Headers(props) {
  
  const {nuevoVideo,cambio,setcambio}=props
  


  const cambio1=()=>{
    nuevoVideo()
  }

  const cambioT=()=>{
    setcambio(true)
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img onClick={cambioT} src='./img/logo.png' alt='logo header'/>
      </Link>
      <Link to='/nuevoVideo'>
        <button className={cambio===true?'mostrar':'ocultar'} onClick={cambio1} >Nuevo Video</button>
      </Link>
    </div>
  )
}

export default Headers
