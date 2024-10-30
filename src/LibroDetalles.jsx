import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { initialBooks } from "./mocks/books";
import './LibroDetalles.css';

function LibroDetalles() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estado de libro y de edición
  const [libro, setLibro] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedLibro, setEditedLibro] = useState({});

  // Obtener libro específico por ID
  useEffect(() => {
    const libroEncontrado = initialBooks.find((libro) => libro.id === parseInt(id));
    if (libroEncontrado) {
      setLibro(libroEncontrado);
      setEditedLibro(libroEncontrado); // Inicializamos el libro editable
    }
  }, [id]);

  // Función para alternar el modo de edición
  const handleEditClick = () => setIsEditing(!isEditing);

  // Función para manejar el cambio en los campos de edición
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedLibro({ ...editedLibro, [name]: value });
  };

  // Función para guardar cambios
  const handleSaveClick = () => {
    setLibro(editedLibro); // Actualizar el libro con los cambios
    setIsEditing(false); // Salir del modo de edición
  };

  // Función para eliminar el libro y redirigir
  const handleDeleteClick = () => {
    // Aquí podrías añadir la lógica para eliminar el libro de tu fuente de datos
    alert('Libro eliminado');
    navigate('/'); // Redirige al usuario a la página principal
  };

  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="detalle-container">
      <img src={libro.imagen} alt={libro.titulo} className="detalle-img" />
      <div className="detalle-info">
        {isEditing ? (
          <>
            <input
              type="text"
              name="autor"
              value={editedLibro.autor}
              onChange={handleInputChange}
              className="detalle-author"
            />
            <input
              type="text"
              name="isbn"
              value={editedLibro.isbn}
              onChange={handleInputChange}
              className="detalle-isbn"
            />
            <input
              type="text"
              name="año_publicacion"
              value={editedLibro.año_publicacion}
              onChange={handleInputChange}
              className="detalle-year"
            />
            <textarea
              name="descripcion"
              value={editedLibro.descripcion}
              onChange={handleInputChange}
              className="detalle-description"
            />
            <button onClick={handleSaveClick} className="detalle-button">Guardar</button>
          </>
        ) : (
          <>
            <p className="detalle-author">Autor: {libro.autor}</p>
            <p className="detalle-isbn">ISBN: {libro.isbn}</p>
            <p className="detalle-year">Año de Publicación: {libro.año_publicacion}</p>
            <p className="detalle-description">{libro.descripcion}</p>
            <button onClick={handleEditClick} className="detalle-button">Modificar</button>
            <button onClick={handleDeleteClick} className="detalle-button delete-button">Eliminar</button>
          </>
        )}
      </div>
    </div>
  );
}

export default LibroDetalles;
