import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLogin from './hooks/useLogin.jsx'; // custom hook que maneja el inicio de sesión
import { UserContext } from './context/UserContext.jsx'; // contexto del usuario
import './IniciarSesionEst2C.css';
import BotonIngresar from './BotonIngresar.jsx'; // Asegúrate de que la importación es correcta
import Home from './Home.jsx';

export default function CrearSesionEst2C() {
  const navigate = useNavigate();
  const { color,role } = useParams(); // Obtener el color y el rol del parámetro de la URL

  const { user, setUser } = useContext(UserContext); // user logueado, se obtiene del contexto
  
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [userToLogin, setUserToLogin] = useState(null); // datos para el login
  const [isLoading, setIsLoading] = useState(''); // mensaje de cargando

  // Maneja el inicio de sesión, setea el estado de user en el contexto
  const [err, loading] = useLogin(userToLogin);
  
  // Maneja el submit del formulario de iniciarsesion
  const manejarSubmit = async (e) => {
    e.preventDefault();

    // arma el objeto con los datos para el login
    setUserToLogin({
      username: usuario,
      password_hash: contraseña,
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

  const irARegistro = () => {
    navigate(`/registrousuario/${role}`);
  };

  // Decodificar color si contiene caracteres especiales
  const decodedColor = decodeURIComponent(color);

  return (
    isLoading
      ? <h2>Cargando...</h2>
      : (err
          ? <h2>{err}</h2>
          : (user
              ? <Home />
              : <div className='formulario-contenedor' style={{ width: '80%', maxWidth: '600px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user" className="logo">
                    <path fill={decodedColor} d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" className="color42c3cf svgShape"></path>
                    <circle cx="24" cy="16" r="12" fill={decodedColor} className="color42c3cf svgShape"></circle>
                  </svg>
                  <h2>Iniciar Sesión</h2>

                  <form className="formulario" onSubmit={manejarSubmit}>
                    <label htmlFor='usuario'>Usuario:</label>
                    <input
                      type='text'
                      id='usuario'
                      name = 'usuario'
                      value={usuario}
                      placeholder="Ingrese usuario"
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                    
                    <label htmlFor='contraseña'>Contraseña:</label>
                    <input
                      type='password'
                      id='contraseña'
                      name='contraseña'
                      value={contraseña}
                      placeholder="Ingrese contraseña"
                      onChange={(e) => setContraseña(e.target.value)}
                    />

                    <div className="contenedorBoton">
                      <BotonIngresar type="submit" texto="Ingresar" color={decodedColor} />
                    </div>
                  </form>

                  <a href='#'>Olvidé mi contraseña</a>

                  <a href='#' onClick={irARegistro}>Si no tenés cuenta. Registrate</a>
                </div>
          )
      )
  );
}
