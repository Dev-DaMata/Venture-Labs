import React from 'react'

const Button = ({texto, onclick}) => {
  return (
    <button onclick={onclick}>{texto}</button>
  )
}

export default Button