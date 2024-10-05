import { Link } from "react-router-dom";
import Libro from './Libro'; // Importa el componente Libro
import './ListaDeLibros.css';

function ListaDeLibros({ books }) {

  // Ejemplo de como leer datos de un json con fetch
  // El inconveniente es que no puede cargarse informacion solo se los dejo de ejemplo
  /*
    useEffect(() => {
      fetch("/books.json")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error("Error al cargar los libros:", error));
    }, []);
  */


  return (
    <div className="card-container">
      <Link to="/cargarlibros">
        <button>Regresar a la carga</button>
      </Link>
      <div className="card-list">
        {books.map((libro) => (
          <Libro key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
}


export default ListaDeLibros;