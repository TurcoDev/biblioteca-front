import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Circulo from "./Circulo"; 
import "./EleccionGrado.css";

const EleccionGrado = () => {
  const [circles, setCircles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const colors = shuffleArray([
      "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"
    ]).slice(0, numbers.length); // Asegura que el número de colores coincide con el número de círculos
    const shuffledNumbers = shuffleArray(numbers);

    const newCircles = shuffledNumbers.map((number, index) => ({
      number,
      color: colors[index], // Asigna colores únicos a cada número
      id: index,
    }));
    setCircles(newCircles);
  }, []);

  // Baraja el array usando el algoritmo de Fisher-Yates
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
    navigate(`/numero/${number}/${encodeURIComponent(color)}`);
  };

  return (
    <div className="eleccion-grado-container">
      <h1>¿A QUÉ GRADO VOY?</h1>
      <div className="circles-container">
        {circles.map((circle) => (
          <Circulo
            key={circle.id}
            number={circle.number}
            color={circle.color}
            onClick={() => handleCircleClick(circle.number, circle.color)} // Pasar la función de clic como prop
          />
        ))}
      </div>
    </div>
  
  );
};

export default EleccionGrado;

