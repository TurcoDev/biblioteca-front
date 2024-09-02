// RegistroUsuario.jsx
import React from 'react';
import Formulario from './Formulario';

const RegistroUsuario = () => {
  return (
    <div >
      {/* Aquí podrías añadir un título específico u otro contenido si lo deseas */}
      <Formulario 
        tipo="usuario" 
        textoBoton="Creá Usuario" 
      />
    </div>
  );
};

export default RegistroUsuario;
