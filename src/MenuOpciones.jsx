import React from 'react';
import { Link } from "react-router-dom";
import './MenuOpciones.css'; // Asegúrate de que este archivo tenga los estilos adecuados
import BotonIngresar from './BotonIngresar.jsx';
//import './Biblioteca.jsx'; 
//import './Biblioteca.css';


function LibraryButtons() {
  return (
    <div className="Menucontainer">
      <div className="button-container">
        <div className="library-button">
          <h3>MIS PRÉSTAMOS</h3>
          <BotonIngresar texto="VER PRESTAMOS" type="submit" />
        </div>
        <div className="library-button">
          <h3>VER TODOS LOS LIBROS</h3>
          <Link to="/listadelibros" style={{ textDecoration: 'none' }}>
              <BotonIngresar texto="VER LIBROS" type="submit" />
          </Link>
        </div>
        <div className="library-button">
          <h3>MIS RECOMENDACIONES</h3>
          <BotonIngresar texto="VER RECOMENDACIONES" type="submit" />
        </div>
      </div>
    </div>
  );
}

export default LibraryButtons;
