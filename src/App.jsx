import Header from './Header.jsx';
import Ingresar from './Ingresar.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesion from './IniciarSesion.jsx';
import './App.css'
import FormularioRegistro from './crearCuentaEst.jsx';

function App() {

  return (
    <div className='contenedorPrincipal'>
       <Header />
      <h1>Te damos la bienvenida!</h1>
      <div> 
        < FormularioRegistro /> 
      </div>
       <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
    {/*<button onClick={handleRegistrarte}>Registrarte</button>*/}
    </div>
  )
}

export default App
