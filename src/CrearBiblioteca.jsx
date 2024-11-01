import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './CrearBiblioteca.css';

function CrearBiblioteca() {
  const [nombreBiblioteca, setNombreBiblioteca] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/biblioteca', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nombreBiblioteca }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la creación de la biblioteca'); 
        }
        return response.json();
      })
      .then((data) => {
        setMensaje('Biblioteca creada exitosamente');
        setMostrarModal(true);
        setNombreBiblioteca('');

        setTimeout(() => {
          setMostrarModal(false); 
          navigate('/listadoaulas', { state: { mensaje: 'Biblioteca creada exitosamente' } });
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al crear la biblioteca:', error);
        setMensaje('Error al crear la biblioteca');
        setMostrarModal(true);
      });
  };

  return (
    <div className="app-container">
      <div className="library-container">
        <h1>Biblioteca Áulica</h1>
        <div className="form-container">
          <p>Creá tu biblioteca áulica</p>
          <form onSubmit={handleSubmit}>
            <input className='nombreBiblioteca'
              type="text"
              placeholder="Nombre de la biblioteca"
              value={nombreBiblioteca}
              onChange={(e) => setNombreBiblioteca(e.target.value)}
              required
            />
            <button type="submit" className="btn">Crear Biblioteca</button>
            <Link to="/listadoaulas">
              <button type="button" onClick={() => setNombreBiblioteca('')} className="btn">Cancelar</button>
            </Link>
            
          </form>
        </div>
      </div>

      {mostrarModal && (
        <div className={`modal ${mostrarModal ? 'show' : ''}`}>
          <div className="modal__content">
            <h1>{mensaje}</h1>
            <p>Tu nueva Biblioteca fue incorporada al listado.</p>
            <div className="modal__footer">Made By Alumnos Tecda</div>
            <button onClick={() => setMostrarModal(false)} className="modal__close">&times;</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default CrearBiblioteca;
