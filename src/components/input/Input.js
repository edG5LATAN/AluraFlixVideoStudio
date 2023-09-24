import React from 'react'
import './Input.css'

function Input(props) {

  const {titulo,placeholder,setTitulo,type,required}=props
  
  const cambio=(e)=>{
     setTitulo(e.target.value)
     
  }

  return (
    <input required={required} onChange={cambio}  className='input1' placeholder={placeholder} type={type} value={titulo} />
  )
}

export default Input
