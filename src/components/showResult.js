import React from "react";

function ShowResult(props) {
  const { numero_digitado, divisores, numeros_primos_divisores } = props.result;
  return (
    <div>
      {numero_digitado && divisores && numeros_primos_divisores ? (
        <div>
          <p>{numero_digitado}</p>
          <p>{divisores.map((val) => `${val} `)}</p>
          <p>{numeros_primos_divisores.map((val) => `${val} `)}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ShowResult;
