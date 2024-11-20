import React from 'react';
import { Link } from "react-router-dom";
import './MenuOpciones.css'; // Asegúrate de que este archivo tenga los estilos adecuados
import BotonIngresar from './BotonIngresar.jsx';
//import './Biblioteca.jsx'; 
//import './Biblioteca.css';


function LibraryButtons({ libraryData }) {
  return (
    <div className="Menucontainer">
      <div className="button-container">
        <div className="library-button">
        <p>Nombre de la biblioteca: </p>
        <h3>{libraryData.name}</h3>
        </div>
        <div className="library-button">
          <BotonIngresar texto="MIS PRESTAMOS" type="submit" />
        </div>
        <div className="library-button">
          <Link to="/listadelibros" style={{ textDecoration: 'none' }}>
              <BotonIngresar texto="VER LIBROS" type="submit" />
          </Link>
        </div>
        <div className="library-button">
          <BotonIngresar texto="VER RECOMENDACIONES" type="submit" />
        </div>
      </div>
    </div>
  );
}

export default LibraryButtons;
