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
      case /^[0-9+\-*.\/]*$/.test(key):
        handleNumbers(key);
        break;
      case /=/.test(key):
        // hendleMath();
        break;
    }
  };

  const clearHooks = () => {
    setInitialValue(["0"]);
    setInputs([]);
    setAppend(true);
  };

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
      
    } else if (/[+*\/-]/.test(newInputs[newInputs.length - 1])) {
      console.log("error too many operators");
    } else {
      setInputs([...inputs, key]);
      setAppend(true);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="wrapper border border-info rounded bg-secondary ps-3 py-3">
        <Displayer displayer={initalValue} />
        <div className="row row-cols-5 p-0 mx-0">
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
