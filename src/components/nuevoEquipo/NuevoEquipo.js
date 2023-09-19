import React, { useState } from 'react'
import Input from '../input/Input'
import Boton from '../boton/Boton'
import Tabla from '../tabla/Tabla'
import './NuevoEquipo.css'
import { listaEquipoCliente } from '../../service/equipoService'

function NuevoEquipo(props) {

  const { equipo, actualizar } = props

  const [nombre, setNombre] = useState("")
  const [codigoSeguridad, setCodigoSeguridad] = useState("")
  const [color, setColor] = useState("#6B5BE2")
  const [descripcion, setDescripcion] = useState("")
  const [id, setid] = useState('')

  const [error, seterror] = useState('none')

  const guardar = (e) => {
    e.preventDefault()
    const dato = {
      "categoria": nombre,
      "codigoSeguridad": codigoSeguridad,
      "color": color,
      "descripcion": descripcion,
      "id": id
    }
    if (id) {
      try {
        listaEquipoCliente.updateCliente(codigoSeguridad, color, nombre, descripcion, id)
          .then(res => {
            console.log(res)
            actualizar()
            limpiar()
          }).catch(error => console.log(error))
      } catch (error) {
        console.log(error)
      }

    } else {
      if (nombre != "" && color != "" && descripcion != "" && codigoSeguridad != "") {
        try {
          listaEquipoCliente.crearCliente(codigoSeguridad, color, nombre, descripcion)
            .then(res => {
              console.log(res)
              seterror('none')
              limpiar()
              actualizar()
            })
            .catch(error => console.log(error))
        } catch (error) {

        }

      } else {
        seterror("unset")

      }
    }

  }
  const limpiar = () => {
    setNombre("")
    setCodigoSeguridad("")
    setColor("#6B5BE2")
    setDescripcion("")
    setid("")
  }

  const editarEquipo = (data) => {
    // limpiar()

    setNombre(data.categoria)
    setCodigoSeguridad(data.codigoSeguridad)
    setColor(data.color)
    setDescripcion(data.descripcion)
    setid(data.id)
  }
  const eliminar = (id) => {
    listaEquipoCliente.eliminarCcliente(id)
      .then(res => {
        console.log(res)
        actualizar()
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='contenedor-nuevoEquipo'>
      <div className='nuevoEquipo'>
        <h2>Nueva Categoria</h2>
        <label style={{ display: `${error}` }} className='labelError'>todos los campos requerido</label>
        <Input type="text" placeholder="Ingrese su nombre" titulo={nombre} setTitulo={setNombre} required />
        <Input type="text" placeholder="Ingrese una descripcion dela categoria" titulo={descripcion} setTitulo={setDescripcion} required />
        <label>Color</label>
        <Input type="color" placeholder="color" titulo={color} setTitulo={setColor} />
        <Input type="text" placeholder="codigo de seguridad" titulo={codigoSeguridad} setTitulo={setCodigoSeguridad} required />
        <div className='nuevo-video-botones'>
          <div className='nuevo-video-botones-1'>
            <Boton type="submit" cambio={guardar} nombre={"Guardar"} />
            <Boton type={"button"} cambio={limpiar} nombre={"Limpiar"} />
          </div>

        </div>
        <Tabla equipo={equipo} editarEquipo={editarEquipo} eliminar={eliminar} />
      </div>
    </div>
  )
}

export default NuevoEquipo
