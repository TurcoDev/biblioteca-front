import React from 'react';
import './footer.css';
import { FaRegCopyright } from 'react-icons/fa'; // Importamos el icono de copyright

const Footer = () => {
    return (
        <footer className="footer">
            {/* Contenedor para el icono y el texto de derechos reservados */}
            <div className="footer-rights">
                <FaRegCopyright className="footer-icon" />
                <p className="footer-text">
                    Licencia <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GPLv3</a> • Desarrollado por <a href="https://isfd166-bue.infd.edu.ar/sitio/" target="_blank" rel="noopener noreferrer">3er año TECDA - ISFDyT 166</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
