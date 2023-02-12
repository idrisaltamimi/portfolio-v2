import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { homeAr, homeEn, headerAr, headerEn, servicesAr, servicesEn } from './locales'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: { ...headerEn },
          home: { ...homeEn },
          services: { ...servicesEn },
          or: 'or'
        }
      },
      ar: {
        translation: {
          header: { ...headerAr },
          home: { ...homeAr },
          services: { ...servicesAr },
          or: 'أو'
        }
      }
    }
  })

export default i18n