import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import S from './App.module.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={S.container}>
    <BrowserRouter >
      <Header />
      <Routes>
        
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
