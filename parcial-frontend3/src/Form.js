import React, { useState } from 'react';
import Card from './Card'; // Importa el componente Card

function Form() {
  // Estado para los inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  // Estado para el mensaje de error y el componente Card
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (input1.trim().length < 3 || /\s/.test(input1[0])) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Si las validaciones pasan
    setError('');
    setShowCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingrese su nombre:</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label>Ingrese su apellido:</label>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default Form;
