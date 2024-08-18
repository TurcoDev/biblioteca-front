import React from 'react';
import './BotonIngresar.css';

export default function BotonIngresar({ type }) {
  return (
    <button className='botonIngresar' type={type}>
      Ingresar
    </button>
  );
}
