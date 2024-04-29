import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translations.json';
import arTranslation from './locales/sa/translations.json';
import frTranslation from './locales/fr/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      sa: { translation: arTranslation },
      fr: { translation: frTranslation },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // Fallback language in case translation is missing
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
