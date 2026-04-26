import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  technologies: string[];
  selectedTech: string | null;
  onFilterChange: (tech: string | null) => void;
  projectCount: number;
}

/**
 * ProjectFilter Component - Redesigned with Premium Minimalist Aesthetic
 * 精致横向滚动筛选器：下划线激活、项目计数、平滑滚动
 * Requirements: 2.4
 */
const ProjectFilter: React.FC<ProjectFilterProps> = ({
  technologies,
  selectedTech,
  onFilterChange,
  projectCount,
}) => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // 检查滚动状态
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [technologies]);

  // 滚动控制
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* 标题和计数 */}
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-500 font-light">
          {t('projects.filterBy') || 'Filter by'}
        </h2>
        <span className="text-sm text-gray-400 dark:text-gray-600">
          {projectCount} {projectCount === 1 ? 'project' : 'projects'}
        </span>
      </div>

      {/* 滚动容器 */}
      <div className="relative">
        {/* 左侧渐变遮罩 */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        )}

        {/* 右侧渐变遮罩 */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        )}

        {/* 左滚动按钮 */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* 右滚动按钮 */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* 筛选标签 - 横向滚动 */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* "All" 筛选器 */}
          <button
            onClick={() => onFilterChange(null)}
            className="relative flex-shrink-0 group"
          >
            <span
              className={`text-sm tracking-wide transition-colors duration-300 ${
                selectedTech === null
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('projects.filterAll') || 'All'}
            </span>
            {/* 下划线指示器 */}
            {selectedTech === null && (
              <motion.div
                layoutId="activeFilter"
                className="absolute -bottom-2 left-0 right-0 h-px bg-gray-900 dark:bg-white"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          {/* 技术筛选器 */}
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => onFilterChange(tech)}
              className="relative flex-shrink-0 group"
            >
              <span
                className={`text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${
                  selectedTech === tech
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tech}
              </span>
              {/* 下划线指示器 */}
              {selectedTech === tech && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gray-900 dark:bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 底部分隔线 */}
      <div className="mt-2 h-px bg-gray-200 dark:bg-gray-800" />
    </div>
  );
};

export default ProjectFilter;
