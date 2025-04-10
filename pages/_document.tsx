import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument {
  static async getInitialProps (ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <div style={{scrollBehavior:'smooth'}}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href="https://www.psicologiaintegraldv.com/" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}