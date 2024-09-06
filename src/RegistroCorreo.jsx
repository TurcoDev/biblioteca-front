// RegistroCorreo.jsx
import React from 'react';
import Formulario from './Formulario';

const RegistroCorreo = () => {
  return (
    <div >
      {/* Aquí podrías añadir un título específico u otro contenido si lo deseas */}
      <Formulario 
        tipo="correo" 
        textoBoton="Registrate" 
      />
    </div>
  );
};

export default RegistroCorreo;