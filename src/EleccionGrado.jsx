import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext"; // Importa el contexto de usuario
import "./EleccionGrado.css";

const EleccionGrado = () => {
  const [circles, setCircles] = useState([]);
  const navigate = useNavigate();
  const [role, setRole] = useState("estudiante");
  const { user, setUser } = useContext(UserContext); // Usa el contexto

  useEffect(() => {
    // Elimina al usuario logueado al montar el componente
    if (user) {
      setUser(null);
    }

    const numbers = [1, 2, 3, 4, 5, 6];
    const colors = shuffleArray([
      "blue", "red", "orange", "yellow", "brown", "green",
    ]); 
    const radius = 250; // Radio del círculo
    const centerX = 50; // Centro del contenedor (50% en horizontal)
    const centerY = 50; // Centro del contenedor (50% en vertical)
    const angleStep = (2 * Math.PI) / numbers.length; // Ángulo entre cada número

    const newCircles = numbers.map((number, index) => {
      const angle = index * angleStep;
      const top = `${centerY + radius * Math.sin(angle) / window.innerHeight * 100}%`;
      const left = `${centerX + radius * Math.cos(angle) / window.innerWidth * 100}%`;
    
    return {
        number,
        color: colors[index],
        id: index,
        top,
        left,
      };
    });

    setCircles(newCircles);
  }, []);

  // Shuffle the array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  const handleCircleClick = (number, color) => {
    if (number >= 1 && number <= 3) {
      navigate(`/CrearSesionEst1C/${number}/${encodeURIComponent(color)}/${role}`);
    } else if (number >= 4 && number <= 6) {
      navigate(`/CrearSesionUsr/${number}/${encodeURIComponent(color)}/${role}`);
    }
  };

  return (
    <div className="eleccion-grado-container">
      <h1>¿A QUÉ GRADO VAS?</h1>
      <div className="circles-container">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="circle"
            style={{
              backgroundColor: circle.color,
              position: 'absolute', // Ensure absolute positioning is applied
              top: circle.top,
              left: circle.left,
              transform: "translate(-50%, -50%)", // Ensure the circle is properly centered
            }}
            onClick={() => handleCircleClick(circle.number, circle.color)} 
          >
            {circle.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EleccionGrado;
