import React from "react";
type Props = {
  question: string;
  answers: string[];
  questionNumber: number;
  userAnswer:boolean;
  totalQuestions:number;
  callBack:any
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  questionNumber,
  userAnswer,
  totalQuestions,
  callBack,
}) => {
  return <div>

    <p>{`question ${questionNumber}/${totalQuestions}`}</p>
    <p>{question}</p>
    {
       answers.map((answer)=>{
        return <button disabled={userAnswer}>{answer}</button>
       })
    }
    <button>Next Question </button>
  </div>;
};

export default QuestionCard;
