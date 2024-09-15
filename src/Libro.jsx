import React from 'react';
import { Link } from 'react-router-dom';
import './Libro.css';


function Libro({ libro }) {
    return (
      <div className="card">
        <Link to={`/libro/${libro.id}`} className="card-link">
          <img src={libro.imagen} alt={libro.titulo} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{libro.titulo}</h3>
            <p className="card-author">{libro.autor}</p>
          </div>
        </Link>
      </div>
    );
  }

export default Libro;