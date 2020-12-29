import React from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'
import {QuizContext} from '../GlobalContext/context'
import QuizList from '../components/quiz.js'
import stub from '../data/stub'


 class Quiz extends React.Component {

  static async getInitialProps () {
      return stub
  }

  render () {
    const Main = styled.main`
  width: 70%;
  margin: auto;
  text-align: center;

  .button-ui{
      padding: 10px 20px;
      background: black;
      color: white;
      text-transform: uppercase;
      font-size: 1vw;
      border: none;
    }
    button.choose-button {
    background: transparent;
    border: 1px solid;
    padding: 6px;
    min-width: 60%;
    margin-bottom: 10px; 
    cursor: pointer;
    font-size: 1vw;

    &:hover {
      background: black;
      color: white;
    }
}

  .answer-ui {
    width: 50%;
    margin: auto;

    
    
  .selected::before {
    content: '✓';
    position: absolute;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
}

    .selected, .correct {
      padding: 6px;
      position: relative;
    }
    .selected {
      /* background-color:#ffaeae; */
      border: 1px solid;
      border-color:red;
      &::after {
      content: 'Incorrect';
      padding-left:10px;
      font-weight:bold;
      color:red;
      }
    }
    .correct {
      border: 1px solid;
      border-color:green;
      &::after {
      content: 'Correct';
      padding-left:10px;
      font-weight:bold;
      color:green;
      }
  }
    .correct.selected {
      border: 1px solid;
      border-color:green;
      &::after {
      content: ' Correct';
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
}

export { Quiz }
export default Quiz

