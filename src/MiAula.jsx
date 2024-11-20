import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/UserContext.jsx'; 
import './MiAula.css';
import LibraryButtons from './MenuOpciones';

const MiAula = () => {
    const { user } = useContext(UserContext); 
    const [libraryData, setLibraryData] = useState(null); // almacena datos de la biblioteca
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLibraryData = async () => {
            try {
                // Obtener el estudiante que coincide con el user_id
                const estudianteResponse = await fetch("http://localhost:3000/estudiante/");
                const estudiantesData = await estudianteResponse.json();
                const estudiante = estudiantesData.find(est => est.user_id === user.user_id);

                if (estudiante) {
                    // Obtener datos de la sección
                    const sectionResponse = await fetch(`http://localhost:3000/seccion/${estudiante.section_id}`);
                    const sectionData = await sectionResponse.json();

                    // Obtener datos de la biblioteca
                    const libraryResponse = await fetch(`http://localhost:3000/biblioteca/${sectionData.classroom_library_id}`);
                    const libraryData = await libraryResponse.json();

                    setLibraryData(libraryData); // Guardar datos en el estado
                } else {
                    setError("Aún no estás inscripto en ninguna biblioteca áulica");
                }
            } catch (error) {
                console.error("Error fetching data", error);
                setError("Error al cargar la biblioteca");
            }
        };

        fetchLibraryData();
    }, [user]);

    return (
        <div className='miAula.mostrar'>
            { libraryData ? (
                    <div className="button-container">
                    <LibraryButtons libraryData={libraryData} />
                 </div>
            ) : (
                <p>Aún no estás registrado en ninguna biblioteca áulica</p>
            )}
        </div>
    );
};

export default MiAula;
