import React, { useEffect, useState } from "react";
import "./EleccionGrado.css";

const EleccionGrado = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Generar círculos con números y colores aleatorios
    const newCircles = Array.from({ length: 6 }, (_, index) => ({
      number: Math.floor(Math.random() * 6) + 1,
      color: getRandomColor(),
      id: index,
    }));
    setCircles(newCircles);
  }, []);

  // Función para obtener un color aleatorio
  const getRandomColor = () => {
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];
    return colors[Math.floor(Math.random() * colors.length)];
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
          >
            {circle.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EleccionGrado;
