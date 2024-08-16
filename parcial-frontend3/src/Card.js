import React from 'react';
import './Card.css'; // Opcional, para estilos personalizados

function Card({ input1, input2 }) {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p><strong>Input 1:</strong> {input1}</p>
      <p><strong>Input 2:</strong> {input2}</p>
    </div>
  );
}

export default Card;
