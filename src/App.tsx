import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useThemeStore } from './store/themeStore';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const initTheme = useThemeStore((state) => state.initTheme);

  // Initialize theme on mount
  useEffect(() => {
    console.log('[App] Initializing theme...');
    initTheme();
  }, [initTheme]);

  // Sync theme changes with DOM
  useEffect(() => {
    console.log('[App] Theme changed to:', theme);
    console.log('[App] documentElement before:', document.documentElement.className);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('[App] documentElement after:', document.documentElement.className);
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
