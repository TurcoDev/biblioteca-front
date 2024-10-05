import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { initialBooks } from "./mocks/books";

function BookForm({ addBook }) {
  const [bookArray, setBookArray] = useState(initialBooks); // Estado que guarda el array de libros
  const [formData, setFormData] = useState({
    id: bookArray.length + 1,
    titulo: "",
    autor: "",
    isbn: "",
    año_publicacion: "",
    imagen: "",
    descripcion: ""
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear el nuevo libro con un ID único
    const newBook = { ...formData, id: Date.now() };
    addBook(newBook); // Añadir el libro al array
    // Limpiar el formulario
    setFormData({ id: bookArray.length + 2, titulo: "", autor: "", isbn: "", año_publicacion: "", imagen: "", descripcion: "" }); // Limpiar formulario
  };

  return (
    <div>
      <h2>Añadir Libro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={formData.autor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="año_publicacion"
          placeholder="Año de Publicación"
          value={formData.año_publicacion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagen"
          placeholder="URL de la Imagen"
          value={formData.imagen}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Añadir Libro</button>
      </form>

      <Link to="/listadelibros">
        <button>Ver Lista de Libros</button>
      </Link>
    </div>
  );
}

export default BookForm;