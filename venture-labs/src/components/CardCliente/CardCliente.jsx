import React from 'react'
import S from './CardCliente.module.css'
const CardCliente = ({nome, sobrenome, telefone, cep, endereco1, endereco2, dataNascimento, cpf,rendaMensal}) => {
  return (
    <div className={S.card}>
        <h1>Nome:{nome}</h1>
        <p>sobrenome:{sobrenome}</p>
        <p>telefone:{telefone}</p>
        <p>cep:{cep}</p>
        <p>endereço1:{endereco1}</p>
        <p>endereço2:{endereco2}</p>
        <p>Data de Nascimento:{dataNascimento}</p>
        <p>CPF:{cpf}</p>
        <p>Renda Mensal:{rendaMensal}</p>
    </div>
  )
}

export default CardCliente