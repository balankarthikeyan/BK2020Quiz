import * as React from 'react'
import Link from 'next/link'

class Quiz extends React.Component {
  static getInitialProps() {
    const isServer = typeof window === 'undefined'
    return { isServer }
  }

  render() {
    return (
      <main>
        <h1>About Page</h1>
        <section>
          <p>
            This is another page of the SSR example, you accessed it{' '}
            <strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
          </p>
          <p>You can reload to see how the page change.</p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    )
  }
}

export { Quiz }
export default Quiz
