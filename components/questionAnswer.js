import React from 'react'
import Link from 'next/link'

export default ({ answer, onAnswer, id, correct, isResult = false }) => {
  let className = ''

  if (isResult === true) {
    className = `${correct === true ? 'correct' : 'incorrect'}`
  }
  return (
    <div className={`${className} answer-ui`} onClick={() => onAnswer(id)}>
      <div className="">
        <button className="choose-button">{answer}</button>
      </div>
    </div>
  )
}
