
import React from 'react';
import BotonIngresar from './BotonIngresar'; // Asegúrate de que la ruta sea correcta
import './Formulario.css'; // Importa el archivo CSS

const Formulario = ({ tipo, textoBoton }) => {
  return (
    <div className="formulario-contenedor"> {/* Nuevo contenedor para aplicar estilos */}
     
      <form className="formulario">
        <h2>¡Creá tu cuenta!</h2> {/* Título común para ambos formularios */}

        <div>
        {tipo === 'usuario' ? (
          <>
            <div>
              <label htmlFor="usuario">Nombre de Usuario:</label>
              <input type="text" id="usuario" name="usuario" />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="correo">Correo Electrónico:</label>
              <input type="email" id="correo" name="correo" />
            </div>
          </>
        )}
        
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        
    
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" />
        </div>

        <BotonIngresar texto={textoBoton}  /> {/* Incluir el botón con el texto proporcionado */}
      </form>
      
    </div>
  );
};

export default Formulario