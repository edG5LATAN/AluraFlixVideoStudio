import React from 'react'
import './Tabla.css'

function Tabla(props) {

const editar=(data)=>{
  props.editarEquipo(data)
}
const eliminar=(data)=>{
  const id=data.id
  props.eliminar(id)   
}



  return (
    <table className='tabla'>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Descripcion</td>
          <td>Editar</td>
          <td>Remover</td>
        </tr>
      </thead>
      <tbody>
        {
          props.equipo.map((dat,index)=>{
            return <tr key={index}>
            <td>{dat.categoria}</td>
            <td>{dat.descripcion}</td>
            <td onClick={()=>editar(dat)} className='editar'>Editar</td>
            <td onClick={()=>eliminar(dat)} className='remover'>Remover</td>
          </tr>
          })
        }
        
      </tbody>
    </table>
  )
}

export default Tabla
