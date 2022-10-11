import React, { useEffect, useState } from "react";
import "./App.css";

import Displayer from "./Components/displayer";
import Inputs from "./Components/inputs";
import keysBank from "./Components/inputsBank";

function App() {
  const [valueDisplayed, setValueDisplayed] = useState(0);
  const [inputs, setInuts] = useState("");

  useEffect(() => {
    if (inputs.length === 0) {
      setValueDisplayed(0);
    } else {
      setValueDisplayed(inputs);
      console.log(inputs);
    }
  }, [inputs]);

  const handleClick = (e) => {
    if (e.target.value === "") {
      setInuts("");
    }
    setInuts((prev) => prev + e.target.value);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="wrapper border border-info rounded bg-secondary ps-3 py-3">
        <Displayer displayer={valueDisplayed} />
        <div className="row row-cols-5 p-0 mx-0">
          {keysBank.map((elements, index, array) => {
            return (
              <Inputs
                key={index}
                keyDisplayed={array[index].keyDisplayed}
                id={array[index].id}
                value={array[index].value}
                darkColor={array[index].darkColor}
                cols={array[index].keyStyleCol}
                width={array[index].keyStyleBtn}
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
