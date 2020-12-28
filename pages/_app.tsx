/**
 * @important @note
 * - App component to initialize pages
 * - Global components such as Header, Footer, Navigation Menu, Modals etc., can be added here
 * - file name must be _app.js
 * - path: pages/_app.js
 * https://nextjs.org/docs#custom-app
 */
import * as React from 'react'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {QuizContext} from '../GlobalContext/context'
// import {GlobalFixture} from '../GlobalContext/GlobalFixture'
const AppGlobalStyles = createGlobalStyle`
  :root {
    --color-orange: white;
  }

  html {
    box-sizing: border-box;
    background-color: var(--color-orange);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    padding: 0;
    font-family: "Roboto", "Arial", sans-serif, serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  getData() {
    return require("../questions.json")
  }

  render() {
    const { Component, pageProps } = this.props
    
    const AppText = () => {

      const [fetchListData, setFetchListData] = React.useState(this.getData() || [])
    
      const contextProps = {fetchListData}
      return <QuizContext.Provider value={contextProps}>
      <Container>
        <AppGlobalStyles />
        <Header />
        
        <Component {...pageProps} />
        <Footer />
      </Container>
    </QuizContext.Provider>
    }
    return (
      <AppText />
    )
  }
}

export default MyApp
