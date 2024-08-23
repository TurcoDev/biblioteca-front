import { Link } from 'react-router-dom'
import './Perfil.css'
export default function Perfil({nombre}){
    return (
        <div>
            <Link to="/iniciarsesion" className='nombre'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="user"><path fill="#f33b3b" d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z" class="color42c3cf svgShape"></path><circle cx="24" cy="16" r="12" fill="#f33b3b" class="color42c3cf svgShape"></circle></svg>            
                <h3>{nombre}</h3>
            </Link>
        </div>
    )
}