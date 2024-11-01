import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './IniciarSesionEst.css';
import BotonIngresar from './BotonIngresar.jsx';

export default function TarjetaDeIngreso() {
  const { color } = useParams(); // Get color from the URL
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Decode the color if it has special characters
  const decodedColor = decodeURIComponent(color);

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/menuopciones'); // Navigate to MenuOpciones page
  };

  return (
    <div className='iniciarsesion'>
      {/* Change the user icon color */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user" className="logo" style={{ fill: decodedColor }}>
        <path d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" className="color42c3cf svgShape"></path>
        <circle cx="24" cy="16" r="12" className="color42c3cf svgShape"></circle>
      </svg>
      <h2>INICIAR SESIÓN</h2>

      <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form from submitting */}
        <label htmlFor='codigo'>INGRESA EL CÓDIGO: ARBOL834</label>
        <input type="text" placeholder="Ingrese su código" className='input' />

        {/* Pass color to the button and handle the click event */}
        <div className="botonIngresar">
          <BotonIngresar texto="INGRESAR" type="button" color={decodedColor} onClick={handleButtonClick} /> {/* Ensure button type is "button" */}
        </div>

        <p>¿NO TENÉS EL CÓDIGO? PEDÍSELO A TU DOCENTE</p>
      </form>
    </div>
  );
}
