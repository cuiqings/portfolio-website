import React from 'react';
import { motion } from 'framer-motion';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success';
  onClick?: () => void;
  active?: boolean;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  onClick,
  active = false,
}) => {
  const isClickable = !!onClick;

  // Variant styles
  const variantClasses = {
    default: active
      ? 'bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-900'
      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    primary: active
      ? 'bg-primary-600 text-white dark:bg-primary-500'
      : 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
    success: active
      ? 'bg-green-600 text-white dark:bg-green-500'
      : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  };

  const baseClasses =
    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors';

  const clickableClasses = isClickable
    ? 'cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
    : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${clickableClasses}`;

  if (isClickable) {
    return (
      <motion.button
        className={combinedClasses}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
      >
        {children}
      </motion.button>
    );
  }

  return <span className={combinedClasses}>{children}</span>;
};

export default Tag;
