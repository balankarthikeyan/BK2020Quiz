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
      return(
             <QuizList data={this.props} />
      )
  }
}export { Quiz }
export default Quiz

