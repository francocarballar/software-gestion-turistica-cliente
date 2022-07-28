import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import { NavBar } from '../src/components/NavBar'
import { Settings } from '../src/components/Settings'

function MyApp ({ Component, pageProps }) {
  const [statusSettings, setSettings] = useState(false)
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
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
      <Settings statusSettings={statusSettings} setSettings={setSettings} />
      <NavBar setSettings={setSettings} statusSettings={statusSettings} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
