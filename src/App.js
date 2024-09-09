import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const appendInput = (value) => {
    setInput(input + value);
  };

  const C = () => {
    setInput("");
    setResult("");
  };

  
  const Output = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1 className="text-center">Calculator</h1>

      <div className="Container d-flex flex-column">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="input-0">
              <div className="d-flex align-items-center justify-content-center">
                <input type="text " value={input} className=" input-1" />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <input type="text" value={result} className=" input-1" />
              </div>
            </div>
            <div className="d-flex  align-items-center justify-content-evenly p-3">
              <button className="btn" onClick={() => appendInput("1")}>
                1
              </button>
              <button className="btn" onClick={() => appendInput("2")}>
                2
              </button>
              <button className="btn" onClick={() => appendInput("3")}>
                3
              </button>
              <button className="btn" onClick={() => appendInput("+")}>
                +
              </button>
            </div>

            <div className="d-flex  align-items-center justify-content-evenly p-3">
              <button className="btn" onClick={() => appendInput("4")}>
                4
              </button>
              <button className="btn" onClick={() => appendInput("5")}>
                5
              </button>
              <button className="btn" onClick={() => appendInput("6")}>
                6
              </button>
              <button className="btn" onClick={() => appendInput("-")}>
                -
              </button>
            </div>

            <div className="d-flex  align-items-center justify-content-evenly p-3">
              <button className="btn" onClick={() => appendInput("7")}>
                7
              </button>
              <button className="btn" onClick={() => appendInput("8")}>
                8
              </button>
              <button className="btn" onClick={() => appendInput("9")}>
                9
              </button>
              <button className="btn" onClick={() => appendInput("*")}>
                x
              </button>
            </div>

            <div className="d-flex  align-items-center justify-content-evenly p-3">
              <button className="btn" onClick={C}>
                C
              </button>
              <button className="btn" onClick={() => appendInput("0")}>
                0
              </button>
              <button className="btn" onClick={Output}>
                =
              </button>
              <button className="btn" onClick={() => appendInput("/")}>
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
