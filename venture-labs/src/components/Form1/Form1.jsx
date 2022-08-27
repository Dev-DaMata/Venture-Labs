import React from 'react'
import { useState } from 'react'
import Label from '../Label/Label'
import Button from '../Button/Button'
import S from './Form.module.css'
import { useContext } from 'react'
import { CadastroContext } from '../../context/Cadastro'
const Form1 = () => {
  const [page, setPage] = useState(1)
  const {handleChange, handleClick, dados} = useContext(CadastroContext)
  
  const maisPage = (e)=>{
    e.preventDefault()
    setPage(page + 1)
  }
  const menosPage = (e)=>{
    e.preventDefault()
    setPage(page - 1)
  }
  const salvar = (e)=>{
    e.preventDefault()
    handleClick()
    setPage(1)
  }
  return (
    <form>
        {page == 1 ? <div className={S.form}>
          <Label texto='Nomes'/>
          <input type="text" placeholder='Digite o seu nome' value={dados.nome} onChange={(e)=>{handleChange(e, "nome")}} />
          <Label texto='Sobrenome'/>
          <input type="text" placeholder='Digite o seu sobrenome' value={dados.sobrenome} onChange={(e)=>{handleChange(e, "sobrenome")}}/>
          <Label texto='E-mail'/>
          <input type="email" placeholder='Digite o seu E-mail' value={dados.email} onChange={(e)=>{handleChange(e, "email")}}/>
          <Label texto='Telefone'/>
          <input type='text' placeholder='Digite o seu numero' value={dados.telefone}  onChange={(e)=>{handleChange(e, "telefone")}}/>
          <Button onClick={maisPage} texto={"Próximo"}/>         
        </div>:''} 
        {page == 2 ? <div className={S.form}>
        <Label texto='cep'/>
        <input type="text" placeholder='Digite o seu cep' value={dados.cep} onChange={(e)=>{handleChange(e, "cep")}} />
        <Label texto='endereço1'/>
        <input type="text" placeholder='digite o seu endereço' value={dados.endereco1} onChange={(e)=>{handleChange(e, "endereco1")}}/>
        <Label texto='endereço2'/>
        <input type="text" placeholder='digite o seu segundo endereço' value={dados.endereco2} onChange={(e)=>{handleChange(e, "endereco2")}}/>          
          <Button onClick={menosPage} texto={"Anterior"}/>
          <Button onClick={maisPage} texto={"Próximo"}/>
        </div>:""}
        {page == 3 ? <div className={S.form}>
          <Label texto='CPF'/>
          <input type="text" placeholder='Digite o seu cep' value={dados.dataNascimento} onChange={(e)=>{handleChange(e, "dataNascimento")}} />
          <Label texto='Data nascimento'/>
          <input type="text" placeholder='digite o seu endereço'  value={dados.cpf} onChange={(e)=>{handleChange(e, "cpf")}}/>
          <Label texto='Renda Mensal'/>
          <input type="text" placeholder='digite o seu segundo endereço' value={dados.rendaMensal} onChange={(e)=>{handleChange(e, "rendaMensal")}}/>
          <Button  onClick={salvar} texto='salvar'/>
          <Button onClick={menosPage} texto={"Anterior"}/>
        </div>:''}
        </form>
  )
}

export default Form1