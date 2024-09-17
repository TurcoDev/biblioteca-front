import React from "react";
import "./Circulo.css";
const Circulo = ({ number, color, onClick }) => {
  return (
    <div
      className="circle"
      style={{ backgroundColor: color }}
      onClick={onClick} // Utilizar la función de clic pasada como prop
    >
      {number}
    </div>
  );
};

export default Circulo;
