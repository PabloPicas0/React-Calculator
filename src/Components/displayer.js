import React from "react";
import ReactSwitch from "react-switch";

const Displayer = (props) => {
  return (
    <>
      <ReactSwitch className="mb-4 pe-2" checked={true} />
      <div id="display" className="text-end mb-5 text-light text-break">
        <p>{props.displayer}</p>
        <p>{props.result}</p>
      </div>
    </>
  );
};

export default Displayer;
