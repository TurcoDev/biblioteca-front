import { useState, useEffect } from "react";
import Libro from './Libro'; // Importa el componente Libro
import { initialBooks } from "./mocks/books";
import './ListaDeLibros.css';

function ListaDeLibros() {

  // Ejemplo de como leer datos de un json con fetch
  // El inconveniente es que no puede cargarse informacion solo se los dejo de ejemplo
  /*
    useEffect(() => {
      fetch("/books.json")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error("Error al cargar los libros:", error));
    }, []);
  */


  return (
    <div className="card-container">
      <div className="card-list">
        {books.map((libro) => (
          <Libro key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
}


export default ListaDeLibros;