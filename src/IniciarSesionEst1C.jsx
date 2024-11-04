import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useLogin from './hooks/useLogin.jsx'; // custom hook que maneja el inicio de sesión
import { UserContext } from './context/UserContext.jsx'; // contexto del usuario
import './IniciarSesionEst1C.css';
import BotonIngresar from './BotonIngresar.jsx';

export default function CrearSesionEst1C() {
  const { color, number } = useParams(); // Obtener color y año del URL
  const navigate = useNavigate(); // Inicializar useNavigate para navegación

  const { user, setUser } = useContext(UserContext); // user logueado, se obtiene del contexto
  
  const [codigo, setCodigo] = useState(""); // Estado para el código ingresado
  const [userToLogin, setUserToLogin] = useState(null); // datos para el login
  const [isLoading, setIsLoading] = useState(false); // mensaje de cargando
  const [err, loading] = useLogin(userToLogin); // Maneja el inicio de sesión, setea el estado de user en el contexto

  const validCodes = {
    "1": "MANO1", 
    "2": "ELEFANTE2",
    "3": "ARBOL834",
  };

  // Maneja el inicio de sesión
  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    if (codigo === validCodes[number]) {
      setUserToLogin({
        username: number === '1' ? "primero" :
                  number === '2' ? "segundo" :
                  number === '3' ? "tercero" : null,
        password_hash: number === '1' ? "primero" :
                       number === '2' ? "segundo" :
                       number === '3' ? "tercero" : null,
      });

      setCodigo(''); // Limpiar el campo de código
      setIsLoading(true); // Cambiar estado de carga
    } else {
      alert("Código incorrecto, intenta nuevamente.");
    }
  };

  useEffect(() => {
    setIsLoading(loading);
    if (user) {
      navigate('/home'); // Redirige a la página principal
    }
  }, [user, loading, navigate]);

  // Decodificar color si contiene caracteres especiales
  const decodedColor = decodeURIComponent(color);

  return (
    <div className='iniciarsesion'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user" className="logo" style={{ fill: decodedColor }}>
        <path d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" className="color42c3cf svgShape"></path>
        <circle cx="24" cy="16" r="12" className="color42c3cf svgShape"></circle>
      </svg>
      
      <h2>INICIAR SESIÓN</h2>

      <form onSubmit={manejarSubmit}> {/* Manejador de submit */}
        <label htmlFor='codigo'>INGRESA EL CÓDIGO: {validCodes[number]}</label>
        <input 
          type="text" 
          id="codigo" 
          name="codigo" 
          value={codigo} 
          onChange={(e) => setCodigo(e.target.value.toUpperCase())} 
          placeholder="Ingrese su código" 
          className='input' 
        />

        <div className="botonIngresar">
          <BotonIngresar texto="INGRESAR" type="submit" color={decodedColor} /> {/* Cambia a tipo submit */}
        </div>

        <p>¿NO TENÉS EL CÓDIGO? PEDÍSELO A TU DOCENTE</p>
      </form>
    </div>
  );
}
