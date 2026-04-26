import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getAllTechnologies,
  filterProjectsByTechnology,
  Project,
} from '../data/projects';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectDetail from '../components/Projects/ProjectDetail';
import ProjectFilter from '../components/Projects/ProjectFilter';

/**
 * ProjectsPage Component - Redesigned with Premium Minimalist Aesthetic
 * 极简高级设计：宽松布局、精致筛选、沉浸式详情
 * Requirements: 2.1, 2.6, 5.2, 5.3, 5.4, 16.2
 */
const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get all unique technologies
  const allTechnologies = useMemo(() => getAllTechnologies(), []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(
    () => filterProjectsByTechnology(selectedTech),
    [selectedTech]
  );

  // Sort projects by date (newest first) - Requirement 2.6
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
  }, [filteredProjects]);

  // Handle project card click
  const handleProjectExpand = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };

  // Handle project detail close
  const handleProjectDetailClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <>
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
              {t('projects.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
              {t('projects.subtitle') || 'A collection of my work and side projects'}
            </p>
          </motion.div>

          {/* Project Filter - 精致横向滚动 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <ProjectFilter
              technologies={allTechnologies}
              selectedTech={selectedTech}
              onFilterChange={setSelectedTech}
              projectCount={sortedProjects.length}
            />
          </motion.div>

          {/* Project Grid - 宽松2-3列布局 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} onExpand={handleProjectExpand} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State - 极简风格 */}
          {sortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-32"
            >
              <p className="text-lg text-gray-400 dark:text-gray-600 font-light tracking-wide">
                {t('blog.noResults') || 'No projects found'}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail - 全屏沉浸式 */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={handleProjectDetailClose}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsPage;
