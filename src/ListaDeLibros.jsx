import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from './Libro';
import './ListaDeLibros.css';
import BotonIngresar from "./BotonIngresar";

function ListaDeLibros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/libro")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error al cargar los libros:", error));
  }, []);

  return (
    <div className="main-content">
      <div className="card-container">
        <div className="card-list">
          {books.map((libro) => (
            <Libro key={libro.book_id} libro={libro} />
          ))}
        </div>

        <div className="volver-boton">
          <Link to="/menuopciones" style={{ textDecoration: 'none' }}>
            <BotonIngresar texto="Volver al menú" type="submit" color={'grey'} />
          </Link>
        </div>   
      </div>
    </div>
  );
}

export default ListaDeLibros;
