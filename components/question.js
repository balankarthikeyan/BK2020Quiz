import QuestionAnswerContainer from './questionAnswerContainer'

export default ({ question, onAnswer }) => (
  <div className="question w-75 center">
    <QuestionAnswerContainer question={question} onAnswer={onAnswer} />
  </div>
)
