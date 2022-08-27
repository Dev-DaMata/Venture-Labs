import React from 'react'

const Button = ({texto, onClick}) => {
  return (
    <button onClick={(e)=>onClick(e)} >{texto}</button>
  )
}

export default Button