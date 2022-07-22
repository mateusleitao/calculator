import React, { useState } from "react";
import Calc from "./components/Calc";
import "./styles.css";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");

  const operation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;

    setCurrentOperand("")
    setPreviousOperand(currentOperand + " " + button.value);
  };
  
  const results = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget
    const num1:number = parseFloat(currentOperand)
    const num2:number = parseFloat(previousOperand)
    setPreviousOperand(previousOperand + currentOperand)

      if(previousOperand.includes("-")){
        prevent()
        setCurrentOperand(String((num2 - num1).toFixed(2)))
      } else if(previousOperand.includes("+")){
        setCurrentOperand(String((num2 + num1).toFixed(2)))
      } else if(previousOperand.includes("÷")){
        setCurrentOperand(String((num2 / num1).toFixed(2)))
      } else if(previousOperand.includes("*")){
        setCurrentOperand(String((num2 * num1).toFixed(2)))
      }
    

  }

  const prevent = () => {
    if(currentOperand.includes(".00")){

    }
  }


  const output = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setCurrentOperand(currentOperand + button.value);
  };

  const resetOp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setCurrentOperand("");
    setPreviousOperand("");
  };

  const delOp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setCurrentOperand(currentOperand.slice(0, -1));
  };

    

    




  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={resetOp}>
        AC
      </button>
      <button onClick={delOp}>DEL</button>
      <button value="÷" id="÷" onClick={operation}>
        ÷
      </button>
      <button value="1" id="1" onClick={output}>
        1
      </button>
      <button value="2" id="2" onClick={output}>
        2
      </button>
      <button value="3" id="3" onClick={output}>
        3
      </button>
      <button value="*" id="*" onClick={operation}>
        *
      </button>
      <button value="4" id="4" onClick={output}>
        4
      </button>
      <button value="5" id="5" onClick={output}>
        5
      </button>
      <button value="6" id="6" onClick={output}>
        6
      </button>
      <button value="+" id="+" onClick={operation}>
        +
      </button>
      <button value="7" id="7" onClick={output}>
        7
      </button>
      <button value="8" id="8" onClick={output}>
        8
      </button>
      <button value="9" id="9" onClick={output}>
        9
      </button>
      <button value="- " id="-" onClick={operation}>
        -
      </button>
      <button value="." id="." onClick={output}>
        .
      </button>
      <button value="0" id="0" onClick={output}>
        0
      </button>
      <button className="span-two" onClick={results}>=</button>
    </div>
  );
}

export default App;
