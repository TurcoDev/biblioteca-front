import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Ingresar from './Ingresar.jsx';
import Bienvenida from './Bienvenida';
import EleccionGrado from "./EleccionGrado";
import NumeroSeleccionado from "./NumeroSeleccionado";
import IniciarSesion from './IniciarSesion';
import RegistroUsuario from './RegistroUsuario';
import RegistroCorreo from './RegistroCorreo';
import TarjetaDeIngreso from './IniciarSesionEst';
import CrearSesionMayores from './IniciarSesionMayores';
import DropdownMenu from './PerfilAdulto.jsx';
import ListaDeLibros from './ListaDeLibros.jsx';
import LibroDetalles from './LibroDetalles.jsx';
import CargarLibros from './cargaLibros.jsx';
import { UserProvider } from './context/UserContext.jsx';
import MenuOpciones from './menuOpciones.jsx'
import ListadoAulas from "./ListadoAulas.jsx";
import Home from './Home.jsx';

import './App.css';
import CrearBiblioteca from './CrearBiblioteca.jsx';

function App() {


  return (
    <Router>
      <div className='contenedorPrincipal'>
        <Header />

        <UserProvider>
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/DropdownMenu" element={<DropdownMenu />} />
            <Route path="/Ingresar" element={<Ingresar />} />
            <Route path="/elecciongrado" element={<EleccionGrado />} />
            <Route path="/numero/:number/:color" element={<NumeroSeleccionado />} />
            <Route path="/iniciarsesion" element={<IniciarSesion />} />
            <Route path="/registrousuario/:role" element={<RegistroUsuario/>} />
            <Route path="/registrocorreo" element={<RegistroCorreo />} />
            <Route path="/tarjetadeingreso/:color" element={<TarjetaDeIngreso />} />
            <Route path="/crearsesionmayores/:number/:color/:role" element={<CrearSesionMayores />} />
            <Route path="/listadelibros" element={<ListaDeLibros/>} />
            <Route path="/cargarlibros" element={<CargarLibros/>} />
            <Route path="/libro/:id" element={<LibroDetalles />} />
            <Route path="/menuopciones" element={<MenuOpciones />} />
            <Route path="/CrearBiblioteca" element={<CrearBiblioteca />} />
            <Route path="/listadoaulas" element={<ListadoAulas />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
