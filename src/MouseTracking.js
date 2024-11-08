import React, { useState } from "react";
import ReactDOM from "react-dom";

const MouseTracking = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const onHandleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      style={{ height: "50vh", background: "blue" }}
      onMouseMove={onHandleMouseMove}
    >
      <h1>
        Mouse Position : ({position.x},{position.y})
      </h1>
      ;
    </div>
  );
};

export default MouseTracking;

//ReactDOM.render(<Product />, document.getElementById("root"));
