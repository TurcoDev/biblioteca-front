
import React, { useState, useEffect, useContext }from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRegister from './hooks/useRegister.jsx'; // custom hook que maneja el registro de usuario
import { UserContext } from './context/UserContext.jsx'; // contexto del usuario

import BotonIngresar from './BotonIngresar';
import './Formulario.css'; // Importa el archivo CSS

// TODO: PREGUNTAS y cosas para hacer
// de donde obtengo el rol, deberian ser una prop? en ese caso debo obtener el id, hacer fetch
// el email en la db esta como required, hay que sacarlo?
// en la db no hay campos para nombre y apellido, hay que agregarlos?

// Estructura de usuario
const initialUser = {
  username: "",
  password_hash: "",
  email: "",
  name: "",
  last_name: "",
  role_id:"",
  is_moroso:false
}

const Formulario = ({ tipo, textoBoton, role }) => {
  const navigate = useNavigate();
  const { color } = useParams(); // Obtener el color del parámetro de la URL
  
  const { user, setUser } = useContext(UserContext); // user logueado, se obtiene del contexto
  
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [formData, setFormData] = useState(initialUser);
  const [userToRegister, setUserToRegister] = useState(null); // datos para el registro
  const [isLoading, setIsLoading] = useState(''); // mensaje de cargando

  // Maneja el inicio de sesión, setea el estado de user en el contexto
  const [err, loading] = useRegister(userToRegister);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  // Maneja el submit del formulario de registro de usuario
  const manejarSubmit = (e) => {
    e.preventDefault();
    // arma el objeto con los datos para el registro

    setUserToRegister({
      username: formData.username,
      password_hash: formData.password_hash,
      email: formData.email,
      name: formData.name,
      last_name: formData.last_name,
      role_id: role, // se envia al BE el name del rol, en BE se obtiene el id
      is_moroso: formData.is_moroso
    });

    //limpia los campos del formulario
    setUsuario('');
    setContraseña('');
    setCorreo('');
    //cambia el estado de isLoading a true para que se muestre el mensaje de cargando
    setIsLoading(true);

  };

  // Cambia el estado de isLoading cada vez que cambia el estado de user, err o loading
  useEffect(() => {
    setIsLoading(loading);
    //console.log('user', user);
  }, [user, err, loading]);

  /* useEffect(() => {
    console.log('role en Formulario', role);
  }, []) */

  return (
    isLoading
      ? <h2>Cargando...</h2>
      : (err
          ? <h2>{err}</h2>
          : (user
              ? <h2>Bienvenid@ {user.username}</h2>
              : <div className="formulario-contenedor"> {/* Nuevo contenedor para aplicar estilos */}
     
                  <form onSubmit={manejarSubmit} className="formulario">
                    <h2>¡Creá tu cuenta!</h2> {/* Título común para ambos formularios */}

                    <div>
                    {tipo === 'usuario' ? (
                      <>
                        <div>
                          <label htmlFor="usuario">Nombre de Usuario:</label>
                          <input
                            type="text"
                            id="usuario"
                            name="username"
                            value={user?.username}
                            onChange={handleChange}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label htmlFor="correo">Correo Electrónico:</label>
                          <input
                            type="email"
                            id="correo"
                            name="email"
                            value={user?.email}
                            onChange={handleChange}
                          />
                        </div>
                      </>
                    )}
                    
                      <label htmlFor="nombre">Nombre:</label>
                      <input 
                        type="text"
                        id="nombre"
                        name="name"
                        value={user?.name}
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div>
                      <label htmlFor="apellido">Apellido:</label>
                      <input
                        type="text"
                        id="apellido"
                        name="last_name"
                        value={user?.last_name}
                        onChange={handleChange}/>
                    </div>
                    
                
                    <div>
                      <label htmlFor="contraseña">Contraseña:</label>
                      <input
                        type="password"
                        id="contraseña"
                        name="password_hash"
                        value={user?.password_hash}
                        onChange={handleChange}
                      />
                    </div>

                    <BotonIngresar texto={textoBoton}  /> {/* Incluir el botón con el texto proporcionado */}
                  </form>
                  
                </div>
            )
          )
  );
};

export default Formulario