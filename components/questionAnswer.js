import React from 'react'
import Link from 'next/link'

export default ({ answer, onAnswer, id, correct, isResult = false }) => {
  let className = ''

  if (isResult === true) {
    className = `${correct === true ? 'correct' : 'incorrect'}`
  }
  return (
    <div className={className} onClick={() => onAnswer(id)}>
      <div className="dtc w3 f1">
        <i className="dark-gray fa fa-2x fa-check-circle-o" />
      </div>
      <div className="dtc v-mid pl3">
        <p>{answer}</p>
      </div>
    </div>
  )
}
