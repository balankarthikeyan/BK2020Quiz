import React from 'react'
import Link from 'next/link'
import QuestionAnswer from './questionAnswer'

class QuizResults extends React.Component {
  renderAnswers() {
    const {
      data: { questions },
      answers,
    } = this.props

    console.log(questions)

    return questions.map((question, index) => {
      const questionAnswerIndex = answers[index]
      const answer = question.answers[questionAnswerIndex]
      const answerKey = `answer=${index}`
      const { title } = question

      console.log(questionAnswerIndex)

      let className = ''
      className = `${
        (questionAnswerIndex === question.correct) === true
          ? 'correct'
          : 'incorrect'
      }`

      return (
        <div className="card-ui">
          <h2>{title}</h2>
          <div className={` answer-ui`}>
            <div className="">
              {question.answers.map((itemAnswer, answeIndex) => {
                return (
                  <p
                    className={`${
                      answeIndex === question.correct ? 'correct' : ''
                    } ${answeIndex === questionAnswerIndex ? 'selected' : ''}`}
                  >
                    {itemAnswer}
                  </p>
                )
              })}
            </div>
          </div>
          {/* <QuestionAnswer
            correct={questionAnswerIndex === question.correct}
            answer={answer}
            key={answerKey}
            id={index}
            isResult={true}
            onAnswer={() => {}}
          /> */}
        </div>
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
        <Link href="/">
          <button className="button-ui">Back</button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default QuizResults
