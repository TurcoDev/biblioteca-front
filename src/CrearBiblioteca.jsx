import React from 'react';
import './CrearBiblioteca.css';

function CrearBiblioteca() {
  return (
    <div className="app-container">
      <div className="library-container">
        <h1>Biblioteca Áulica</h1>
        <div className="form-container">
          <p>Creá tu biblioteca áulica</p>
          <a href="#demo-modal" className="btn">(para crear ingrese nombre acá)</a>
          <a href="#demo-modal" className="btn">Cancelar</a>
        </div>
      </div>

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1>Biblioteca Creada Exitosamente</h1>
          <p>
            Tu nueva Biblioteca fue incorporada al listado de las ya creadas
          </p>
          <div className="modal__footer">
            Made By Alumnos Tecda 
          </div>
          <a href="#" className="modal__close">&times;</a>
        </div>
      </div>
    </div>
  );
}

export default CrearBiblioteca;
