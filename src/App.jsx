import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Ingresar from './Ingresar';
import EleccionGrado from "./EleccionGrado";
import NumeroSeleccionado from "./NumeroSeleccionado";
import IniciarSesion from './IniciarSesion';
import RegistroUsuario from './RegistroUsuario';

import './App.css';


function App() {
      return (
        <Router>
          <div className='contenedorPrincipal'>
            <Header />
            <h1>Te damos la bienvenida!</h1>
            
          <Routes>
          <Route path="/" element={<Ingresar />} />
          <Route path="/elecciongrado" element={<EleccionGrado />} />
          <Route path="/numero/:number/:color" element={<NumeroSeleccionado />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/registrousuario" element={<RegistroUsuario />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
