export default ({ answer, onAnswer, id, correct }) => (
  <div
    className={`${correct === true ? 'correct' : 'incorrect'}`}
    onClick={() => onAnswer(id)}
  >
    <div className="dtc w3 f1">
      <i className="dark-gray fa fa-2x fa-check-circle-o" />
    </div>
    <div className="dtc v-mid pl3">
      <p>{answer}</p>
    </div>
  </div>
)
