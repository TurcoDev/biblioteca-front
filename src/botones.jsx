import React, { useState } from 'react'
import  './BotonIngresar.css';

export default function Boton({ type, text, onClick }) {
    return (
      <button className='botonIngresar' type={type} onClick={onClick}>
        {text}
      </button>
    );
  }