import type { AppProps } from 'next/app'
import Head from 'next/head'
//ta sem ../ devido a config do tsconfig.json
import GlobalStyle from 'styles/global'

//Colocar info como title do webApp, o favicon,

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My trips</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project to show my favorite places in the world"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
