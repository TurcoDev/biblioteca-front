import Libro from './Libro'; // Importa el componente Libro
import { books } from "./mocks/books";
import './ListaDeLibros.css';

function ListaDeLibros() {
  
    return (
      <div className="card-container">
        <div className="card-list">
          {books.map((libro) => (
            <Libro key={libro.id} libro={libro} />
          ))}
        </div>
      </div>
    );
  }


export default ListaDeLibros;