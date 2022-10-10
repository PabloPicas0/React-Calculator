import React, { useState } from "react";
import "./App.css";

import Displayer from "./Components/displayer";
import Inputs from "./Components/inputs";
import keysBank from "./Components/inputsBank";

function App() {
  const [mathDisplayed, setMathDisplayed] = useState([0])

  const handleClick = (event) => {
    setMathDisplayed((prev) => [...prev, event.target.textContent])
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
