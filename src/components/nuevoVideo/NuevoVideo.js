import React, { useState } from 'react'
import './NuevoVideo.css'
import Input from '../input/Input'
import Boton from '../boton/Boton'
import SelectVariable from '../select/SelectVariable.js'
import { Link } from 'react-router-dom'

function NuevoVideo(props) {


  const [state, setstate] = useState(true)

  const [titulo, setTitulo] = useState("")
  const [video, setVideo] = useState("")
  const [imagen, setImagen] = useState("")
  const [categoria, setCategoria] = useState("")
  const [descripcion, setDescripcion] = useState("")

 const [error,seterror]=useState('none')

  const cambio = () => {
    setstate(!state)
  }
  const guardar=(e)=>{
    e.preventDefault()
    const dato={
      "titulo": titulo,
      "video": video,
      "imagen": imagen,
      "categoria": categoria,
      "descripcion": descripcion,
    }
    if(titulo!=""&&video !=""&&imagen !=""&& descripcion !=""){
       props.registrarNuevo(dato)
       seterror('none')
       limpiar()
    }else{
    seterror("unset")

    }
  } 
  const limpiar=()=>{
    setTitulo("")
    setVideo("")
    setImagen("")
    setCategoria("")
    setDescripcion("")
  }
  
  

  return (
    <>
     <div className='contenedor-nuevoVideo'>
        <form className='nuevoVideo'>
          <h2>Nuevo Video</h2>
          <label style={{display:`${error}`}} className='labelError'>todos los campos requerido</label>
          <Input type="text" placeholder="Ingrese el Titulo" titulo={titulo} setTitulo={setTitulo} />
          <Input type="text" placeholder="Ingrese el Link De Video" titulo={video} setTitulo={setVideo}  />
          <Input type="text" placeholder="Ingrese el Link de Imagen" titulo={imagen} setTitulo={setImagen}  />
          <SelectVariable equipo={props.equipo} titulo={categoria} setTitulo={setCategoria}/>
          <Input type="text" placeholder="Descripcion" titulo={descripcion} setTitulo={setDescripcion} required />
          <div className='nuevo-video-botones'>
            <div className='nuevo-video-botones-1'>
              <Boton type='submit' nombre="Guardar" cambio={guardar}/>
              <Boton type="button" nombre={"Limpiar"} cambio={limpiar} />
            </div>
            <Link to='/nuevoEquipo'>
              <Boton type="button" nombre="Nueva Categoria" cambio={cambio} />
            </Link>
          </div>
        </form>
      </div>
        
    </>
  )
}

export default NuevoVideo
