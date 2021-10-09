import "./App.css";
import React, { useState } from "react";
import ShowResult from "./components/showResult";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState({});

  const sendNumberToCalculate = async () => {
    const resultApi = await fetch(
      `http://localhost:3001/api/calculo/${number}`
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
