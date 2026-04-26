import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  const baseClasses =
    'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden';

  const hoverClasses = hoverable
    ? 'cursor-pointer transition-all duration-300'
    : '';

  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  const cardContent = <div className="p-6">{children}</div>;

  if (hoverable) {
    return (
      <motion.div
        className={combinedClasses}
        onClick={onClick}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return <div className={combinedClasses}>{cardContent}</div>;
};

export default Card;
