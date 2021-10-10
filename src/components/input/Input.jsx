import React, { useState } from "react";
import "./Input.css";
import Button from "../button/Button";

const Input = ({ handleInputAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddInputClick = () => {
    handleInputAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-number-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-number-input"
        type="text"
      />

      <div className="button-calculate">
        <Button onClick={handleAddInputClick}>Calcular</Button>
      </div>
      <div className="button-clear">
        <Button onClick={handleAddInputClick}>Limpar</Button>
      </div>
    </div>
  );
};

export default Input;
