import './Ingresar.css'
import './Perfil.jsx'
import Perfil from './Perfil.jsx'

export default function Ingresar(){
    return (
        <div className='contenedorIngresar'>
            <h2>¿Que Perfil Deseas Ingresar?</h2>
            <div className='contenedorPerfiles'>
                <Perfil
                nombre="Administrador" />
                <Perfil 
                nombre="Maestro" />
                <Perfil 
                nombre="Alumno" />
            </div>
        </div>
    )
}