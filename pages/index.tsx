import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Main = styled.main`
  width: 70%;
  margin: 15vh auto;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 4vw;
  margin: 20px 0;
  text-transform: uppercase;
  
`
const Paragraph = styled.p`
  font-size: 1vw;
  width: 50%;
  margin:auto;
  margin-bottom: 50px;
`
const Button = styled.button`
  padding: 20px 100px;
  background: black;
  color: white;
  text-transform: uppercase;
  font-size: 1.5vw;
  border: none;
`
function Home() {
  return (
    <Main>
        <Heading>Technical Quiz</Heading>
        <Paragraph>Following quiz provides Multiple Choice Questions (MCQs) related to Javascript Framework. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz.</Paragraph>
        <Link href="/quiz"><Button>Get Start</Button></Link>
        <br/>
        <br/>
        <br/>
    </Main>
  )
}

export { Home }
export default Home
