import React from 'react';
import './Buscador.css'; // Importa tus estilos


function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar un libro..." />
        <button></button> {/* Botón con icono de búsqueda creado con CSS */}
      </div>
    </div>
  );
}

export default SearchBar;
