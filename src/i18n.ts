import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTranslations from './locales/zh.json';
import enTranslations from './locales/en.json';

// Initialize i18next
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      zh: {
        translation: zhTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: 'en', // Default language (will be overridden by language store)
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense mode for better control
    },
  });

export default i18n;
