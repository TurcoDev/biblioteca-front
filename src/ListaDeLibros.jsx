import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from './Libro';
import './ListaDeLibros.css';
import BotonIngresar from "./BotonIngresar";
import BuscarLibro from "./BuscarLibro.jsx";

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
        <BuscarLibro books={books} />
        <div className="card-list">
          {books.map((libro) => (
            <Libro key={libro.book_id} libro={libro} />
          ))}
        </div>

        <div className="volver-boton">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <BotonIngresar texto="Volver al menú" type="submit" style="background-color: rgb (235,62,62)" />
          </Link>
          <Link to="/cargarlibros" style={{ textDecoration: 'none' }}>
            <BotonIngresar texto="Cargar libros" type="submit" style="background-color: rgb (235,62,62)" />
          </Link>
        </div>   
      </div>
    </div>
  );
}

export default ListaDeLibros;
