import React from "react";

const Displayer = (props) => {
  return (
    <>
      <div id="display" className="text-end text-light text-break pb-3 pt-4">
        <p className="m-0 mb-2 result">{props.result}</p>
        <p className="m-0 math">{props.displayer}</p>
      </div>
    </>
  );
};

export default Displayer;
