import Header from './Header.jsx';
import Ingresar from './Ingresar.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesion from './IniciarSesion.jsx';
import './App.css'

function App() {

  return (
    <div className='contenedorPrincipal'>
       <Header />
      <h1>Te damos la bienvenida!</h1>
      <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
