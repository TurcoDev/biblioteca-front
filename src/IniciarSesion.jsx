import { useState, useEffect, useContext } from 'react';
import useLogin from './hooks/useLogin.jsx'; // custom hook que maneja el inicio de sesión
import { UserContext } from './context/UserContext.jsx'; // contexto del usuario

import './IniciarSesion.css'
import './BotonIngresar.jsx'
import BotonIngresar from './BotonIngresar.jsx'

export default function IniciarSesion() {
  const { user, setUser } = useContext(UserContext); // user logueado, se obtiene del contexto
  
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [userToLogin, setUserToLogin] = useState(null); // datos para el login
  const [isLoading, setIsLoading] = useState(''); // mensaje de cargando
  const textoBoton = 'Ingresar'; //TODO: quitar esto, lo agregue porque no cargaba el form (Uncaught ReferenceError: textoBoton is not defined)

  // Maneja el inicio de sesión, setea el estado de user en el contexto
  const [err, loading] = useLogin(userToLogin);
  
  // Maneja el submit del formulario de iniciarsesion
  const manejarSubmit = async (e) => {
    e.preventDefault();

    // arma el objeto con los datos para el login
    setUserToLogin({
      username: usuario,
      password_hash: contraseña
    });

    //limpia los campos del formulario
    setUsuario('');
    setContraseña('');
    //cambia el estado de isLoading a true para que se muestre el mensaje de cargando
    setIsLoading(true);

  };

  // Cambia el estado de isLoading cada vez que cambia el estado de user, err o loading
  useEffect(() => {
    setIsLoading(loading);
  }, [user, err, loading]);

  return (
    isLoading
      ? <h2>Cargando...</h2>
      : (err
          ? <h2>{err}</h2>
          : (user
              ? <h2>Bienvenid@ {user.username}</h2>
              : <div className='iniciarsesion'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user"className="logo" ><path fill="#f33b3b" d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" class="color42c3cf svgShape"></path><circle cx="24" cy="16" r="12" fill="#f33b3b" class="color42c3cf svgShape"></circle></svg>            
                  <h2>Iniciar Sesión </h2>
                  <form onSubmit={manejarSubmit}>
                  <label htmlFor='usuario'>Usuario:</label>
                    <input
                      type='text'
                      id='usuario'
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                    <label htmlFor='contraseña'>Contraseña:</label>
                    <input
                      type='password'
                      id='contraseña'
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                    />
                    <BotonIngresar texto={textoBoton} type="submit"  /> 
                  </form>
                  <a href='#'>Olvidé mi contraseña</a>
                </div>
            )
        )
  );
}