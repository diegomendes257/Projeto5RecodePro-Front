import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./views/home";
import Destinos from "./views/destinos";
import Promocoes from "./views/promocoes";
import Contato from "./views/contato";

import Criar from "./views/usuarios/Criar";
import Atualizar from "./views/usuarios/Atualizar";
import Detalhes from "./views/usuarios/Detalhes";
import Usuario from "./views/usuarios";

import Header from "./components/Header";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sobre from "./views/Sobre";
import CriarPassagem from "./views/passagens/CriarPassagem";
import IndexPassagem from "./views/passagens/indexPassagem";
import AtualizarPassagem from "./views/passagens/AtualizarPassagem";
import CriarEmpresa from "./views/empresas/CriarEmpresa";
import AtualizarEmpresa from "./views/empresas/AtualizarEmpresa";
import IndexEmpresa from "./views/empresas/IndexEmpresa";


function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="/Criar" element={<Criar/>} />
        <Route path="/Atualizar" element={<Atualizar/>} />
        <Route path="/Detalhe" element={<Detalhes/>} />
        <Route path="/Usuarios" element={<Usuario/>} />
        <Route path="/Usuarios-Update" element={<Criar/>} />
        <Route path="/CriarPassagem" element={<CriarPassagem/>} />
        <Route path="/IndexPassagem" element={<IndexPassagem/>} />
        <Route path="/AtualizarPassagem" element={<AtualizarPassagem/>} />
        <Route path="/IndexEmpresa" element={<IndexEmpresa/>} />
        <Route path="/CriarEmpresa" element={<CriarEmpresa/>} />
        <Route path="/AtualizarEmpresa" element={<AtualizarEmpresa/>} />
        <Route path="/Atualizar/:id" element={<Atualizar />} />
        <Route path="/AtualizarPassagem/:id" element={<CriarPassagem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;