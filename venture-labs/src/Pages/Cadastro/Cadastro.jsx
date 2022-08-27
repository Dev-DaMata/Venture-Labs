import React from 'react'
import { useState } from 'react'
import Label from '../../components/Label/Label'
const Cadastro = () => {
  const [cadastro, setCadastro] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco1: "",
    endereco2: "",
    dataNascimento: "",
    cpf: "",
    rendaMensal: ""
  })
  return (
    <div>
      <form action="">
        <Label texto='Nome'/>
      </form>
    </div>
  )
}

export default Cadastro
