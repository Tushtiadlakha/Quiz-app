// NextButton.js
import React from "react";

const NextButton = ({ onClick }) => {
  return (
    <div>
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Next Question
      </button>
    </div>
  );
};

export default NextButton;
