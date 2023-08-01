// App.js
import React, { useState } from "react";
import Question from "./Question";

import Result from "./Result";
import ProgressBar from "./ProgressBar";
import quizData from "./quizData";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div style={{ background: "white", color: "black", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",width:"100vw"}}>
      <ProgressBar current={currentQuestion} total={quizData.length} score={score} />
      <div style={{ minWidth: "950px",minHeight: "500px"  }}>
        {currentQuestion < quizData.length ? (
          <>
            <Question
              question={quizData[currentQuestion].question}
              category={quizData[currentQuestion].category}
              choices={[...quizData[currentQuestion].incorrect_answers, quizData[currentQuestion].correct_answer]}
              correctAnswer={quizData[currentQuestion].incorrect_answers.length}
              onAnswerSelected={handleAnswerSelected}
              currentQuestion={currentQuestion}
              totalQuestions={quizData.length}
            />
            
          </>
        ) : (
          <Result score={score} totalQuestions={quizData.length} />
        )}
      </div>
    </div>
  );
};

export default App;
