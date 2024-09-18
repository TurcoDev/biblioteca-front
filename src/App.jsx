import Header from './Header.jsx';
import Ingresar from './Ingresar.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesion from './IniciarSesion.jsx';
import './App.css'
import SearchBar from './Buscador.jsx';
import LibraryButtons from './tresbotones.jsx';

function App(){
  return (
    <div className='contenedorPrincipal'>
       <Header />
       <LibraryButtons />
      <h1>Te damos la bienvenida!</h1>
      <Router>
      <Routes>
       {/* <Route path="/" element={<Ingresar />} /> 
        <Route path="/iniciarsesion" element={<IniciarSesion />} /> */}
         <Route path="/Tresopciones" element={<LibraryButtons />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App;
