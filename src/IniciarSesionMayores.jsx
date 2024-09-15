import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './IniciarSesion.css';
import BotonIngresar from './BotonIngresar.jsx'; // Asegúrate de que la importación es correcta

export default function CrearSesionMayores() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();
  const { color } = useParams(); // Obtener el color del parámetro de la URL

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);
  };

  const irARegistro = () => {
    navigate('/registrousuario');
  };

  // Decodificar color si contiene caracteres especiales
  const decodedColor = decodeURIComponent(color);

  return (
    <div className='formulario-contenedor' style={{ width: '50%', maxWidth: '400px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user" className="logo">
        <path fill={decodedColor} d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" className="color42c3cf svgShape"></path>
        <circle cx="24" cy="16" r="12" fill={decodedColor} className="color42c3cf svgShape"></circle>
      </svg>
      <h2>Iniciar Sesión</h2>

      <form className="formulario" onSubmit={manejarSubmit}>
        <label htmlFor='usuario'>Usuario:</label>
        <input
          type='text'
          id='usuario'
          value={usuario}
          placeholder="Ingrese usuario"
          onChange={(e) => setUsuario(e.target.value)}
        />
        
        <label htmlFor='contraseña'>Contraseña:</label>
        <input
          type='password'
          id='contraseña'
          value={contraseña}
          placeholder="Ingrese contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />

        <div className="contenedorBoton">
          <BotonIngresar type="submit" texto="Ingresar" color={decodedColor} />
        </div>
      </form>

      <a href='#'>Olvidé mi contraseña</a>

      <a href='#' onClick={irARegistro}>Si no tenés cuenta. ¡Registrate!</a>
    </div>
  );
}
