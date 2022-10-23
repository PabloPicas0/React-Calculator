import React from "react";

const Displayer = (props) => {
  return (
    <>
      <div
        id="mathDisplay"
        className="text-end text-light text-break pb-3 pt-4 display">
        <p className="m-0 mb-2 math">
          {props.expression === "" ? "" : props.expression}
        </p>
        <p id="display" className="m-0 result">
          {props.currentValue === "" ? 0 : props.currentValue}
        </p>
      </div>
    </>
  );
};

export default Displayer;
