import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Ingresar from './Ingresar.jsx';
import Bienvenida from './Bienvenida';
import EleccionGrado from "./EleccionGrado";
import NumeroSeleccionado from "./NumeroSeleccionado";
import IniciarSesion from './IniciarSesion';
import RegistroUsuario from './RegistroUsuario';
import TarjetaDeIngreso from './IniciarSesionEst';
import CrearSesionMayores from './IniciarSesionMayores';
import DropdownMenu from './PerfilAdulto.jsx';

import './App.css';


function App() {
      return (
        <Router>
          <div className='contenedorPrincipal'>
            <Header />
              <h1>Te damos la bienvenida!</h1>
              <div>
                <h2>Trabajo de Andrea</h2>
                <DropdownMenu />
              </div>
          <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Ingresar" element={<Ingresar />} />
          <Route path="/elecciongrado" element={<EleccionGrado />} />
          <Route path="/numero/:number/:color" element={<NumeroSeleccionado />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/registrousuario" element={<RegistroUsuario />} />
          <Route path="/tarjetadeingreso" element={<TarjetaDeIngreso />} />
          <Route path="/CrearSesionMayores" element={<CrearSesionMayores />} />
        </Routes>
        </div>
        </Router> 
);
}
export default App;
