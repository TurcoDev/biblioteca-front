import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './LibroDetalles.css';

function LibroDetalles() {
  const { id } = useParams();

  // Inicializar el estado de libro
  const [libro, setLibro] = useState(null);

  // Simulación de datos (en lugar de una API)
  const libros = [
    { id: 1, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', isbn: 'Codigo1', año_publicacion: '1990', imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg', descripcion: 'Descripción del libro.' },
    { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', isbn: 'Codigo2', año_publicacion: '1990', imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/19/c7/19c70e689956601918101b09f0bb0b3c.jpg', descripcion: 'Descripción del libro.' },
    { id: 3, titulo: 'La Odisea', autor: 'Homero', isbn: 'Codigo3', año_publicacion: '1990', imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/c0/5a/c05ad53842227a1416e03310ee840934.jpg', descripcion: 'Descripción del libro.' },
    { id: 4, titulo: '1984', autor: 'George Orwell', isbn: 'Codigo4', año_publicacion: '1990', imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg', descripcion: 'Descripción del libro.' },
    { id: 5, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', isbn: 'Codigo5', año_publicacion: '1990', imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/68/0e/680e4d2b23ce77fc5520e984aeb2b68e.jpg', descripcion: 'Descripción del libro.' }
  ];

  // useEffect para simular la obtención de datos (como si fuera de una API)
  useEffect(() => {
    const libroEncontrado = libros.find((libro) => libro.id === parseInt(id));
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