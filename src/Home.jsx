import React, { useState, useEffect } from 'react';
import MiAula from './MiAula.jsx'; 
import './Home.css';

function Home() {
  const [mostrarAula, setMostrarAula] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Obtener la lista de libros al cargar el componente
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/libro');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
    };

    fetchBooks();
  }, []);

  // Manejar cambios en el buscador
  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);

    // Filtrar libros basados en el texto ingresado
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(text) ||
      book.isbn.toLowerCase().includes(text)
    );
    setFilteredBooks(filtered);
  };

  const toggleAula = () => {
    setMostrarAula(!mostrarAula);
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar un libro" 
          value={searchText}
          onChange={handleSearch}
        />
        <button className="search-icon">&#128269;</button> {/* icono de lupa */}
      </div>
      
      <div>
        <button className="sidebar-button" onClick={toggleAula}>Mi biblioteca áulica</button>
        {mostrarAula && <MiAula />}
      </div>

      {/* Mostrar resultados solo si hay texto en el buscador */}
      {searchText && (
        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.book_number} className="book-item">
                <h3>{book.title}</h3>
                <p>ISBN: {book.isbn}</p>
                <p>Año: {book.publication_year}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
