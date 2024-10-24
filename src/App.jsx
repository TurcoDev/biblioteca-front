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
import BookForm from './BookForm.jsx';
import { initialBooks } from "./mocks/books";

import './App.css';

function App() {

  // Función para añadir un libro al array
  // Esta funcion la pasamos por parametro callback y la ejecutamos en la ruta de carga
  const addBook = (newBook) => {
    setBookArray([...bookArray, newBook]);
  };

  return (
    <Router>
      <div className='contenedorPrincipal'>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/DropdownMenu" element={<DropdownMenu />} />
          <Route path="/Ingresar" element={<Ingresar />} />
          <Route path="/elecciongrado" element={<EleccionGrado />} />
          <Route path="/numero/:number/:color" element={<NumeroSeleccionado />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/registrousuario" element={<RegistroUsuario />} />
          <Route path="/registrocorreo" element={<RegistroCorreo />} />
          <Route path="/tarjetadeingreso/:color" element={<TarjetaDeIngreso />} />
          <Route path="/crearsesionmayores/:number/:color" element={<CrearSesionMayores />} />
          {/* Se le pasa por props la funcion para agregar un libro */}
          <Route path="/cargarlibro/" element={<BookForm addBook={addBook} />} />
          {/* Se le pasa por props el array de libros */}
          <Route path="/listadelibros" element={<ListaDeLibros/>} />
          <Route path="/libro/:id" element={<LibroDetalles />} />
          {/* Se le pasa por props la funcion para agregar un libro */}
          <Route path="/cargarlibros" element={<CargarLibros addBook={addBook} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
