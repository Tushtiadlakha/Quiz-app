// ProgressBar.js
import React from "react";

const ProgressBar = ({ current, total, score }) => {
  const progressPercent = ((current + 1) / total) * 100;
  const scorePercent = (score / total) * 100;

  return (
    <>
      <div className="progress" style={{ position: "fixed", top: 0, left: 0, width: "100%",height:'30px',zIndex: 999 }}>
        <div
          className="progress-bar bg-dark"
          role="progressbar"
          style={{ width: `${progressPercent}%` }}
          aria-valuenow={current + 1}
          aria-valuemin="0"
          aria-valuemax={total}
        >
          Question {current + 1} / {total}
        </div>
      </div>
      <p style={{ position: "fixed",left:"25%", bottom: 50 }}>Score: {Math.round(scorePercent)}%</p>
      <div className="progress" style={{ position: "fixed", bottom: 40, height:'20px', width: "50%", }}>
        
        <div
          className={`progress-bar bg-black ${score === total ? "bg-dark" : "bg-dark"}`}
          role="progressbar"
          style={{ width: `${scorePercent}%` }}
          aria-valuenow={score}
          aria-valuemin="0"
          aria-valuemax={total}
        >
          
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
