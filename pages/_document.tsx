import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => (
  <Html lang={'en'}>
    <Head>
      <link
      rel={'icon'}
      type={'image/svg+xml'}
      href={'/favicon.svg'} />
      <link
      rel={'stylesheet'}
      href={'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional'} />
      <link
      href={'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css'}
      rel={'stylesheet'}
      as={'style'}
      crossOrigin={'true'} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument