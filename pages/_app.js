import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import { NavBar } from '../src/components/NavBar'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='/media/icon/favicon.ico'
          onload="this.rel='stylesheet'"
        />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta
          name='google-site-verification'
          content='E-HfOz7kh6jsoypB9t256TFS-CwC32pTgRYDeLd3Sjg'
          rel='preconnect'
          defer
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,200'
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Script
        defer
        rel='preconnect'
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-VFF6WRN7SM'
      />
      <Script defer rel='preconnect' strategy='lazyOnload'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VFF6WRN7SM', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  )
}

export default MyApp
