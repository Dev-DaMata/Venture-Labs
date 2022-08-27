import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
