import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument () {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
