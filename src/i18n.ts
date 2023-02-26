import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import {
  homeAr,
  homeEn,
  headerAr,
  headerEn,
  portfolioEn,
  portfolioAr,
  servicesAr,
  servicesEn,
  contactAr,
  contactEn
} from './locales'

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
          portfolio: { ...portfolioEn },
          services: { ...servicesEn },
          contact: { ...contactEn },
          footer: 'Idris AlTamimi 2023',
          or: 'or'
        }
      },
      ar: {
        translation: {
          header: { ...headerAr },
          home: { ...homeAr },
          portfolio: { ...portfolioAr },
          services: { ...servicesAr },
          contact: { ...contactAr },
          footer: 'إدريس التميمي ٢٠٢٣',
          or: 'أو'
        }
      }
    }
  })

export default i18n