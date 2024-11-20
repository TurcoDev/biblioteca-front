// BuscarLibro.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BuscarLibro = ({ books }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(books); // Inicialmente mostrar todos los libros
  }, [books]);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);

    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(text) ||
        book.isbn.toLowerCase().includes(text)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar un libro"
          value={searchText}
          onChange={handleSearch}
        />
        <button className="search-icon">&#128269;</button>
      </div>
      
      {searchText && (
        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Link
                to={`/libro/${book.book_id}`}
                key={book.book_number}
                className="book-item"
              >
                <h3>{book.title}</h3>
                <p>ISBN: {book.isbn}</p>
                <p>Año: {book.publication_year}</p>
              </Link>
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BuscarLibro;
