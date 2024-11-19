import React, { useState, useEffect, useContext } from "react";
import MiAula from "./MiAula.jsx";
import BuscarLibro from "./BuscarLibro.jsx";
import { UserContext } from './context/UserContext'; 
import userService from './services/userService.js';  //Servicios como el role
import "./Home.css";

function HomeEst() {
  const [mostrarAula, setMostrarAula] = useState(false);
  const [books, setBooks] = useState([]);
  const { user, setUser } = useContext(UserContext); // user logueado, se obtiene del contexto

  useEffect(() => {
    if (user && user.id_role) {
      // Setea el rol basado en el id_role del usuario
      userService.setSelectedRole(user.id_role);
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
      <BuscarLibro books={books} />
      <button className="sidebar-button" onClick={toggleAula}>
          Mi biblioteca áulica
      </button>
        {mostrarAula && <MiAula />}
       
      
    </div>
  );
}

export default HomeEst;
