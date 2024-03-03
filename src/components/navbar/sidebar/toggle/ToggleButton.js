import React from "react";
import "../style.css";

export const ToggleButton = ({ setOpen }) => {
  return (
    <button className="toggle" onClick={() => setOpen((prev) => !prev)}>
      button
    </button>
  );
};
