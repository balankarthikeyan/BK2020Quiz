import React from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'
import {QuizContext} from '../GlobalContext/context'

function QuizTemplate(props = {}) {
  const Button = styled.button`
    padding: 10px 20px;
    background: black;
    color: white;
    text-transform: uppercase;
    font-size: 1vw;
    border: none;
    margin: 5px;
    ${(props) =>
      props.active &&
      css`
      background: red;
      color: black;
      `};
  `
  
  const { questionNumber = 0, question = 'text', answers = ['option 01', 'option 02'], onToggle = () => '' as any} = props as any
  return <div>
          <h1>{question}</h1>
          {answers.length > 0 ? answers.map((item = '', index = 0) => {
          const [isVisible, setVisibility] = React.useState(false);
          const toggleVisibility = ()  => {
            setVisibility(currentVisibility => !currentVisibility);
            onToggle({index,item, question, questionNumber })
            
          }
        return <React.Fragment key={`button_${index}`}>
                <Button active={isVisible} onClick={(e) => {
                  onToggle({index,item, question, questionNumber})
                  toggleVisibility()
                }} key={`${index}`}>
                    {item}
                </Button> 
              </React.Fragment>
          }) : <></>}
        </div>
}

function QuizList() {
  const {fetchListData:list ={}} = React.useContext(QuizContext)
  const onToggle = (obj = {}) => {
    if(obj){
      list[obj.questionNumber].choosed = obj.index
    }
  }
  return list.length > 0 ? list.map((item, index) => {
    return <React.Fragment key={`item_${index}`}><QuizTemplate questionNumber={index} answers={item.answers} question={item.question} onToggle={onToggle} /></React.Fragment>
  }) : <></>
}

function Quiz(props = {}) {
  const Main = styled.main`
  width: 70%;
  margin: auto;
  text-align: center;
`
const Button = styled.button`
    padding: 10px 20px;
    background: black;
    color: white;
    text-transform: uppercase;
    font-size: 1vw;
    border: none;
    margin: 5px;
    margin-top: 40px;
   
  `

  return (
    <Main>
    <h1>About Page</h1>
    <QuizList />
    <Link href="/result">
        <Button> Submit </Button>
      </Link>
  </Main>
  )
}

Quiz.getInitialProps = async ()  => {
  const isServer = typeof window === 'undefined'
  return { isServer }
}



export { Quiz }
export default Quiz
