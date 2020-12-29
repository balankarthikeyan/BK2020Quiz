import React from 'react'
import Link from 'next/link'
import Progress from './progress'
import Question from './question'
import BackButton from './backButton'
import QuizResults from './quizResults'

class QuizList extends React.Component {
  constructor() {
    super()

    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleBackButton = this.handleBackButton.bind(this)

    this.state = {
      answers: [],
      currentQuestion: 1,
    }
  }

  handleAnswer(answerId) {
    this.setState({
      answers: [...this.state.answers, answerId],
      currentQuestion: this.state.currentQuestion + 1,
    })
  }

  handleBackButton() {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1,
    })
  }

  renderQuiz(currentQuestionIndex, totalQuestions) {
    const {
      data: { questions },
      data,
    } = this.props
    const currentQuestion = questions[currentQuestionIndex - 1]

    return (
      <div>
        <Progress current={currentQuestionIndex} total={totalQuestions} />
        <Question question={currentQuestion} onAnswer={this.handleAnswer} />
      </div>
    )
  }

  renderQuizResults() {
    return <QuizResults data={this.props.data} answers={this.state.answers} />
  }

  render() {
    const {
      data: { questions },
    } = this.props
    const totalQuestions = questions.length
    const currentQuestionIndex = this.state.currentQuestion
    const currentQuestion = questions[currentQuestionIndex - 1]

    const renderComponent =
      currentQuestionIndex > totalQuestions
        ? this.renderQuizResults()
        : this.renderQuiz(currentQuestionIndex, totalQuestions)

    const renderBackButton =
      currentQuestionIndex > 1 ? (
        <BackButton handleClick={this.handleBackButton} />
      ) : (
        ''
      )

    return (
      <div id="quiz">
        <h2 id="quiz-title" className="f2 tc" />
        {renderComponent}
        {/* {renderBackButton} */}
      </div>
    )
  }
}

export default QuizList
