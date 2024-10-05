import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './cargaLibros.css';
import BotonIngresar from './BotonIngresar';

const CargarLibros = ({ addBook }) => {
    const [imageUrl, setImageUrl] = useState('');

    const [formData, setFormData] = useState({
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
        setFormData({ id: Date.now(), titulo: "", autor: "", isbn: "", año_publicacion: "", imagen: "", descripcion: "" }); // Limpiar formulario
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
        handleChange(event);
    };

    return (
        <div className="formulario-contenedor">
            <div className="formulario-contenido">
                <form onSubmit={handleSubmit} className="formulario">
                    <h2>Cargar Libros</h2>
                    <div>
                        <label htmlFor="titulo">Nombre del Libro:</label>
                        <input type="text" id="titulo" name="titulo" value={formData.titulo}
                            onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="autor">Autor:</label>
                        <input type="text" id="autor" name="autor" value={formData.autor}
                            onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="descripcion">Descripción:</label>
                        <input type="text" id="descripcion" name="descripcion" value={formData.descripcion}
                            onChange={handleChange}  required />
                    </div>

                    <div>
                        <label htmlFor="imageUrl">URL de la imagen del Libro:</label>
                        <input type="text" id="imageUrl" name="imagen" value={formData.imagen} onChange={handleImageUrlChange} required />
                    </div>

                    <BotonIngresar texto="Registrar" />
                </form>

                {imageUrl && (
                    <aside className="imagen-contenedor">
                        <img src={formData.imagen} alt="Vista previa del libro" className="imagen-libro" />
                    </aside>
                )}
            </div>
            <Link to="/listadelibros">
                <button>Ver Lista de Libros</button>
            </Link>
        </div>
    );
};

export default CargarLibros;
