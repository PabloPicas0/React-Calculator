import React, { useEffect, useState } from "react";
import "./App.css";

import Displayer from "./Components/displayer";
import Inputs from "./Components/inputs";
import keysBank from "./Components/inputsBank";

function App() {
  const [initalValue, setInitialValue] = useState(["0"]);
  const [inputs, setInputs] = useState([]);
  const [append, setAppend] = useState(true);
  const [result, setResult] = useState();

  useEffect(() => {
    if (inputs.length === 0) {
      setInitialValue(["0"]);
    } else {
      setInitialValue(inputs);
    }
  }, [inputs]);

  const handleClick = (key) => {
    switch (true) {
      case /AC/.test(key):
        clearHooks();
        break;
      case /back/.test(key):
        deleteOne();
        break;
      case /^[0-9+\-*.\/]*$/.test(key):
        handleNumbers(key);
        break;
      case /=/.test(key):
        handleMath();
        break;
    }
  };

  const clearHooks = () => {
    setInitialValue(["0"]);
    setInputs([]);
    setAppend(true);
    setResult();
  };

  const deleteOne = () => {

  }

  const handleNumbers = (key) => {
    let newInputs = [...inputs];

    if (typeof key === "number") {
      let number = key;

      if (append) {
        newInputs.push(key);
        setAppend(false);
      } else {
        number = newInputs[newInputs.length - 1];
        number = number * 10 + key;
        newInputs[newInputs.length - 1] = number;
      }

      setInputs(newInputs);
    } else if (/[+*\/-/\.]/.test(newInputs[newInputs.length - 1])) {
      console.log("error too many operators");
    } else {
      setInputs([...inputs, key]);
      setAppend(true);
    }
  };

  const handleMath = () => {
    const result = inputs.reduce((accumulator, elements, index, array) => {
      if (typeof elements === "number") {
        if (index === 0) {
          return elements;
        } else {
          const operators = array[index - 1];

          switch (operators) {
            case "+":
              return accumulator + elements;
            case "-":
              return accumulator - elements;
            case "/":
              return accumulator / elements;
            case "*":
              return accumulator * elements;
            default:
              return accumulator;
          }
        }
      }
      return accumulator;
    }, 0);
    setResult(result);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="wrapper rounded bg-secondary">
        <Displayer displayer={initalValue} result={result} />
        <div className="row row-cols-4 mx-0">
          {keysBank.map((elements, index) => {
            return (
              <Inputs
                key={index}
                keyDisplayed={elements.keyDisplayed}
                id={elements.id}
                value={elements.value}
                darkColor={elements.darkColor}
                cols={elements.keyStyleCol}
                width={elements.keyStyleBtn}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
