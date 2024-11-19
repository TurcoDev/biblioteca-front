import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userService from './services/userService.js';  //Servicios como el role
import './LibroDetalles.css';

function LibroDetalles() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [libro, setLibro] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedLibro, setEditedLibro] = useState({});
  const [newImage, setNewImage] = useState(null); // Para almacenar la nueva imagen
  const [mostrarModal, setMostrarModal] = useState(false); // Estado del modal
  const [mensaje, setMensaje] = useState(''); // Mensaje del modal
  const role = userService.getSelectedRole(); // Obtener el rol actual
  
  useEffect(() => {
    fetch(`http://localhost:3000/libro/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLibro(data);
        // Se asegura de que el valor de 'origin' esté definido correctamente
        setEditedLibro({
          ...data,
          origin: data.origin || 'compra',  // Asignar 'compra' si 'origin' está vacío
        });
      })
      .catch((error) => console.error("Error al cargar el libro:", error));
  }, [id]);

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedLibro({ ...editedLibro, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]); // Almacena el archivo de imagen
  };

  const handleSaveClick = () => {
    const formData = new FormData();
    formData.append('classroom_library_id', editedLibro.classroom_library_id);
    formData.append('book_number', editedLibro.book_number);
    formData.append('title', editedLibro.title);
    formData.append('isbn', editedLibro.isbn);
    formData.append('publication_year', editedLibro.publication_year);
    formData.append('copy_number', editedLibro.copy_number); // Se agrega el número de copia
    formData.append('origin', editedLibro.origin); // Se agrega el origen

    // Si hay una nueva imagen, agrégala al formData
    if (newImage) {
      formData.append('portada', newImage);
    }

    fetch(`http://localhost:3000/libro/${id}`, {
      method: 'PUT',
      body: formData // Enviar los datos como formData
    })
    .then(response => {
      if (response.ok) {
        setMensaje('Libro actualizado correctamente');
        setMostrarModal(true); // Mostrar el modal
        setLibro(editedLibro); // Actualizar el estado local
        setIsEditing(false); // Salir del modo de edición

        setTimeout(() => {
          setMostrarModal(false); // Cerrar el modal después de 2 segundos
          navigate(`/libro/${id}`);
        }, 2000);
      } else {
        console.error("Error al actualizar el libro");
        setMensaje('Error al actualizar el libro');
        setMostrarModal(true); // Mostrar el modal en caso de error
      }
    })
    .catch(error => {
      console.error("Error al enviar la solicitud PUT:", error);
      setMensaje('Error al actualizar el libro');
      setMostrarModal(true); // Mostrar el modal en caso de error
    });
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/libro/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert("Libro eliminado");
        navigate('/listadelibros'); // Redirige a la lista de libros
      } else {
        console.error("Error al eliminar el libro");
      }
    })
    .catch(error => console.error("Error al enviar la solicitud DELETE:", error));
  };

  const handleBackClick = () => {
    navigate('/listadelibros'); // Asegúrate de que esta ruta corresponde a tu componente ListaDeLibros
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
            <label className="detalle-label">
              Título:
              <input
                type="text"
                name="title"
                value={editedLibro.title}
                onChange={handleInputChange}
                className="detalle-input"
              />
            </label>

            <label className="detalle-label">
              ISBN:
              <input
                type="text"
                name="isbn"
                value={editedLibro.isbn}
                onChange={handleInputChange}
                className="detalle-input"
              />
            </label>

            <label className="detalle-label">
              Año de Publicación:
              <input
                type="text"
                name="publication_year"
                value={editedLibro.publication_year}
                onChange={handleInputChange}
                className="detalle-input"
              />
            </label>

            <label className="detalle-label">
              Número de Libro:
              <input
                type="text"
                name="book_number"
                value={editedLibro.book_number}
                onChange={handleInputChange}
                className="detalle-input"
              />
            </label>

            <label className="detalle-label">
              Número de Copia:
              <input
                type="text"
                name="copy_number"
                value={editedLibro.copy_number}
                onChange={handleInputChange}
                className="detalle-input"
              />
            </label>

            <label className="detalle-label">
              Origen:
              <select
                name="origin"
                value={editedLibro.origin} // Valor actualizado de 'origin'
                onChange={handleInputChange}
                className="detalle-input"
              >
                <option value="compra">Compra</option>
                <option value="donación">Donación</option>
              </select>
            </label>

            <label className="detalle-label">
              Portada:
              <input
                type="file"
                name="portada"
                onChange={handleImageChange}
                className="detalle-input"
              />
            </label>

            <div className='containerModificarBotones'>
              <button onClick={handleSaveClick} className="detalle-button modify-button">Guardar</button>
              <button onClick={handleBackClick} className="detalle-button modify-button">Cancelar</button>
            </div>
          </>
        ) : (
          <>
            <div className='card1'>
              <p className="detalle-title"><strong>Título:</strong> {libro.title}</p>
              <p className="detalle-isbn"><strong>ISBN:</strong> {libro.isbn}</p>
              <p className="detalle-year"><strong>Año de Publicación:</strong> {libro.publication_year}</p>
              <p className="detalle-book-number"><strong>Número de Libro:</strong> {libro.book_number}</p>
              <p className="detalle-copy-number"><strong>Número de Copia:</strong> {libro.copy_number}</p>
              <p className="detalle-origin"><strong>Origen:</strong> {libro.origin}</p>
              {role !== 'estudiante' &&  (<> 
                <button onClick={handleEditClick} className="detalle-button modify-button">Modificar</button>
                <button onClick={handleDeleteClick} className="detalle-button delete-button">Eliminar</button>
              </>)}
              <button onClick={handleBackClick} className="detalle-button back-button">Volver al Listado</button>
              
            </div>
          </>
        )}
      </div>

      {mostrarModal && (
        <div className={`modal ${mostrarModal ? 'show' : ''}`}>
          <div className="modal__content">
            <h1>{mensaje}</h1>
            <div className="modal__footer">Made By Alumnos Tecda</div>
            <button onClick={() => setMostrarModal(false)} className="modal__close">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LibroDetalles;
