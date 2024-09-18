import React, { useState } from 'react'

import './IniciarSesion.css'
import './BotonIngresar.jsx'
import BotonIngresar from './BotonIngresar.jsx'


export default function IniciarSesion() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);
  };

  return (
    <div className='iniciarsesion'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user"className="logo" ><path fill="#f33b3b" d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" class="color42c3cf svgShape"></path><circle cx="24" cy="16" r="12" fill="#f33b3b" class="color42c3cf svgShape"></circle></svg>            
      <h2>Iniciar Sesión </h2>
      <form onSubmit={manejarSubmit}>
      <label htmlFor='usuario'>Usuario:</label>
        <input
          type='text'
          id='usuario'
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label htmlFor='contraseña'>Contraseña:</label>
        <input
          type='password'
          id='contraseña'
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
         <BotonIngresar texto={textoBoton} type="submit"  /> 
      </form>
      <a href='#'>Olvidé mi contraseña</a>
    </div>
  );
}