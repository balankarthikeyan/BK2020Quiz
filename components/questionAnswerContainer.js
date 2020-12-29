import QuestionAnswer from './questionAnswer'

class QuestionAnswerContainer extends React.Component {
  renderAnswers() {
    const { onAnswer, question } = this.props
    const { answers } = question

    return answers.map((answer, index) => {
      const answerKey = `answer=${index}`
      return (
        <QuestionAnswer
          answer={answer}
          key={answerKey}
          id={index}
          onAnswer={onAnswer}
        />
      )
    })
  }

  render() {
    const { onAnswer, question } = this.props
    const { answers, title } = question
    return (
      <div className="mw6 center">
        {title && <h1>{title}</h1>}
        {this.renderAnswers()}
      </div>
    )
  }
}

export default QuestionAnswerContainer
