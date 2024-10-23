import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './cargaLibros.css';
import BotonIngresar from './BotonIngresar';

const CargarLibros = () => {
    const [libraries, setLibraries] = useState([]); // Estado para almacenar las bibliotecas
    const [books, setBooks] = useState([]); // Estado para almacenar los libros después de la carga

    const [formData, setFormData] = useState({
        book_number: "",
        title: "",
        isbn: "",
        publication_year: "",
        copy_number: "",
        origin: "",
        classroom_library_id: "" // ID de la biblioteca
    });

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Obtener la lista de bibliotecas y libros al cargar el componente
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

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBook = { ...formData, id: Date.now() };

        try {
            const response = await fetch('http://localhost:3000/libro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBook),
            });

            if (response.ok) {
                // Volver a cargar la lista de libros tras haber agregado uno nuevo
                const updatedBooks = await fetch('http://localhost:3000/libro');
                const booksData = await updatedBooks.json();
                setBooks(booksData); // Actualiza la lista de libros
                console.log("Libro registrado exitosamente:", booksData);
                
                // Limpiar el formulario
                setFormData({
                    book_number: "", 
                    title: "", 
                    isbn: "", 
                    publication_year: "", 
                    copy_number: "", 
                    origin: "", 
                    classroom_library_id: "" 
                });
            } else {
                console.error("Error al registrar el libro:", response.statusText);
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };

    return (
        <div className="formulario-contenedor">
            <div className="formulario-contenido">
                <form onSubmit={handleSubmit} className="formulario">
                    <h2>Cargar Libros</h2>

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
                        <label htmlFor="book_number">Número del Libro:</label>
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
                        <label htmlFor="title">Título del Libro:</label>
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
                        <label htmlFor="publication_year">Año de Publicación:</label>
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
                        <label htmlFor="copy_number">Número de Copia:</label>
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
                        <input 
                            type="text" 
                            id="origin" 
                            name="origin" 
                            value={formData.origin}
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    
                    <BotonIngresar texto="Registrar" />
                </form>

            </div>
            <Link to="/listadelibros">
                <button className='botonListarLibros'>Ver Lista de Libros</button>
            </Link>
        </div>
    );
};

export default CargarLibros;
