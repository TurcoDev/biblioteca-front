import React, { useState, useEffect } from "react";
import MiAula from "./MiAula.jsx";
import BuscarLibro from "./BuscarLibro";
import "./Home.css";

function Home() {
  const [mostrarAula, setMostrarAula] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/libro");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error al obtener los libros:", error);
      }
    };

    fetchBooks();
  }, []);

  const toggleAula = () => {
    setMostrarAula(!mostrarAula);
  };

  return (
    <div className="home-container">
      <BuscarLibro books={books} />

      <div>
        <button className="sidebar-button" onClick={toggleAula}>
          Mi biblioteca áulica
        </button>
        {mostrarAula && <MiAula />}
      </div>
    </div>
  );
}

export default Home;
