import React, { useState } from 'react';
import './PerfilAdulto.css';
import DropdownButtonCrearAdulto from './CrearUsuarioAdulto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono que uso
import { FaKey } from "react-icons/fa"; // Usa react-icons para el icono de la llave

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            ¿A qué perfil desea ingresar?
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
        </button>
        {isOpen && (
            <div className="dropdown-content">
                <a href="#opcion1">Docente</a>
                <a href="#opcion2">Administrador</a>
            </div>
        )}
    </div>
    
    <div className="dropdown">
        <button className="dropdown-button">
            <FaKey className="icon" />
            ¿Quieres crear una cuenta?
        </button>
    </div>
    </>
    );
};

export default DropdownMenu;