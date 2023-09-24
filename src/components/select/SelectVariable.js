import React from 'react'
import './SelectVariable.css'

function SelectVariable(props) {

  const cambio =(e)=>{
    props.setTitulo(e.target.value)
  }

  return (
    <select onChange={cambio} value={props.titulo} className='select'>
      <option disabled value="" defaultValue="" hidden >Seleccionar Categoria</option>
      {
  props.equipo.map((dat,index)=>
  <option key={index}>{dat.categoria}</option>)
      } 
    </select>
  )
}

export default SelectVariable
