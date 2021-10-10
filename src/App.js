import "./App.css";
import React, { useState } from "react";

import Header from "./components/header/Header";

import ShowResult from "./components/showResult";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState({});

  const sendNumberToCalculate = async () => {
    var baseUrl = "https://apinumeroprimo.herokuapp.com/api/";
    //var baseUrl = "http://localhost:8080/api/"

    const resultApi = await fetch(`${baseUrl}calculo/${number}`);
    const resultApiJSON = await resultApi.json();
    setResult(resultApiJSON);
  };

  const cleanValues = () => {
    setNumber("");
    setResult({});
  };

  return (
    <div className="container">
      
      <Header />
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        className="add-number-input"
      />
      <div>
        <button
          type="button"
          onClick={sendNumberToCalculate}
          className="button-calculate"
        >
          Calcular
        </button>
        <button type="button" onClick={cleanValues} className="button-clear">
          Limpar
        </button>
      </div>

      <ShowResult result={result} />
    </div>
  );
}

export default App;
