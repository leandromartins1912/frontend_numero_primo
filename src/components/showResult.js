import React from "react";

import "./showResult.css"

function ShowResult(props) {
  const { numero_digitado, divisores, numeros_primos_divisores } = props.result;
  return (
    <div >
      {numero_digitado && divisores && numeros_primos_divisores ? (
        <div className="number-prime-details-container">
          <p><strong>Numero digitado:</strong> {numero_digitado}</p>
          <p><strong>Divisores:</strong> {divisores.map((val) => `${val} `)}</p>
          <p><strong>Divisores Primos:</strong> {numeros_primos_divisores.map((val) => `${val} `)}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ShowResult;
