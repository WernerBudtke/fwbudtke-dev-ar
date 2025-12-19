import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

// determine runtime mode safely (works in Node, Vite, and tests)
const runtimeMode =
  typeof process !== 'undefined'
    ? process.env.NODE_ENV
    : typeof import.meta !== 'undefined'
    ? (import.meta as any).env?.MODE
    : undefined;

const shouldUseLangDetector = runtimeMode !== 'test';

// register only the language detector in non-test environments
if (shouldUseLangDetector) {
  i18n.use(LanguageDetector);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
