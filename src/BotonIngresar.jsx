import React from 'react';
import './BotonIngresar.css';

export default function BotonIngresar({ texto, type = "submit"  }) {
  return (
    <button className='botonIngresar'type={type}>
    {texto}
  </button>
);
}

