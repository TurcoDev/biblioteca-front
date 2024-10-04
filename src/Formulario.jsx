import React from 'react';
import BotonIngresar from './BotonIngresar'; // Asegúrate de que la ruta sea correcta
import './Formulario.css'; // Importa el archivo CSS

const Formulario = ({ campos, textoBoton }) => {
  return (
    <div className="formulario-contenedor">
      <form className="formulario">
        <h2>¡Ingresá los datos!</h2> {/* Título común para ambos formularios */}

        {/* Generar dinámicamente los campos del formulario */}
        {campos.map((campo, index) => (
          <div key={index}>
            <label htmlFor={campo.id}>{campo.label}:</label>
            <input
              type={campo.type}
              id={campo.id}
              name={campo.name}
              placeholder={campo.placeholder || ''}
            />
          </div>
        ))}

        <BotonIngresar texto={textoBoton} /> {/* Incluir el botón con el texto proporcionado */}
      </form>
    </div>
  );
};

export default Formulario;
