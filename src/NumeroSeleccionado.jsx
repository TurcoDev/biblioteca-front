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

  return (
    <div className="numero-seleccionado-container">
      <Circulo number={number} color={decodedColor} /> {/* Mostrar el círculo */}
      <BotonIngresar 
        texto="INICIAR SESION CON UN CODIGO" 
        type="button" 
        onClick={() => navigate(-1)} // Pasa la función de clic como prop
      />
    </div>
  );
};

export default NumeroSeleccionado;



