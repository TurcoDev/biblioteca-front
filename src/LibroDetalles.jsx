import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LibroDetalles.css';

function LibroDetalles() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [libro, setLibro] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedLibro, setEditedLibro] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/libro/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLibro(data);
        setEditedLibro(data);
      })
      .catch((error) => console.error("Error al cargar el libro:", error));
  }, [id]);

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedLibro({ ...editedLibro, [name]: value });
  };

  const handleSaveClick = () => {
    fetch(`http://localhost:3000/libro/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedLibro)
    })
    .then(response => {
      if (response.ok) {
        setLibro(editedLibro); // Actualizar el estado local
        setIsEditing(false); // Salir del modo de edición
        alert("Libro actualizado correctamente");
      } else {
        console.error("Error al actualizar el libro");
      }
    })
    .catch(error => console.error("Error al enviar la solicitud PUT:", error));
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/libro/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert("Libro eliminado");
        navigate('/'); // Redirige a la página principal
      } else {
        console.error("Error al eliminar el libro");
      }
    })
    .catch(error => console.error("Error al enviar la solicitud DELETE:", error));
  };

  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="detalle-container">
      <img src={libro.portada} alt={libro.title} className="detalle-img imagen-libro" />
      <div className="detalle-info">
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={editedLibro.title}
              onChange={handleInputChange}
              className="detalle-title"
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
              name="publication_year"
              value={editedLibro.publication_year}
              onChange={handleInputChange}
              className="detalle-year"
            />
            <textarea
              name="description"
              value={editedLibro.description}
              onChange={handleInputChange}
              className="detalle-description"
            />
            <button onClick={handleSaveClick} className="detalle-button">Guardar</button>
          </>
        ) : (
          <>
           <div className='card1'>
            <p className="detalle-title"><strong>Título:</strong> {libro.title}</p>
            <p className="detalle-isbn"><strong>ISBN:</strong> {libro.isbn}</p>
            <p className="detalle-year"><strong>Año de Publicación:</strong> {libro.publication_year}</p>
            <p className="detalle-description">{libro.description}</p>
            <button onClick={handleEditClick} className="detalle-button modify-button">Modificar</button>
            <button onClick={handleDeleteClick} className="detalle-button delete-button">Eliminar</button>
           </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LibroDetalles;
