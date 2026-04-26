import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import { useLanguageStore } from '../../store/languageStore';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

/**
 * ProjectDetail Component - Redesigned with Premium Minimalist Aesthetic
 * 全屏沉浸式详情页：大图展示、分栏布局、优雅动画
 * Requirements: 2.2, 2.3, 2.5
 */
const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  // Get localized project data
  const projectName = project.nameTranslations[language] || project.name;
  const projectDescription =
    project.descriptionTranslations[language] || project.description;
  const details = project.detailsTranslations[language] || project.details;

  // Format date range
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const startDate = formatDate(project.startDate);
  const endDate = project.endDate
    ? formatDate(project.endDate)
    : t('about.present');

  // 键盘 ESC 关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white dark:bg-gray-950 overflow-y-auto"
    >
      {/* 关闭按钮 - 固定在右上角 */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-900 dark:hover:border-gray-100 transition-colors group"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6 text-gray-900 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>

      {/* 主内容区 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        {/* Hero Section - 大图 + 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          {/* 装饰线 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-gray-900 dark:bg-gray-100 mb-8 origin-left"
          />

          {/* 项目标题 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {projectName}
          </h1>

          {/* 元信息 */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="block text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-1">
                {t('projects.duration') || 'Duration'}
              </span>
              <span className="font-light">
                {startDate} — {endDate}
              </span>
            </div>
            <div>
              <span className="block text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-1">
                {t('projects.technologies') || 'Technologies'}
              </span>
              <span className="font-light">{project.technologies.length} techs</span>
            </div>
          </div>
        </motion.div>

        {/* 大图展示 */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
              <img
                src={project.images[0]}
                alt={projectName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"%3E%3Crect width="1600" height="900" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </motion.div>
        )}

        {/* 内容区 - 两栏布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* 左侧 - 项目描述和技术栈 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-12"
          >
            {/* 项目描述 */}
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-4 font-light">
                {t('projects.overview') || 'Overview'}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {projectDescription}
              </p>
            </div>

            {/* 技术栈 */}
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-4 font-light">
                {t('projects.technologies') || 'Technologies'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-col gap-3 pt-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <span>{t('projects.viewDemo') || 'View Demo'}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-medium tracking-wide uppercase hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <span>{t('projects.viewCode') || 'View Code'}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* 右侧 - 详细信息 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-16"
          >
            {/* Background */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                {t('projects.background') || 'Background'}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {details.background}
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                {t('projects.responsibilities') || 'Responsibilities'}
              </h2>
              <ul className="space-y-4">
                {details.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-gray-400 dark:text-gray-600 font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light flex-1">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                {t('projects.challenges') || 'Challenges'}
              </h2>
              <ul className="space-y-4">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-gray-400 dark:text-gray-600 font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light flex-1">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                {t('projects.achievements') || 'Achievements'}
              </h2>
              <ul className="space-y-4">
                {details.achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-gray-400 dark:text-gray-600 font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light flex-1">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>
        </div>

        {/* 底部装饰线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-16 bg-gray-900 dark:bg-gray-100 mt-24 origin-left"
        />
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
