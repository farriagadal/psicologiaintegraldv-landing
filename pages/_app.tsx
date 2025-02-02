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
  const { t } = useTranslation()

  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>{`FluAI | ${t('head')}`}</title>
        <meta name="description" content={t('desc') ?? ''} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#202327" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={`FluAI | ${t('head')}`} />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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
    </I18nextProvider>
  )
}