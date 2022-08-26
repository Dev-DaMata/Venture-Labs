import React from 'react'
import Button from '../Button/Button'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.container}>
        <div className={S.left} >
            <h1>Venture Labs</h1>
            <Button texto="Cadastrar"/>
            <Button texto="Login"/>
            
        </div>
        <div>
            <form>
                <input type="text" />
                <label htmlFor="">oioi</label>
            </form>
        </div>
    </header>
  )
}

export default Header