import React from "react";

const Displayer = (props) => {
  return (
    <>
      <div id="display" className="text-end text-light text-break py-5">
        <p className="m-0">{props.displayer}</p>
        <p className="m-0 mt-2">{props.result}</p>
      </div>
    </>
  );
};

export default Displayer;
