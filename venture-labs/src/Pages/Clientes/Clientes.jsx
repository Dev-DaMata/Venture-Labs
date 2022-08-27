import React from 'react'
import { useContext } from 'react'
import { CadastroContext } from '../../context/Cadastro'
import CadastroProvider from '../../context/Cadastro'
import CardCliente from '../../components/CardCliente/CardCliente'

const Clientes = () => {
  const {lista} = useContext(CadastroContext)
  console.log(lista);
  return (
    <div>
      {lista.length > 0 ? lista.map((item)=><CardCliente nome={item.nome} sobrenome={item.sobrenome} telefone={item.telefone} cep={item.cep} endereco1={item. endereco1} endereco2={item. endereco2} dataNascimento={item.dataNascimento} cpf={item.cpf} rendaMensal={item.rendaMensal}  />)
      :"Nenhum usuario cadastrado"}
    </div>
  )
}

export default Clientes