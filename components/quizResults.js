import React from 'react'
import Link from 'next/link'
import QuestionAnswer from './questionAnswer'

class QuizResults extends React.Component {
  renderAnswers() {
    const {
      data: { questions },
      answers,
    } = this.props

    return questions.map((question, index) => {
      const questionAnswerIndex = answers[index]
      const answer = question.answers[questionAnswerIndex]
      const answerKey = `answer=${index}`
      const { title } = question
      return (
        <>
          <h2>{title}</h2>
          <QuestionAnswer
            correct={questionAnswerIndex === question.correct}
            answer={answer}
            key={answerKey}
            id={index}
            isResult={true}
            onAnswer={() => {}}
          />
        </>
      )
    })
  }

  render() {
    const {
      data: { title, questions },
    } = this.props

    return (
      <div className="mw6 center tc">
        <h1 className="f4 gray">Answers</h1>
        {this.renderAnswers()}
        <Link href="/">Back</Link>
      </div>
    )
  }
}

export default QuizResults
