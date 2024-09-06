import React from 'react';
import './BotonIngresar.css';

export default function BotonIngresar({ texto, type = "submit" , onClick }) {
  return (
    <button className='botonIngresar' type={type} onClick={onClick}>
    {texto}
  </button>
);
}

