import * as React from 'react'
import Link from 'next/link'

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const IconLoading = styled.div`
  font-size: 20vw;
  animation: 30s ${fadeIn} ease infinite;
`
function Home() {
  const imgStyle: object = {
    paddingTop: 20,
    width: 200,
  }

  const sectionStyle: object = {
    textAlign: 'center',
  }

  return (
    <main>
      <section style={sectionStyle}>
        <h1>Home Page!</h1>
        <IconLoading>🌕</IconLoading>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  )
}

export { Home }
export default Home
