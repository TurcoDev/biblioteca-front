import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Bienvenida from './Bienvenida';
import EleccionGrado from "./EleccionGrado";
import NumeroSeleccionado from "./NumeroSeleccionado";
import IniciarSesion from './IniciarSesion';
import RegistroUsuario from './RegistroUsuario';
import TarjetaDeIngreso from './IniciarSesionEst';
import CrearSesionMayores from './IniciarSesionMayores';

import './App.css';


function App() {
      return (
        <Router>
          <div className='contenedorPrincipal'>
            <Header />
            
          <Routes>
          <Route path="/" element={<Bienvenida />} />
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

/*<<<<<<< HEAD
=======
function App() {

  return (
    <div className='contenedorPrincipal'>
      <Header />
      <Footer />
      <h1>Te damos la bienvenida!</h1>
      <div>
          <h2>Trabajo de Andrea</h2>
          <DropdownMenu />
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
    </div>
    
  )
}

>>>>>>> andrea*/
export default App;
