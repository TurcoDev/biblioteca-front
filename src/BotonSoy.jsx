import './BotonSoy.css';

export default function BotonSoy({nombre, color}){
    const colorBoton = { backgroundColor:color }
    return (

        <button className="botonSoy" style={colorBoton}>
            {nombre}

        </button>
    )
}