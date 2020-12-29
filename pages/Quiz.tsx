import React from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'
import {QuizContext} from '../GlobalContext/context'
import QuizList from '../components/quiz.js'
import exampleQuestions from '../data/exampleQuestions'


 class Quiz extends React.Component {

  static async getInitialProps () {
      // TODO: Assume it'll be asynchronous from a data source
      return exampleQuestions
  }

  render () {
    const Main = styled.main`
  width: 70%;
  margin: auto;
  text-align: center;
  .correct, .incorrect {
    padding: 10px;
  }
  /* .correct {
    background-color:green;
  }
  .incorrect {
    background-color:red;
  } */
`

      return(
        <Main>
             <QuizList data={this.props} />
        </Main>
      )
  }
}export { Quiz }
export default Quiz

