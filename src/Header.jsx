import React from 'react';
import './header.css'; 

const Header = () => {
    return (
        <header className="header">
            {/* Contenedor para el logo y el título */}
            <div className="logo-container">
                <img src="\logo.png" alt="Logo" className="logo" />
            </div>
            <h1 className="header-title">BIBLIOTECA ÁULICA</h1>
        </header>
    );
};

export default Header;

