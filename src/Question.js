
import React, { useState } from "react";
import Stars from "./Stars";
import quizData from "./quizData";
const Question = ({ question, category, choices, correctAnswer, onAnswerSelected, currentQuestion, totalQuestions }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleChoiceClick = (choice) => {
    if (!isAnswerSubmitted) {
      setSelectedChoice(choice);
    }
  };

  const handleNextClick = () => {
    setIsAnswerSubmitted(false);
    setSelectedChoice(null);
    setIsCorrectAnswer(false);
    onAnswerSelected(isCorrectAnswer);
  };

  const checkAnswer = (choice) => {
    if (choice === correctAnswer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
    setIsAnswerSubmitted(true);
  };

  const getChoiceClassName = (choiceIndex) => {
    let className = "btn btn-outline-dark btn-block";
    if (isAnswerSubmitted) {
      className += choiceIndex === correctAnswer ? " bg-light" : " bg-secondary";
    }
    if (selectedChoice === choiceIndex) {
      className += " selected";
    }
    return className;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">
          Question {currentQuestion + 1} of {totalQuestions}
        </h1>
        <p className="card-subtitle mb-2 text-muted">{decodeURIComponent(category)}</p>
        <Stars difficulty={quizData[currentQuestion].difficulty === "hard" ? 3 : quizData[currentQuestion].difficulty === "medium" ? 2 : 1} />
        <h3 className="card-title">{decodeURIComponent(question)}</h3>
        <div className="container">
          <div className="row">
            {choices.map((choice, index) => (
              <div className="col-sm-6" key={index}>
                <button
                  className={`mb-4 mt-4 ${getChoiceClassName(index)}`}
                  onClick={() => {
                    handleChoiceClick(index);
                    checkAnswer(index);
                  }}
                  disabled={isAnswerSubmitted}
                >
                  {decodeURIComponent(choice)}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div class="text-center">
        {isAnswerSubmitted && (
          <h3 className={`text-${isCorrectAnswer ? "success" : "danger"}`}>
            {isCorrectAnswer ? "Correct" : "Sorry. Please try again."}
          </h3>
        )}
        {isAnswerSubmitted && (
          <button className="btn btn-outline-secondary mt-2 -center"   onClick={handleNextClick}>
            Next Question
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default Question;
