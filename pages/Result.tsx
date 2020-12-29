import React from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'
import {QuizContext} from '../GlobalContext/context'





function Result(props = {}) {
  const Main = styled.main`
  width: 70%;
  margin: auto;
  text-align: center;
`

const Data = React.useContext(QuizContext)

  // const {isServer = false} = props as any

  console.log('result', Data)
  return (
    <Main>
    <h1>Result</h1>
    </Main>
  )
}

Result.getInitialProps = async ()  => {
  const isServer = typeof window === 'undefined'
  return { isServer }
}



export { Result }
export default Result
