import './Menu.css'

const Menu = () => {
    return (
      <div className="menu-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="menu-list">
          <li className="menu-item">Búsqueda y reserva de libros</li>
          <li className="menu-item">Préstamos de clase</li>
          <li className="menu-item">Recomendaciones y listas de lectura</li>
          <li className="menu-item">Interacción con Bibliotecario</li>
        </ul>
      </div>
    );
  };

  export default Menu;