import React, { useState, useEffect, useContext } from "react";
import MiAula from "./MiAula.jsx";
import "./Home.css";
import { UserContext } from './context/UserContext'; 
import userService from './services/userService.js';  //Servicios como el role

function Home() {
  const [mostrarAula, setMostrarAula] = useState(false);
  const [books, setBooks] = useState([]);
  const { user } = useContext(UserContext); // user logueado, se obtiene del contexto


  useEffect(() => {
    if (user && user.role_id) {
      // Setea el rol basado en el id_role del usuario
      userService.setSelectedRole(user.role_id);
    }
  }, [user]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://biblioteca-back-cpfs.onrender.com/libro");
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
        <button className="botonMiAula" onClick={toggleAula}>
          Mi biblioteca áulica
        </button>
        {mostrarAula && <MiAula />}
      </div>
    </div>
  );
}

export default Home;
