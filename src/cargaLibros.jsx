import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './cargaLibros.css';
import BotonIngresar from './BotonIngresar';

const CargarLibros = () => {
    const [libraries, setLibraries] = useState([]);
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState(""); // Estado para mensajes (éxito o error)
    const [messageType, setMessageType] = useState(""); // Para definir si es éxito o error

    const [formData, setFormData] = useState({
        book_number: "",
        title: "",
        isbn: "",
        publication_year: "",
        copy_number: "",
        origin: "",
        classroom_library_id: "",
        portada: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    useEffect(() => {
        const fetchLibraries = async () => {
            try {
                const response = await fetch('http://localhost:3000/biblioteca');
                const data = await response.json();
                setLibraries(data); 
            } catch (error) {
                console.error('Error al obtener las bibliotecas:', error);
            }
        };

        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:3000/libro');
                const data = await response.json();
                setBooks(data); 
            } catch (error) {
                console.error('Error al obtener los libros:', error);
            }
        };

        fetchLibraries();
        fetchBooks(); 
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBook = new FormData();
        for (const key in formData) {
            newBook.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:3000/libro', {
                method: 'POST',
                body: newBook,
            });

            if (response.ok) {
                const updatedBooks = await fetch('http://localhost:3000/libro');
                const booksData = await updatedBooks.json();
                setBooks(booksData);

                setMessageType("success");
                setMessage("Libro registrado exitosamente.");
                setTimeout(() => setMessage(""), 3000); // Borrar el mensaje después de 3 segundos

                setFormData({
                    book_number: "",
                    title: "",
                    isbn: "",
                    publication_year: "",
                    copy_number: "",
                    origin: "",
                    classroom_library_id: "",
                    portada: null
                });
            } else {
                setMessageType("error");
                setMessage("Error al registrar el libro.");
                setTimeout(() => setMessage(""), 3000); // Borrar el mensaje después de 3 segundos
            }
        } catch (error) {
            setMessageType("error");
            setMessage("Error de conexión con el servidor.");
            setTimeout(() => setMessage(""), 3000); // Borrar el mensaje después de 3 segundos
        }
    };

    return (
        <div className="formulario-contenedor">
            <div className="formulario-contenido">
                {/* Popup de mensaje de éxito o error */}
                {message && (
                    <div className={`alerta ${messageType}`}>
                        <p>{message}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="formulario">
                    <h2>Cargar libros</h2>

                    <div>
                        <label htmlFor="classroom_library_id">Biblioteca:</label>
                        <select className='selectBiblioteca'
                            id="classroom_library_id" 
                            name="classroom_library_id" 
                            value={formData.classroom_library_id} 
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione una biblioteca</option>
                            {libraries.map((library) => (
                                <option key={library.classroom_library_id} value={library.classroom_library_id}>
                                    {library.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="book_number">Número de libro:</label>
                        <input 
                            type="number" 
                            id="book_number" 
                            name="book_number" 
                            value={formData.book_number}
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="title">Título del libro:</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            value={formData.title}
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="isbn">ISBN:</label>
                        <input 
                            type="text" 
                            id="isbn" 
                            name="isbn" 
                            value={formData.isbn}
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="publication_year">Año de publicación:</label>
                        <input 
                            type="number" 
                            id="publication_year" 
                            name="publication_year" 
                            value={formData.publication_year}
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="copy_number">Número de copia:</label>
                        <input 
                            type="number" 
                            id="copy_number" 
                            name="copy_number" 
                            value={formData.copy_number}
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="origin">Origen (Compra/Donación):</label>
                        <select className='selectOrigen'
                            id="origin" 
                            name="origin" 
                            value={formData.origin} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="compra">Compra</option>
                            <option value="donación">Donación</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="portada">Portada:</label>
                        <input 
                            type="file" 
                            id="portada" 
                            name="portada" 
                            accept="image/*"
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <BotonIngresar texto="Registrar" />
                </form>
            </div>
            <Link to="/listadelibros">
                <button className="boton-estandar">Ver lista de libros</button>
            </Link>
        </div>
    );
};

export default CargarLibros;
