import React, { useEffect, useState } from "react";
import "./App.css";

import Displayer from "./Components/displayer";
import Inputs from "./Components/inputs";
import keysBank from "./Components/inputsBank";

function App() {
  const [value, setValue] = useState(["0"]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    if (inputs.length === 0) {
      setValue(["0"]);
    } else {
      setValue(inputs);
      console.log(inputs);
    }
  }, [inputs]);

  const handleClick = (key) => {
    switch (true) {
      case /AC/.test(key):
        clearHooks();
        break;
      case /[0-9.]/.test(key):
        handleNumbers(key);
        break;
      case /[+*/-]/.test(key):
        // hendleOperators();
        break;
      case /=/.test(key):
        // hendleMath();
        break;
    }
  };

  const clearHooks = () => {
    setValue(["0"]);
    setInputs([]);
  };

  const handleNumbers = (key) => {
    setInputs(prevInputs => [...prevInputs, key])
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="wrapper border border-info rounded bg-secondary ps-3 py-3">
        <Displayer displayer={value} />
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
