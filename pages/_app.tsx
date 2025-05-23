/* eslint-disable @next/next/next-script-for-ga */
import 'src/styles/main.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/i18n/i18n'
import { useTranslation } from 'react-i18next'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>CAPSI | Centro de Atención Psicológica del Vínculo - Atención Psicológica Integral</title>
        <meta name="description" content="Centro de atención psicológica especializado en terapia individual, parejas y familiar. Acompañamiento profesional para tu desarrollo personal y emocional en Santiago, Chile." />
        <meta name="keywords" content="psicología, terapia, salud mental, psicólogo, psicóloga, terapia familiar, terapia de parejas, atención psicológica, FONASA, Santiago, Chile" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#202327" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CAPSI | Centro de Atención Psicológica del Vínculo" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psicologiaintegraldv.com/" />
        <meta property="og:title" content="CAPSI | Centro de Atención Psicológica del Vínculo" />
        <meta property="og:description" content="Centro de atención psicológica especializado en terapia individual, parejas y familiar. Acompañamiento profesional para tu desarrollo personal." />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.psicologiaintegraldv.com/" />
        <meta property="twitter:title" content="CAPSI | Centro de Atención Psicológica del Vínculo" />
        <meta property="twitter:description" content="Centro de atención psicológica especializado en terapia individual, parejas y familiar." />
        <meta property="twitter:image" content="/images/og-image.jpg" />
        
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
              `,
          }}
        />
      </Head>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </>
  )
}