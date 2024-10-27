import React from 'react';
import { Link } from 'react-router-dom';
import './ListadoAulas.css';

const ListadoAulas = () => {
    const aulas = [
        { id: 1, nombre: 'Aula 1' },
        { id: 2, nombre: 'Aula 2' },
        { id: 3, nombre: 'Aula 3' },
    ];

    const handleEliminar = (id) => {
        console.log(`Eliminar aula con id: ${id}`);
    };

    const handleModificar = (id) => {
        console.log(`Modificar aula con id: ${id}`);
    };

    return (
        <div className="listado-aulas">
            <h2>Aulas</h2>
            <ul className="aulas-list">
                {aulas.map((aula) => (
                    <li key={aula.id} className="aula-item">
                        <span>{aula.nombre}</span>
                        <button onClick={() => handleEliminar(aula.id)} className="btn eliminar">Eliminar</button>
                        <button onClick={() => handleModificar(aula.id)} className="btn editar">Editar</button>
                    </li>
                ))}
            </ul>
            <Link to="/crear-aula">
                <button className="btn crear">Crear un aula</button>
            </Link>
        </div>
    );
};

export default ListadoAulas;
