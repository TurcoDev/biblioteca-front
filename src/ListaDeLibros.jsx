import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from './Libro';
import './ListaDeLibros.css';

function ListaDeLibros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/libro")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error al cargar los libros:", error));
  }, []);

  return (
    <div className="card-container">
      <Link to="/cargarlibros">
        <button>Regresar a la carga</button>
      </Link>
      <div className="card-list">
        {books.map((libro) => (
          <Libro key={libro.book_id} libro={libro} />
        ))}
      </div>
    </div>
  );
}

export default ListaDeLibros;
