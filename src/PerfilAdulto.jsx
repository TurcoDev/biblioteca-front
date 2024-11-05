import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './PerfilAdulto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './context/UserContext'; // Asegúrate de que esté importado

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext); // Accede al contexto de usuario

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelection = (role) => {
        setUser(null); // Limpia el estado del usuario para que no persista
        setIsOpen(false); // Cierra el menú
        const color = "DarkRed"; // Color para mayores
        const number = "18"; // Mayores de 18
        navigate(`/CrearSesionUsr/${number}/${encodeURIComponent(color)}/${role}`);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faUser} className="icon" />
                ¿A qué perfil desea ingresar?
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <button onClick={() => handleSelection("docente")}>Docente</button>
                    <button onClick={() => handleSelection("administrador")}>Administrador</button>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
