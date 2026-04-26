import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Project } from '../../data/projects';
import { useLanguageStore } from '../../store/languageStore';

interface ProjectCardProps {
  project: Project;
  onExpand: (project: Project) => void;
}

/**
 * ProjectCard Component - Redesigned with Premium Minimalist Aesthetic
 * 极简卡片：无圆角、细边框、微妙悬停效果
 * Requirements: 2.1, 16.3
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onExpand }) => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();

  // Get localized project name and description
  const projectName = project.nameTranslations[language] || project.name;
  const projectDescription =
    project.descriptionTranslations[language] || project.description;

  // Format date range
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const startDate = formatDate(project.startDate);
  const endDate = project.endDate
    ? formatDate(project.endDate)
    : t('about.present');

  return (
    <motion.article
      className="group relative cursor-pointer h-full flex flex-col"
      onClick={() => onExpand(project)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand(project);
        }
      }}
      aria-label={`${t('common.viewMore')} ${projectName}`}
    >
      {/* 极简边框容器 */}
      <div className="relative bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 group-hover:border-gray-900 dark:group-hover:border-gray-100 group-hover:shadow-lg h-full flex flex-col">
        
        {/* Project Image - 16:9 比例 */}
        {project.images && project.images.length > 0 && (
          <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-900 overflow-hidden flex-shrink-0">
            <img
              src={project.images[0]}
              alt={projectName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect width="800" height="450" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%239ca3af"%3EProject%3C/text%3E%3C/svg%3E';
              }}
            />
            {/* 悬停时的遮罩 */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}

        {/* Project Content - 使用 flex-1 填充剩余空间 */}
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          {/* 项目序号和日期 */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 font-light">
              {startDate}
            </span>
            {project.technologies.length > 0 && (
              <span className="text-xs text-gray-400 dark:text-gray-600">
                {project.technologies.length} {language === 'zh' ? '项技术' : 'techs'}
              </span>
            )}
          </div>

          {/* Project Name - 大标题，固定2行高度 */}
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2 min-h-[4rem]">
            {projectName}
          </h3>

          {/* Project Description - 固定2行截断 */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed font-light flex-grow">
            {projectDescription}
          </p>

          {/* Technologies - 极简标签，固定高度区域 */}
          <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 tracking-wide"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-3 py-1 text-gray-400 dark:text-gray-600">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* 查看更多指示器 - 固定在底部 */}
          <div className="mt-auto flex items-center text-sm text-gray-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300">
            <span className="tracking-wide">{t('common.viewMore') || 'View Project'}</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
