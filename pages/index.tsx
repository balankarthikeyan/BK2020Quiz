import * as React from 'react'
import Link from 'next/link'
import {QuizContext} from '../GlobalContext/context'
import styled from 'styled-components'

const Main = styled.main`
  width: 70%;
  margin: auto;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 4vw;
  margin: 20px 0;
`
const Paragraph = styled.p`
  font-size: 1vw;
`
const Button = styled.button`
  padding: 10px 20px;
  background: black;
  color: white;
  text-transform: uppercase;
  font-size: 1vw;
  border: none;
`
function Home() {
  const data = React.useContext(QuizContext) as any
  console.log('---data', data)
  return (
    <Main>
        <Heading>Technical Quiz</Heading>
        <Paragraph>Following quiz provides Multiple Choice Questions (MCQs) related to Javascript Framework. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz.</Paragraph>
        <Link href="/quiz"><Button>Get Start</Button></Link>
    </Main>
  )
}

export { Home }
export default Home
