import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useLogin = ( userData ) => {
    const { user, setUser } = useContext( UserContext );

    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( '' );

    
    const url = `http://localhost:3000/login`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    
    const fetchRequest = async (url) => {
      console.log('userData', userData);
      
      try {
        const response = await fetch(url, options);
        //console.log('response', response);
        if( !response.ok ) {
          throw new Error('Error en la peticion');
        }
        return response.json();

      } catch (error) {
        setError( error.message );
        setLoading( false );
        setUser(null);
      }

    };

    const getRes = async () => {

        const res = await fetchRequest( url );
        //console.log( 'res',res );
        
        setLoading( false );

        if( res) {
          if(res.error){
            setError( res.error );
            setUser(null);
            return;
          } else {
            setUser( res.data );
            setError( null );
            return;
          };
        };

    };

    useEffect( () => {

        userData && getRes();

    }, [userData] )

    return [ error, loading ];

}

export default useLogin;