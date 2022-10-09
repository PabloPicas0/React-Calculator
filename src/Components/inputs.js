import React from "react";

const Inputs = (props) => {
  return (
    <div className={props.cols}>
      <button id={props.id} type="button" className={`btn ${props.width} p-0 text-center ${props.darkColor}`}>
        {props.keyDisplayed}
      </button>
    </div>
  );
};

export default Inputs;
