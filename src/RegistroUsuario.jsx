// RegistroUsuario.jsx
import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import Formulario from './Formulario';

const RegistroUsuario = () => {
  const {role} = useParams(); // se obtiene el rol del parámetro de la URL

  /* useEffect(() => {
    console.log('role en RegistroUsuario', role);
  }, [role]); */
  return (
    <div >
      {/* Aquí podrías añadir un título específico u otro contenido si lo deseas */}
      <Formulario 
        tipo="usuario" 
        textoBoton="Creá Usuario" 
        role= {role}
      />
    </div>
  );
};

export default RegistroUsuario;
