import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRegister from './hooks/useRegister.jsx';
import { UserContext } from './context/UserContext.jsx';
import BotonIngresar from './BotonIngresar';
import Bienvenida from './Bienvenida.jsx';
import './Formulario.css';

const initialUser = {
  username: "",
  password_hash: "",
  email: "",
  name: "",
  last_name: "",
  role_id: "",
  is_moroso: false
};

const Formulario = ({ tipo, textoBoton, role }) => {
  const navigate = useNavigate();
  const { color } = useParams();
  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState(initialUser);
  const [userToRegister, setUserToRegister] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Recibe `isRegistered` para saber si el registro fue exitoso
  const [err, loading, isRegistered] = useRegister(userToRegister);

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
    setUserToRegister({
      username: formData.username,
      password_hash: formData.password_hash,
      email: formData.email,
      name: formData.name,
      last_name: formData.last_name,
      role_id: role,
      is_moroso: formData.is_moroso
    });
    setIsLoading(true);
  };

  // Redirige al usuario a la pantalla de inicio de sesión después del registro exitoso
  useEffect(() => {
    if (isRegistered) {
      navigate("/");;  // Ruta de inicio de sesión
    }
  }, [isRegistered, navigate]);

  useEffect(() => {
    setIsLoading(loading);
  }, [user, err, loading]);

  return (
    isLoading
      ? <h2>Cargando...</h2>
      : (err
          ? <h2>{err}</h2>
          : (user
              ? <h2>Bienvenida/o {user.username}</h2>
              : <div className="formulario-contenedor">
                  <form onSubmit={manejarSubmit} className="formulario">
                    <h2>¡Creá tu cuenta!</h2>
                    <div>
                      {tipo === 'usuario' ? (
                        <div>
                          <label htmlFor="usuario">Nombre de Usuario:</label>
                          <input
                            type="text"
                            id="usuario"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="correo">Correo Electrónico:</label>
                          <input
                            type="email"
                            id="correo"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      )}
                      <label htmlFor="nombre">Nombre:</label>
                      <input 
                        type="text"
                        id="nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido">Apellido:</label>
                      <input
                        type="text"
                        id="apellido"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="contraseña">Contraseña:</label>
                      <input
                        type="password"
                        id="contraseña"
                        name="password_hash"
                        value={formData.password_hash}
                        onChange={handleChange}
                      />
                    </div>
                    <BotonIngresar texto={textoBoton} />
                  </form>
                </div>
            )
          )
  );
};

export default Formulario;
