import React, { useState } from "react";
import "./App.css";

import Displayer from "./Components/displayer";
import Inputs from "./Components/inputs";
import keysBank from "./Components/inputsBank";

function App() {
  const [mathDisplayed, setMathDisplayed] = useState([0])

  const handleClick = (event) => {
    if (event.target.value === "") {
      setMathDisplayed((arrOfValues) => (arrOfValues = [0]));
    }
    setMathDisplayed((prev) => [...prev, event.target.value])
  }

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="wrapper border border-info rounded bg-secondary ps-3 py-3">
        <Displayer displayer={mathDisplayed}/>
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
