import React, { useState } from "react";
import "./App.css";

import Displayer from "./Components/displayer";
import Inputs from "./Components/inputs";
import keysBank from "./Components/inputsBank";

function App() {
  const [expression, setExpression] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (key) => {
    switch (true) {
      case /AC/.test(key):
        clearHooks();
        break;
      case /back/.test(key):
        deleteOne();
        break;
      case /^[0-9]*$/.test(key):
        handleNumbers(key);
        break;
      case /[+\-*/.]/.test(key):
        handleOperators(key);
        break;
      case /=/.test(key):
        handleMath();
        break;
    }
  };

  const clearHooks = () => {
    setExpression("");
    setCurrentValue("");
  };

  const deleteOne = () => {
    setExpression((prev) =>
      prev.split("").slice(0, -1).join().replace(/,/g, "")
    );
    setCurrentValue((prev) =>
      prev.split("").slice(0, -1).join().replace(/,/g, "")
    );
  };

  const handleNumbers = (key) => {
    if (key === 0 && expression === "") {
      console.log("Error: Multple 0 detected");
      return;
    } else if (typeof key === "number") {
      setExpression((prev) => prev + key);
      setCurrentValue((prev) => prev + key);
    }
  };

  const handleOperators = (key) => {
    if (expression === "" && /[+\-*/.]/.test(key)) {
      return;
    }
    if (key === ".") {
      const arrOfValues = currentValue.split(" ");
      const multiDecimal = arrOfValues[arrOfValues.length - 1].indexOf(".") > -1 && key === ".";

      setCurrentValue(multiDecimal ? currentValue : currentValue.concat(key));
      setExpression(multiDecimal ? currentValue : currentValue.concat(key));
      console.log(multiDecimal, arrOfValues);
    }
    if (/[+\-*/]/.test(key)) {
      setExpression((prev) => prev + key);
      setCurrentValue((prev) => prev + key);
    }
  };

  const handleMath = () => {
    const chceckForDecimal = expression.split("").includes(".");
    const filterExpression = currentValue
      .replace(/\s+/g, "")
      .match(/(\*|\+|\/|-)?(\.|-)?\d+/g).join('');
    let result;

    if (expression === "") {
      return;
    }
    if (chceckForDecimal) {
      result = parseFloat(eval(filterExpression).toFixed(4));
    } else {
      result = parseFloat(eval(filterExpression));
    }
    setExpression((prev) => prev + " = " + result);
    setCurrentValue(result);
    console.log(filterExpression);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center con-bg">
      <div className="wrapper rounded-2 bg-secondary">
        <Displayer expression={expression} currentValue={currentValue} />
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
