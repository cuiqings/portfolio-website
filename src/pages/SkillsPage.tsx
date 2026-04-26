import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  skills,
  getSkillsGroupedByCategory,
  getCategoryInfo,
  type SkillCategory,
} from '../data/skills';

/**
 * SkillsPage Component - Redesigned with Premium Minimalist Aesthetic
 * 极简技能展示：去掉图表、使用进度条、分类展示
 * Requirements: 3.6, 14.3
 */
const SkillsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

  // Get current language
  const currentLang = i18n.language as 'zh' | 'en';

  // Group skills by category
  const skillsByCategory = getSkillsGroupedByCategory();

  // Get all categories
  const categories = Object.keys(skillsByCategory) as SkillCategory[];

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Sort skills by proficiency (highest first)
  const sortedSkills = [...filteredSkills].sort((a, b) => b.proficiency - a.proficiency);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header - 极简风格 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          {/* 装饰线 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-gray-900 dark:bg-gray-100 mb-8 origin-left"
          />
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('skills.title') || 'Skills'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            {t('skills.subtitle') || 'Technologies and tools I work with'}
          </p>
        </motion.div>

        {/* Category Filter - 横向滚动 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2">
            {/* All filter */}
            <button
              onClick={() => setSelectedCategory('all')}
              className="relative flex-shrink-0 group"
            >
              <span
                className={`text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currentLang === 'zh' ? '全部' : 'All'}
              </span>
              {selectedCategory === 'all' && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gray-900 dark:bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Category filters */}
            {categories.map((category) => {
              const categoryInfo = getCategoryInfo(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="relative flex-shrink-0 group"
                >
                  <span
                    className={`text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${
                      selectedCategory === category
                        ? 'text-gray-900 dark:text-white font-medium'
                        : 'text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {categoryInfo?.nameTranslations[currentLang] || category}
                  </span>
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gray-900 dark:bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-2 h-px bg-gray-200 dark:bg-gray-800" />
        </motion.div>

        {/* Skills List - 极简进度条展示 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {sortedSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="group"
            >
              {/* Skill Header */}
              <div className="flex items-baseline justify-between mb-3">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {skill.nameTranslations[currentLang]}
                  </h3>
                  <span className="text-sm text-gray-400 dark:text-gray-600 font-light">
                    {currentLang === 'zh'
                      ? `${skill.yearsOfExperience} 年`
                      : `${skill.yearsOfExperience} yrs`}
                  </span>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-600 font-light tabular-nums">
                  {skill.proficiency}/5
                </span>
              </div>

              {/* Progress Bar - 极简风格 */}
              <div className="relative h-px bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: skill.proficiency / 5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 bg-gray-900 dark:bg-white origin-left"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                {skill.descriptionTranslations[currentLang]}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {sortedSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-32"
          >
            <p className="text-lg text-gray-400 dark:text-gray-600 font-light tracking-wide">
              {currentLang === 'zh' ? '暂无技能' : 'No skills found'}
            </p>
          </motion.div>
        )}

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-16 bg-gray-900 dark:bg-gray-100 mt-24 origin-left"
        />
      </div>
    </div>
  );
};

export default SkillsPage;
