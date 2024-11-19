import React, { useState, useEffect } from "react";
import MiAula from "./MiAula.jsx";
import "./Home.css";

function Home() {
  const [mostrarAula, setMostrarAula] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user && user.role_id) {
      // Setea el rol basado en el id_role del usuario
      userService.setSelectedRole(user.role_id);
    }
  }, [user]);

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
