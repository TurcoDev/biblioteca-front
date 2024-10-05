import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initialBooks } from "./mocks/books";
import './LibroDetalles.css';

function LibroDetalles() {
  const { id } = useParams();

  // Inicializar el estado de libro
  const [libro, setLibro] = useState(null);

  // Se muestran los libros en consola
  console.log(initialBooks);

  // useEffect para simular la obtención de datos (como si fuera de una API)
  useEffect(() => {
    const libroEncontrado = initialBooks.find((libro) => libro.id === parseInt(id));
    setLibro(libroEncontrado); // Actualizar el estado con los datos del libro
  }, [id]); // El efecto se ejecutará cada vez que cambie el id

  // Si no se encuentra el libro, mostrar un mensaje
  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="detalle-container">
      <img src={libro.imagen} alt={libro.titulo} className="detalle-img" />
      <div className="detalle-info">
        <p className="detalle-author">Autor: {libro.autor}</p>
        <p className="detalle-isbn">ISBN: {libro.isbn}</p>
        <p className="detalle-year">Año de Publicación: {libro.año_publicacion}</p>
        <p className="detalle-description">{libro.descripcion}</p>
      </div>
    </div>
  );
}

export default LibroDetalles;