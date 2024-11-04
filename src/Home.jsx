import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import MiAula from './MiAula.jsx'; 


function Home() {
  const [mostrarAula, setMostrarAula] = useState(false);

  const toggleAula = () => {
    setMostrarAula(!mostrarAula);
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar un libro en la biblioteca..." />
        <button className="search-icon">&#128269;</button> {/* icono de lupa */}
      </div>
      
      <div>
        <button className="sidebar-button"  onClick={toggleAula} >Mi biblioteca áulica</button>
        {mostrarAula && <MiAula />}
      </div>


    </div>
  );
}

export default Home;