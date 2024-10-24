import React, { useState } from 'react'
import QUESTIONS from '../questions.js'
import QuizCompleteImg from '../assets/quiz-complete.png'
const Quiz = () => {

    const [userAnswers, setuserAnswers] = useState([])
    const activeQuestionIndex=userAnswers.length;
    const quizCompleted=activeQuestionIndex===QUESTIONS.length;
    if(quizCompleted){
      return (<div id="summary">
      <img src={QuizCompleteImg}></img>
      <h2>Quiz Completed</h2>

      </div>)

      }
   const shuffledAnswers=[...QUESTIONS[activeQuestionIndex].answers];
   shuffledAnswers.sort(()=>Math.random() - 0.5);

function handleSelectAnswer(selectedAnswer){
setuserAnswers((prev)=>{
return[...prev,selectedAnswer]
})
}
  return (
    <>
    <div id="quiz">
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer)=>{
         return ( <li key={answer} className="answer">
            <button onClick={()=>{handleSelectAnswer(answer)}}>{answer}</button>
          </li>)
        })}</ul>
      </div></>
  )
}

export default Quiz