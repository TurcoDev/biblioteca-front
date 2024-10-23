import React from 'react';
import { Link } from 'react-router-dom';
import './Libro.css';


function Libro({ libro }) {
    return (
      <div className="card">
        <Link to={`/libro/${libro.book_id}`} className="card-link">
          <div className="card-content">
            <h3 className="card-title">{libro.title}</h3>
            <p className="card-author">{libro.isbn}</p>
            <p className="card-author">{libro.publication_year}</p>
            <p className="card-author">{libro.copy_number}</p>
            <p className="card-author">{libro.origin}</p>
          </div>
        </Link>
      </div>
    );
  }

export default Libro;