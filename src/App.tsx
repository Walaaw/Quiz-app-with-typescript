import { useState } from "react";
import QuestionCard from "./componnets/QuestionCard";
import { Difficulty, fetchQuestion, QuestionState } from "./Api";

function App() {

  type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };

  const totalQuestions=10

  const [questions, setQuestions] = useState<QuestionState[]>([]);

  const [questionsLoading, setQuestionsLoading] = useState(false);

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const [questionNumber, setQuestionNumber] = useState(0);
 
  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(true);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    if(!gameOver){

      const answer=e.currentTarget.value

      const correctAnswer=questions[questionNumber].correct_answer

      const correct=correctAnswer===answer

      if(correct){
        setScore(prev=>prev+1)

        const answerObject:AnswerObject={
          question:questions[questionNumber].question,
          answer,
          correctAnswer,
          correct
        }
        setUserAnswers((prev)=>[...prev,answerObject])
      }
    
    }
  };
 

  const startQuiz = async () => {

    setQuestionsLoading(true);

    const allQuestions = await fetchQuestion(totalQuestions, Difficulty.EASY);

    setQuestions(allQuestions);

    setScore(0);

    setUserAnswers([]);

    setGameOver(false);

    setQuestionNumber(0);

    setQuestionsLoading(false);
  };
  
 const handleNextQuestion=()=>{
  if(questionNumber===totalQuestions-1){
    setGameOver(true)
  }
  else{
    setQuestionNumber(questionNumber +1)
  }
    
  
 }

  return (
    <div className="App">
      <h1>Quiz app</h1>

      {(gameOver || userAnswers.length === totalQuestions) && (
        <button onClick={startQuiz}> Start Quiz</button>
      )} 

      {!gameOver && <p>score :{score}</p>}

      {questionsLoading && <p>loading questions </p>}

      {!questionsLoading && !gameOver && (
        <QuestionCard
          question={questions[questionNumber]?.question}
          answers={questions[questionNumber]?.answers}
          questionNumber={questionNumber + 1}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          totalQuestions={totalQuestions}
          callBack={checkAnswer}
        />
      )}

      {userAnswers.length === questionNumber + 1 &&
        questionNumber !== totalQuestions - 1 && (
          <button style={{margin:"10px"}} onClick={handleNextQuestion}>Next Question </button>
        )}
    </div>
  );
}

export default App;
