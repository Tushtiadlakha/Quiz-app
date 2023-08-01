// Stars.js
import React from "react";

const Stars = ({ difficulty }) => {
  return (
    <div>
      {Array.from({ length: difficulty }).map((_, index) => (
        <span key={index}>&#9733;</span>
      ))}
    </div>
  );
};

export default Stars;
