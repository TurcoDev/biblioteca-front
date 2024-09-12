import React from 'react';
import './footer.css';
import { FaRegCopyright } from 'react-icons/fa'; // Importamos el icono de copyright

const Footer = () => {
    return (
        <footer className="footer">
            {/* Contenedor para el icono y el texto de derechos reservados */}
            <div className="footer-rights">
                <FaRegCopyright className="footer-icon" />
                <p className="footer-text">Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
