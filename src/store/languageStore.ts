import { create } from 'zustand';
import i18n from '../i18n';

type Language = 'zh' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  initLanguage: () => void;
}

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

/**
 * Language Store
 * Manages language state and persistence
 * Requirements: 19.4, 19.5
 */
export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',

  /**
   * Set the current language
   * Updates i18next, localStorage, and HTML lang attribute
   */
  setLanguage: (lang: Language) => {
    // Update i18next
    i18n.changeLanguage(lang);

    // Update HTML lang attribute (Requirement 19.12)
    document.documentElement.lang = lang;

    // Persist to localStorage (Requirement 19.5)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

    // Update store state
    set({ language: lang });
  },

  /**
   * Initialize language from browser or localStorage
   * Priority: localStorage > browser language > default (en)
   * Requirements: 19.4, 19.5
   */
  initLanguage: () => {
    // Check localStorage first (Requirement 19.5)
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;

    if (storedLang && (storedLang === 'zh' || storedLang === 'en')) {
      set({ language: storedLang });
      i18n.changeLanguage(storedLang);
      document.documentElement.lang = storedLang;
      return;
    }

    // Check browser language (Requirement 19.4)
    const browserLang = navigator.language.toLowerCase();
    const detectedLang: Language = browserLang.startsWith('zh') ? 'zh' : 'en';

    set({ language: detectedLang });
    i18n.changeLanguage(detectedLang);
    document.documentElement.lang = detectedLang;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, detectedLang);
  },
}));
