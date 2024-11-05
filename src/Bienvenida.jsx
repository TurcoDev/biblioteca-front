import BotonSoy from "./BotonSoy";
import './Bienvenida.css'

export default function Bienvenida(){
    return (
        <div className="contenedorBienvenida">
            <h2 className="tituloBienvenida">TE DAMOS LA BIENVENIDA</h2>
            <div className="contenedorBotones">
                <BotonSoy 
                nombre="SOY ESTUDIANTE" color="orange" ruta="/elecciongrado" />
                <BotonSoy 
                nombre="SOY ADULTO" color="yellow" ruta="/DropdownMenu"/>
            </div>
        </div>
    )
}