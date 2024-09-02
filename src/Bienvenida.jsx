import BotonSoy from "./BotonSoy";
import './Bienvenida.css'

export default function Bienvenida(){
    return (
        <div className="contenedorBienvenida">
            <h1>Te damos la bienvenida!</h1>
            <div className="contenedorBotones">
                <BotonSoy 
                nombre="SOY ESTUDIANTE" color="orange" />
                <BotonSoy 
                nombre="SOY ADULTO" color="yellow"/>
            </div>
        </div>
    )
}