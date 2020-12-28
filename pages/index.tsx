import * as React from 'react'
import Link from 'next/link'
import {QuizContext} from '../GlobalContext/context'

import styled from 'styled-components'

const IconLoading = styled.div`
  font-size: 20vw;
`
function Home() {
  const data = React.useContext(QuizContext)

  console.log(data, )
  return (
    <main>
        <h1>Home Page!</h1>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
    </main>
  )
}

export { Home }
export default Home
