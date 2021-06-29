import type { AppProps } from 'next/app'
import Head from 'next/head'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'

//ta sem ../ devido a config do tsconfig.json
import GlobalStyle from 'styles/global'

//Colocar info como title do webApp, o favicon,

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
        <DefaultSeo {...SEO} />
      </Head>
      <GlobalStyle />
      <NextNprogress
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
