import React, { useState } from 'react'

import './IniciarSesion.css'
import './BotonIngresar.jsx'
import BotonIngresar from './BotonIngresar.jsx'

const loggedUser = {
  username: "",
  password_hash: "",
  email: "",
  role_id:"", // id de la tabla roles
  is_moroso:false
}

export default function IniciarSesion() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [loggedUser, setLoggedUser] = useState(null);
  //const textoBoton = 'Ingresar'; //TODO: quitar esto, lo agregue porque no cargaba el form (Uncaught ReferenceError: textoBoton is not defined)

    const manejarSubmit = async (e) => {
      e.preventDefault();
      // Lógica para manejar el inicio de sesión
      console.log("Usuario:", usuario);
      console.log("Contraseña:", contraseña);

      // Body de la petición
      const userToLogin = {
        username: usuario,
        password_hash: contraseña,
      };

      try {
          // Llamada al servidor
          const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userToLogin),
          }).then(response => response.json()) // Convertir la respuesta a formato JSON
          .then(data => { // Manejar la respuesta
              if (data.error) { // Si hay un error, mostrarlo y actualizar el estado del usuario logueado a null
                console.error(data.error);
                setLoggedUser(null);
                
                // TODO: ESTO ES PROVISORIO, VER QUE DECIDE EL EQUPO SEL FRONT QUE DEBE HACERSE
                // Mostrar alerta de error
                alert(data.error);

              } else { // Si no hay un error, mostrar el mensaje y actualizar el estado del usuario logueado
                console.log(data.message);
                setLoggedUser(data);

                // TODO: ESTO ES PROVISORIO, VER QUE DECIDE EL EQUPO SEL FRONT QUE DEBE HACERSE
                //Redireccionar a la página principal
                window.location.href = '/libros';
              }
          });

      } catch (error) {
          console.error('Error:', error);
      }

    };

  return (
    <div className='iniciarsesion'>
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
  );
}