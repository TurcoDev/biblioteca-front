import { Link } from 'react-router-dom';
import './BotonSoy.css';

export default function BotonSoy({nombre, color, ruta}){
    const colorBoton = { backgroundColor:color }
    return (
        <Link to={ruta} >
            <button className="botonSoy" style={colorBoton}>
                {nombre}

            </button>
        </Link>
    )
}