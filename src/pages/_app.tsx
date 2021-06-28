import type { AppProps } from 'next/app'
import Head from 'next/head'
//ta sem ../ devido a config do tsconfig.json
import GlobalStyle from 'styles/global'

//Colocar info como title do webApp, o favicon,

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React,NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
