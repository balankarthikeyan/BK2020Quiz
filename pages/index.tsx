import * as React from 'react'
import Link from 'next/link'
import {QuizContext} from '../GlobalContext/context'
import styled from 'styled-components'

const IconLoading = styled.div`
  font-size: 20vw;
`
function Home() {
  const data = React.useContext(QuizContext)
  console.log(data)
  return (
    <main>
        <h1>Home Page!</h1>
        <p>Following quiz provides Multiple Choice Questions (MCQs) related to Javascript Framework. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz.</p>
        <Link href="/quiz">Get Start</Link>
    </main>
  )
}

export { Home }
export default Home
