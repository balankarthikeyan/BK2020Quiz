import QuestionAnswerContainer from './questionAnswerContainer'

export default ({ question, onAnswer }) => (
  <div className="question">
    <QuestionAnswerContainer question={question} onAnswer={onAnswer} />
  </div>
)
