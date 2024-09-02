import React from "react";
import "./Circulo.css";

const Circulo = ({ number, color }) => {
  return (
    <div
      className="circle"
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

export default Circulo;
