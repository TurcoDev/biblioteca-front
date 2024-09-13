import React, { useState } from 'react';
import './PerfilAdulto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono que uso

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú desplegable

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Alterna el estado de abierto/cerrado
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faUser} className="icon" /> {/* Añade el ícono antes del texto */}
                ¿A que perfil desea ingresar?
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span> {/* Flecha cambia según el estado */}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#opcion1">Docente</a>
                    <a href="#opcion2">Administrador</a>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
