import React from 'react'
import QuizLogo from '../assets/quiz-logo.png'

const Header = () => {
  return (
    <header><img src={QuizLogo} alt='Quiz logo'></img>
    <h1>React Quiz</h1>
    </header>
  )
}

export default Header