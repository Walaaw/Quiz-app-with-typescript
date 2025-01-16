import React from "react";
type Props = {
  question: string;
  answers: string[];
  questionNumber: number;
  userAnswer: any;
  totalQuestions: number;
  callBack: any;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  questionNumber,
  userAnswer,
  totalQuestions,
  callBack,
}) => {
  return (
    <div>
      <p>{`question ${questionNumber}/${totalQuestions}`}</p>
      <p>{question}</p>
      {answers?.map((answer, index) => {
        return (
          <button key={index} disabled={userAnswer} value={answer} onClick={callBack}>
            {answer}
          </button>
        );
      })}
     
    </div>
  );
};

export default QuestionCard;
