import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import Form1 from '../../components/Form1/Form1'
import Label from '../../components/Label/Label'
import S from './Cadastro.module.css'
import CadastroProvider from '../../context/Cadastro'
const Cadastro = () => {
  
  
  return (
    <div>
      <CadastroProvider>
        <Form1/>
        
      </CadastroProvider>
    </div>
  )
}

export default Cadastro
