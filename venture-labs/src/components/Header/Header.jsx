import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.container}>
        <div className={S.left} >
            <h1>Venture Labs</h1>
            <nav className={S.link}>
              <button className={S.button}><Link to='/'>Home</Link></button>
              <button><Link to='/cadastro'>Cadastro</Link></button>
              <button><Link to='/clientes'>Clientes</Link></button>
            </nav>
            
        </div>
        <div>
            <form>
            </form>
        </div>
    </header>
  )
}

export default Header