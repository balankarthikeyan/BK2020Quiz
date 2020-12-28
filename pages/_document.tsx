/**
 * @important @note
 * - _document is only rendered on the server side and not on the client side
 * - Event handlers like onClick can't be added to this file
 * - file name must be _document.js
 * - path: pages/_document.js
 * https://nextjs.org/docs#custom-document
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: React.ComponentType) => (props: {
            [key: string]: unknown
          }) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const styleElements = sheet.getStyleElement()

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styleElements}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
