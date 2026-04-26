import React from 'react';
import { useTranslation } from 'react-i18next';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  fullScreen = false,
  text 
}) => {
  const { t } = useTranslation();
  const displayText = text || t('common.loading');
  
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        className={`
          ${sizeClasses[size]}
          border-primary-600 border-t-transparent
          dark:border-primary-400 dark:border-t-transparent
          rounded-full animate-spin
        `}
        role="status"
        aria-label={displayText}
      />
      {displayText && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {displayText}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
        role="alert"
        aria-busy="true"
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loading;
