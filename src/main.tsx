import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n' // Initialize i18n
import { useLanguageStore } from './store/languageStore'

// Initialize language before rendering
useLanguageStore.getState().initLanguage();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
