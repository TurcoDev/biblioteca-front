import React, { useState, createContext } from 'react';
// Creo el contexto
export const UserContext = createContext();

// El provider envuelve los componentes hijos y les proporciona el contexto de usuario. 
// El contexto de usuario contiene el objeto usuario y una función para actualizarlo.
export const UserProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null );

    const data = { user, setUser }
    // Si el usuario es null, quiere decir que no hay un usuario logueado.
    return (
        <UserContext.Provider value={ data }>
            { children }
        </UserContext.Provider>
    );
}
