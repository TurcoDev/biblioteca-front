import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Circulo from './Circulo'; // Asegúrate de que el nombre del archivo sea correcto
import BotonIngresar from './BotonIngresar'; // Importa el componente BotonIngresar
import './NumeroSeleccionado.css'; // Importa el archivo CSS específico para NumeroSeleccionado

const NumeroSeleccionado = () => {
  const { number, color } = useParams(); // Obtener número y color de los parámetros de la URL
  const navigate = useNavigate();

  // Decodificar color si contiene caracteres especiales
  const decodedColor = decodeURIComponent(color);

  const handleButtonClick = () => {
     // Convertir el parámetro de número a un entero
    const num = parseInt(number, 10);
     // Redirigir a la ruta correspondiente según el número
    if (num === 1 || num === 2 || num === 3) {
    navigate('/tarjetadeingreso');
  } else if (num === 4 || num === 5 || num === 6) {
    navigate('/crearsesionmayores'); // Redirige a CrearSesionMayores
  }
};


  return (
    <div className="numero-seleccionado-container">
      <Circulo number={number} color={decodedColor} /> {/* Mostrar el círculo */}
      <BotonIngresar 
        texto="INICIAR SESIÓN CON UN CÓDIGO" 
        type="button" 
        onClick={handleButtonClick} // Pasa la función de clic como prop
      />
      </div>
  );
};

export default NumeroSeleccionado;



