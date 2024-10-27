import React from 'react';
import { Link } from 'react-router-dom'
import TresBotones from './tresbotones';
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar un libro en la biblioteca..." />
        <button className="search-icon">&#128269;</button> {/* icono de lupa */}
      </div>

      <Link to="/listadoaulas">
            <button className="sidebar-button">
                Mi biblioteca áulica
            </button>
      </Link>

      <div className="button-container">
        <TresBotones />
      </div>
    </div>
  );
}

export default Home;