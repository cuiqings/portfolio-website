import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initTheme: () => void;
}

const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * Theme Store
 * Manages theme state (light/dark mode) with persistence to localStorage
 * and initialization from system preferences
 */
export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'dark',

  setTheme: (theme: Theme) => {
    console.log('[ThemeStore] Setting theme to:', theme);
    set({ theme });
    // Persist to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    // Update HTML root class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('[ThemeStore] Added dark class to documentElement');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('[ThemeStore] Removed dark class from documentElement');
    }
    console.log('[ThemeStore] Current classes:', document.documentElement.className);
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('[ThemeStore] Toggling theme from', currentTheme, 'to', newTheme);
    get().setTheme(newTheme);
  },

  initTheme: () => {
    // Check localStorage first
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      get().setTheme(storedTheme);
      return;
    }

    // Fall back to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    get().setTheme(prefersDark ? 'dark' : 'light');
  },
}));
