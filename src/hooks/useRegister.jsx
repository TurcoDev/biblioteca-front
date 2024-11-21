import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useRegister = (userData) => {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false); // Para rastrear el registro exitoso

    const url = `https://biblioteca-back-cpfs.onrender.com/register`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    const fetchRequest = async (url) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Ocurrió un error al intentar registrar el usuario');
            }
            return response.json();
        } catch (error) {
            console.log('error', error.message);
            setError(error.message);
            setLoading(false);
            setUser(null);
        }
    };

    const getRes = async () => {
        setLoading(true);
        const res = await fetchRequest(url);
        setLoading(false);

        if (res) {
            if (res.error) {
                setError(res.error);
                setUser(null);
                setIsRegistered(false);
            } else {
                setUser(res);
                setError(null);
                setIsRegistered(true); // Marca como registrado
            }
        }
    };

    useEffect(() => {
        userData && getRes();
    }, [userData]);

    return [error, loading, isRegistered]; // Retorna isRegistered
};

export default useRegister;
