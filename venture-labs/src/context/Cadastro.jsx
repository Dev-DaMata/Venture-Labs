import React from 'react'
import { createContext, useState } from 'react'
export const CadastroContext = createContext()


const CadastroProvider = ({children}) => {
    const [lista, setLista]= useState([])
    const [dados, setDados] = useState({
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
  
    const handleChange =(e, chave)=>{
      setDados({...dados, [chave]: e.target.value})
      console.log( lista);
    }
    const handleClick = ()=>{
      setLista([...lista, dados])
      setDados(
        {
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
      }
      )
    }
    const contexto = {
        dados: dados,
        handleChange: handleChange,
        handleClick: handleClick,
        lista: lista,
    }
  return (
    <CadastroContext.Provider value={contexto}>{children}</CadastroContext.Provider>

  )
}

export default CadastroProvider