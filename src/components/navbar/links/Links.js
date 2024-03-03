import React from "react";
import "../style.css";

const items = ["Homepage", "About", "Experience", "Projects", "Contact"];

export const Links = () => {
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};
