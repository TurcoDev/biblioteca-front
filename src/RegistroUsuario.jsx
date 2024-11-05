// RegistroUsuario.jsx
import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Formulario from './Formulario';
import Bienvenida from './Bienvenida.jsx';

const RegistroUsuario = () => {
  const { role } = useParams(); // Obtener el rol del parámetro de la URL
  const navigate = useNavigate();

  // Función de redirección a la pantalla de inicio de sesión
  const onSuccessfulRegister = () => {
    navigate("/"); // Ruta de inicio de sesión en tu aplicación
  };

  return (
    <div>
      <Formulario 
        tipo="usuario" 
        textoBoton="Crear Usuario" 
        role={role}
        onSuccessfulRegister={onSuccessfulRegister} // Pasa la función de redirección
      />
    </div>
  );
};

export default RegistroUsuario;
