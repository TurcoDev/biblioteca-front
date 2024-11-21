import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListadoAulas.css';

const ListadoAulas = () => {
    const [aulas, setAulas] = useState([]);
    const [editarAula, setEditarAula] = useState(null);

    useEffect(() => {
        fetch("https://biblioteca-back-cpfs.onrender.com/biblioteca")
          .then((response) => response.json())
          .then((data) => setAulas(data))
          .catch((error) => console.error("Error al cargar las aulas:", error));
    }, []);

    const iniciarEdicion = (aula) => {
        setEditarAula(aula);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditarAula({ ...editarAula, [name]: value });
    };

    const handleEliminar = (id) => {
        fetch(`https://biblioteca-back-cpfs.onrender.com/biblioteca/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                setAulas(aulas.filter((aula) => aula.classroom_library_id !== id));
                console.log(`Aula con id: ${id} eliminada exitosamente`);
            } else {
                console.error('Error al eliminar el aula');
            }
        })
        .catch((error) => console.error("Error al enviar la solicitud DELETE:", error));
    };

    const handleModificar = () => {
        fetch(`https://biblioteca-back-cpfs.onrender.com/biblioteca/${editarAula.classroom_library_id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editarAula),
        })
        .then(response => response.json())
        .then((updatedAula) => {
            setAulas(aulas.map((aula) => 
                aula.classroom_library_id === updatedAula.classroom_library_id ? updatedAula : aula
            ));
            setEditarAula(null); 
        })
        .catch(error => console.error("Error al enviar la solicitud PUT:", error));
    };

    return (
        <div className="listado-aulas">
            <h2>Aulas</h2>
            
            {editarAula ? (
                <div>
                    <h3>Editar Aula</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleModificar(); }}>
                        <input className='nombreBiblioteca'
                            type="text" 
                            name="name" 
                            value={editarAula.name || ''} 
                            onChange={handleInputChange} 
                        />
                        <button className='btn editar' type="submit">Guardar</button>
                        <button className='btn editar' onClick={() => setEditarAula(null)}>Cancelar</button>
                    </form>
                </div>
            ) : (
                <ul className="aulas-list">
                    {aulas.map((aula) => (
                        <li key={aula.classroom_library_id} className="aula-item">
                            <span>{aula.name}</span>
                            <button onClick={() => handleEliminar(aula.classroom_library_id)} className="btn eliminar">Eliminar</button>
                            <button onClick={() => iniciarEdicion(aula)} className="btn editar">Editar</button>
                        </li>
                    ))}
                </ul>
            )}
    
            <Link to="/CrearBiblioteca">
                <button className="btn crear">Crear un aula</button>
            </Link>
            <Link to="/home">
                <button className="btn crear">Volver al Home</button>
            </Link>
        </div>
    );
};

export default ListadoAulas;
