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
  

  .answer-ui {
    width: 50%;
    margin: auto;
    

    .selected {
      /* background-color:#ffaeae; */
      &::after {
      content: 'Selected Wrong';
      padding-left:10px;
      font-weight:bold;
      color:red;
      }
    }
    .correct {
    /* background-color:#2cdc5c; */
  }
    .correct.selected {
      &::after {
      content: 'Selected Correct';
      padding-left:10px;
      font-weight:bold;
      color:green;
      }
    }
  }
  .card-ui {
    box-shadow: 2px 1px 6px;
    padding: 20px;
    margin: 20px;
}
`

      return(
        <Main>
             <QuizList data={this.props} />
        </Main>
      )
  }
}export { Quiz }
export default Quiz

