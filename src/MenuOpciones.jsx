import React from 'react';
import './MenuOpciones.css'; // Asegúrate de que este archivo tenga los estilos adecuados
import BotonIngresar from './BotonIngresar.jsx';
//import './Biblioteca.jsx'; 
//import './Biblioteca.css';


function LibraryButtons() {
  return (
    <div className="library-container">
      <div className="button-container">
        <div className="library-button">
          <h3>Mis Préstamos</h3>
          <BotonIngresar texto="Ver Prestamos" type="submit" />
        </div>
        <div className="library-button">
          <h3>Ver Todos los Libros</h3>
          <BotonIngresar texto="Ver Libros" type="submit" />
        </div>
        <div className="library-button">
          <h3>Mis Recomendaciones</h3>
          <BotonIngresar texto="Ver Recomendaciones" type="submit" />
        </div>
      </div>
    </div>
  );
}

export default LibraryButtons;
