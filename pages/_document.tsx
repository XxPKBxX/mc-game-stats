import Document, { Html, Head, Main, NextScript } from 'next/document'
import { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // this is overcomplicated as f
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    }
    finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <link
          rel={'icon'}
          type={'image/svg+xml'}
          href={'/favicon.svg'} />
          <link
          href={'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css'}
          rel={'stylesheet'}
          as={'style'}
          crossOrigin={'true'} />
          
          <meta name={'description'} content={'Check Hypixel players\' stats quickly, simply, easily.'} />
          <meta name={'theme-color'} content={'#000000'} />

          <link rel={'icon'} type={'image/png'} sizes={'48x48'} href={'/icons/icon-48x48.png'} />
          <link rel={'mask-icon'} href={'/icons/icon-any.svg'} color={'#000000'} />
              
          <meta name={'twitter:card'} content={'summary'} />
          <meta name={'twitter:url'} content={'https://mc-game-stats.vercel.app'} />
          <meta name={'twitter:title'} content={'MC Game Stats'} />
          <meta name={'twitter:description'} content={'Check Hypixel players\' stats quickly, simply, easily.'} />
          <meta name={'twitter:image'} content={'https://mc-game-stats.vercel.app/icons/icon-512x512.png'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}