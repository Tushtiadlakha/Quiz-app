// Question.js
import React from "react";

const Question = ({ question, choices, selectedChoice, onChoiceClick }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{decodeURIComponent(question)}</h2>
        <ul className="list-group">
          {choices.map((choice, index) => (
            <li key={index} className="list-group-item">
              <button
                className={`btn btn-block btn-light ${selectedChoice === index ? "selected" : ""}`}
                onClick={() => onChoiceClick(index)}
                disabled={selectedChoice !== -1}
              >
                {decodeURIComponent(choice)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;
