import { useLanguageStore } from '../../store/languageStore';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LanguageSwitchProps {
  className?: string;
}

/**
 * Language Switch Component
 * Switches between Chinese and English
 * Updates URL path and persists preference
 * Requirements: 19.2, 19.3, 19.11
 */
const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguageStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';

    // Update language in store (also updates i18next and localStorage)
    setLanguage(newLang);

    // Update URL path (Requirement 19.11)
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentLang = pathSegments[0] === 'zh' || pathSegments[0] === 'en' ? pathSegments[0] : '';

    let newPath: string;
    if (currentLang) {
      // Replace existing language prefix
      pathSegments[0] = newLang;
      newPath = `/${pathSegments.join('/')}`;
    } else {
      // Add language prefix
      newPath = `/${newLang}${location.pathname}`;
    }

    // Navigate to new path with language prefix
    navigate(newPath, { replace: true });
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className={`px-3 py-1 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label={t('language.switch')}
      title={t('language.switch')}
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
};

export default LanguageSwitch;
