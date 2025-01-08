import { useState } from "react";
import QuestionCard from "./componnets/QuestionCard";
import { Difficulty, fetchQuestion } from "./Api";

function App() {
  const [question, setQuestion] = useState("");
  const [questionsLoading, setquestionsLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
console.log(fetchQuestion(totalQuestions,Difficulty.EASY));

  
  return (
    <div className="App">
      <h1>Quiz app</h1>
      <button>Start Quiz </button>
      <p>score :</p>
      {/* <QuestionCard
        question={question}
        answers={answers}
        questionNumber={questionNumber}
        userAnswer={userAnswer}
        totalQuestions={totalQuestions}
        callBack={checkAnswer}
      /> */}
    </div>
  );
}

export default App;
