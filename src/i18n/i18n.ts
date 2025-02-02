import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector' // importa el detector de idiomas del navegador
import Backend from 'i18next-http-backend'

import en from './locales/en.json'
import es from './locales/es.json'
import ko from './locales/ko.json'

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  ko: {
    translation: ko,
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector) // utiliza el detector de idiomas del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // idioma de respaldo si no se encuentra la traducción
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
