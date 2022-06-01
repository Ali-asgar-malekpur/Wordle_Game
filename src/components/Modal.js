import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Congratulations!<br/>You Won!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <p className="solution">The Wordle was: {solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  )
}
