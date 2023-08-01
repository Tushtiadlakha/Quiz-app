
import React from "react";

const Result = ({ score, totalQuestions }) => {
  const scorePercent = (score / totalQuestions) * 100;

  return (
    <div className="progress mt-4">
      <div
        className={`progress-bar bg-black ${score === totalQuestions ? "bg-success" : "bg-danger"}`}
        role="progressbar"
        style={{ width: `${scorePercent}%` }}
        aria-valuenow={score}
        aria-valuemin="0"
        aria-valuemax={totalQuestions}
      >
        Your Score: {score} / {totalQuestions} ({Math.round(scorePercent)}%)
      </div>
    </div>
  );
};

export default Result;
