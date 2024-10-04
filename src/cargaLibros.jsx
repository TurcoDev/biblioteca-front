import React, { useState } from 'react';
import './Formulario.css';
import BotonIngresar from './BotonIngresar';

const CargarLibros = () => {
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Añadir la lógica para procesar los datos del formulario
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    return (
        <div className="formulario-contenedor">
            <div className="formulario-contenido">
                <form onSubmit={handleSubmit} className="formulario">
                    <h2>Cargar Libros</h2>
                    <div>
                        <label htmlFor="nombre">Nombre Libro:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <div>
                        <label htmlFor="autor">Autor:</label>
                        <input type="text" id="autor" name="autor" required />
                    </div>

                    <div>
                        <label htmlFor="descripcion">Descripción:</label>
                        <input type="text" id="descripcion" name="descripcion" required />
                    </div>

                    <div>
                        <label htmlFor="imageUrl">URL de la imagen del Libro:</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={handleImageUrlChange} required />
                    </div>

                    <BotonIngresar texto="Registrar" />
                </form>

                {imageUrl && (
                    <aside className="imagen-contenedor">
                        <img src={imageUrl} alt="Vista previa del libro" className="imagen-libro" />
                    </aside>
                )}
            </div>
        </div>
    );
};

export default CargarLibros;
