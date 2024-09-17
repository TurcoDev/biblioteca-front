import React from 'react';
import './BotonIngresar.css';

export default function BotonIngresar({ texto, type = "submit", onClick, color }) {
  const estiloBoton = {
    backgroundColor: color || '#eb3e3e', // Usa el color pasado como prop o el color por defecto
  };

  return (
    <button
      className='botonIngresar'
      type={type}
      onClick={onClick}
      style={estiloBoton}
    >
      {texto}
    </button>
  );
}

