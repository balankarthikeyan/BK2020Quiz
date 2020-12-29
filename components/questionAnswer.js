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
        <p>{answer}</p>
      </div>
    </div>
  )
}
