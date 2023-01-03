import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { homeAr, homeEn, headerAr, headerEn } from './locales'

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
        }
      },
      ar: {
        translation: {
          header: { ...headerAr },
          home: { ...homeAr },
        }
      }
    }
  })

export default i18n