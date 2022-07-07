import "./styles.css";

import React, { useState } from "react";
import Button from "../button";
import Screen from "../input-screen";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const updateDisplay = (children) => {
    setDisplay(`${display}${children}`);
  };

  const calcResult = () => {
    if (display) {
      setDisplay(evaluate(display));
    } else {
      alert("Ingrese un valor para seguir operando");
    }
  };

  return (
    <div className="calculator-container">
      <Screen input={display} />
      <div className="row">
        <Button handleClick={() => setDisplay("")}>C</Button>
      </div>
      <div className="row">
        <Button handleClick={updateDisplay}>7</Button>
        <Button handleClick={updateDisplay}>8</Button>
        <Button handleClick={updateDisplay}>9</Button>
        <Button handleClick={updateDisplay}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={updateDisplay}>4</Button>
        <Button handleClick={updateDisplay}>5</Button>
        <Button handleClick={updateDisplay}>6</Button>
        <Button handleClick={updateDisplay}>-</Button>
      </div>
      <div className="row">
        <Button handleClick={updateDisplay}>1</Button>
        <Button handleClick={updateDisplay}>2</Button>
        <Button handleClick={updateDisplay}>3</Button>
        <Button handleClick={updateDisplay}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={updateDisplay}>0</Button>
        <Button handleClick={updateDisplay}>.</Button>
        <Button handleClick={calcResult}>=</Button>
        <Button handleClick={updateDisplay}>/</Button>
      </div>
    </div>
  );
};

export default Calculator;
