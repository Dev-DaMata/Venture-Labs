import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Clientes from "./Pages/Clientes/Clientes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S from './App.module.css'
import CadastroProvider from "./context/Cadastro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={S.container}>
    <BrowserRouter >
      <Header />
        <CadastroProvider>
      <Routes>
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/cadastro" element={<Cadastro />} />        
      </Routes>
      </CadastroProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
