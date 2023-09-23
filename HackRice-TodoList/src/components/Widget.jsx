import React from "react";
import "./Widget.css";

function Widget({ title }) {
  return (
    <div className="Widget">
      <h2>{title}</h2>
      {/* Widget content goes here */}
    </div>
  );
}

export default Widget;
