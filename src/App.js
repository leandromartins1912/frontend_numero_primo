import "./App.css";
import React, { useState } from "react";
import ShowResult from "./components/showResult";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState({});

  const sendNumberToCalculate = async () => {
    var baseUrl = 'https://apinumeroprimo.herokuapp.com/api/';

    const resultApi = await fetch(
      `${baseUrl}calculo/${number}`
    );
    const resultApiJSON = await resultApi.json();
    setResult(resultApiJSON);
  };

  const cleanValues = () => {
    setNumber("");
    setResult({});
  };

  return (
    <div>
      {number}
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button type="button" onClick={sendNumberToCalculate}>
        Calcular
      </button>
      <button type="button" onClick={cleanValues}>
        Limpar
      </button>
      <ShowResult result={result} />
    </div>
  );
}

export default App;
