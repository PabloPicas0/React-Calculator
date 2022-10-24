import React from "react";

const Displayer = (props) => {
  return (
    <>
      <div
        id="mathDisplay"
        className="text-end text-light text-break pb-3 pt-4 display">
        <h4 className="m-0 mb-2">
          {props.expression === "" ? "" : props.expression}
        </h4>
        <h1 id="display" className="m-0">
          {props.currentValue === "" ? 0 : props.currentValue}
        </h1>
      </div>
    </>
  );
};

export default Displayer;
