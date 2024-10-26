import React from 'react';
import { Link } from 'react-router-dom';
import './Libro.css';

function Libro({ libro }) {
    return (
      <div className="card">
        <Link to={`/libro/${libro.book_id}`} className="card-link">
          <div className="card-content">
            {/* Verifica si la portada está presente y es una URL válida */}
            {libro.portada && (
              <img 
                src={libro.portada} 
                alt={`Portada de ${libro.title}`} 
                className="libro-portada" 
              />
            )}
            <h3 className="card-title">{libro.title}</h3>
            <p className="card-author">ISBN: {libro.isbn}</p>
            <p className="card-author">Año de Publicación: {libro.publication_year}</p>
            <p className="card-author">Número de Copia: {libro.copy_number}</p>
            <p className="card-author">Origen: {libro.origin}</p>
          </div>
        </Link>
      </div>
    );
}

export default Libro;
