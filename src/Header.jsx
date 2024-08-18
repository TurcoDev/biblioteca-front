import React from 'react';
import './header.css'; 
const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="biblioteca-front\logo.png" alt="Logo" className="logo" />
            </div>
            <h1 className="header-title">Biblioteca Aulica</h1>
        </header>
    );
};

export default Header;
