import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EleccionGrado.css";

const EleccionGrado = () => {
  const [circles, setCircles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const colors = shuffleArray([
      "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
    ]).slice(0, numbers.length); // Ensure the number of colors matches the number of circles
    const shuffledNumbers = shuffleArray(numbers);

    const newCircles = shuffledNumbers.map((number, index) => ({
      number,
      color: colors[index], // Assign unique colors to each number
      id: index,
    }));
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
      navigate(`/numero/${number}/${encodeURIComponent(color)}`);
    } else if (number >= 4 && number <= 6) {
      navigate(`/crearsesionmayores/${number}/${encodeURIComponent(color)}`);

    }
  };

  return (
    <div className="eleccion-grado-container">
      <h1>¿A QUÉ GRADO VOY?</h1>
      <div className="circles-container">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="circle"
            style={{ backgroundColor: circle.color }}
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


