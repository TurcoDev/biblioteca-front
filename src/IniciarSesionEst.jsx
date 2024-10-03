import React from 'react';
import { useParams } from 'react-router-dom'; // Importar para capturar los parámetros de la URL
import './IniciarSesionEst.css';
import BotonIngresar from './BotonIngresar.jsx';

export default function TarjetaDeIngreso() {
  const { color } = useParams(); // Obtener el color de la URL

  // Decodificar el color si tiene caracteres especiales
  const decodedColor = decodeURIComponent(color);

  return (
    <div className='iniciarsesion'>
      {/* Cambiar el color del ícono de usuario */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user" className="logo" style={{ fill: decodedColor }}>
        <path d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" className="color42c3cf svgShape"></path>
        <circle cx="24" cy="16" r="12" className="color42c3cf svgShape"></circle>
      </svg>
      <h2>INICIAR SESIÓN</h2>

      <form>
        <label htmlFor='codigo'>INGRESA EL CÓDIGO: ARBOL834</label>
        <input type="text" placeholder="Ingrese su código" className='input' />

        {/* Cambiar el color del botón y pasarlo como prop */}
        <div className="botonIngresar">
          <BotonIngresar texto="INGRESAR" type="submit" color={decodedColor} /> {/* Asegúrate de pasar el color aquí */}
        </div>

        <p>¿NO TENÉS EL CÓDIGO? PEDÍSELO A TU DOCENTE</p>
      </form>
    </div>
  );
}
