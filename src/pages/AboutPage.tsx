/**
 * About Page - Minimalist Design
 * 关于我页面 - 极简设计
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, workExperiences, education, contactInfo } from '../data/personalInfo';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'zh' | 'en';
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Format date range
  const formatDateRange = (start: string, end: string | 'present') => {
    const startDate = new Date(start);
    const startYear = startDate.getFullYear();
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');

    if (end === 'present') {
      return currentLang === 'zh'
        ? `${startYear}.${startMonth} - 至今`
        : `${startYear}.${startMonth} - Present`;
    }

    const endDate = new Date(end);
    const endYear = endDate.getFullYear();
    const endMonth = String(endDate.getMonth() + 1).padStart(2, '0');

    return `${startYear}.${startMonth} - ${endYear}.${endMonth}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section - 极简个人介绍 */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 大标题 */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight leading-none mb-8">
            {personalInfo.nameTranslations[currentLang]}
          </h1>

          {/* 1px 装饰线 */}
          <div className="w-24 h-px bg-black dark:bg-white mb-12" />

          {/* 职位 */}
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-600 dark:text-gray-400 mb-8">
            {personalInfo.titleTranslations[currentLang]}
          </p>

          {/* 简介 */}
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl text-gray-700 dark:text-gray-300">
            {personalInfo.bioTranslations[currentLang]}
          </p>
        </motion.div>
      </section>

      {/* Contact Info - 联系方式 */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-12">
            {currentLang === 'zh' ? '联系方式' : 'Contact'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {/* Phone */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
                {currentLang === 'zh' ? '电话' : 'Phone'}
              </p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base font-light hover:opacity-60 transition-opacity duration-300"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Telegram */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
                Telegram
              </p>
              <a
                href="https://t.me/ccrr6688"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-light hover:opacity-60 transition-opacity duration-300"
              >
                @ccrr6688
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
                {currentLang === 'zh' ? '邮箱' : 'Email'}
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base font-light hover:opacity-60 transition-opacity duration-300"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Work Experience - 工作经历 */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-16">
            {currentLang === 'zh' ? '工作经历' : 'Experience'}
          </h2>

          <div className="space-y-24 max-w-4xl">
            {workExperiences.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 md:-left-12 top-2 w-2 h-2 bg-black dark:bg-white rounded-full" />

                {/* Date */}
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-3">
                  {formatDateRange(work.startDate, work.endDate)}
                </p>

                {/* Position */}
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
                  {work.positionTranslations[currentLang]}
                </h3>

                {/* Company */}
                <p className="text-base font-light text-gray-600 dark:text-gray-400 mb-6">
                  {work.companyTranslations[currentLang]}
                </p>

                {/* Description */}
                <ul className="space-y-3">
                  {work.descriptionTranslations[currentLang].map((desc, i) => (
                    <li key={i} className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 flex">
                      <span className="mr-3 text-gray-400">—</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {work.technologies && work.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-gray-300 dark:border-gray-700 font-light tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education - 教育背景 */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-16">
            {currentLang === 'zh' ? '教育背景' : 'Education'}
          </h2>

          <div className="space-y-12 max-w-4xl">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Date */}
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-3">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </p>

                {/* Degree & Major */}
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
                  {edu.degreeTranslations[currentLang]}
                </h3>

                {/* School */}
                <p className="text-base font-light text-gray-600 dark:text-gray-400 mb-2">
                  {edu.schoolTranslations[currentLang]}
                </p>

                {/* Major */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                  {edu.majorTranslations[currentLang]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Highlight - 核心技能 */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-16">
            {currentLang === 'zh' ? '核心技能' : 'Core Skills'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
            {/* Frontend Frameworks */}
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">
                {currentLang === 'zh' ? '前端框架' : 'Frontend Frameworks'}
              </h3>
              <div className="space-y-2">
                {['React', 'Vue 2/3', 'TypeScript', 'JavaScript ES6+'].map((skill) => (
                  <p key={skill} className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Cross-Platform */}
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">
                {currentLang === 'zh' ? '跨平台开发' : 'Cross-Platform'}
              </h3>
              <div className="space-y-2">
                {['React Native', 'Uni-app', 'Flutter', 'Electron'].map((skill) => (
                  <p key={skill} className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Data Visualization */}
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">
                {currentLang === 'zh' ? '数据可视化' : 'Data Visualization'}
              </h3>
              <div className="space-y-2">
                {['ECharts', 'AntV', 'Three.js', 'WebGL'].map((skill) => (
                  <p key={skill} className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Build Tools */}
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">
                {currentLang === 'zh' ? '构建工具' : 'Build Tools'}
              </h3>
              <div className="space-y-2">
                {['Vite', 'Webpack', 'CI/CD', 'Git'].map((skill) => (
                  <p key={skill} className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Real-time Communication */}
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">
                {currentLang === 'zh' ? '实时通信' : 'Real-time'}
              </h3>
              <div className="space-y-2">
                {['WebSocket', 'Socket.io', 'WebRTC'].map((skill) => (
                  <p key={skill} className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Backend Knowledge */}
            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">
                {currentLang === 'zh' ? '后端技术' : 'Backend'}
              </h3>
              <div className="space-y-2">
                {['Node.js', 'MySQL', 'Oracle', 'Linux'].map((skill) => (
                  <p key={skill} className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - 行动号召 */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
            {currentLang === 'zh' ? '让我们一起创造些什么' : "Let's Create Something Together"}
          </h2>

          <p className="text-base md:text-lg font-light text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
            {currentLang === 'zh'
              ? '我一直在寻找新的挑战和合作机会。如果你有有趣的项目或想法，欢迎联系我。'
              : "I'm always looking for new challenges and collaboration opportunities. If you have an interesting project or idea, feel free to reach out."}
          </p>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-block px-8 py-4 border border-black dark:border-white text-sm uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            {currentLang === 'zh' ? '联系我' : 'Get in Touch'}
          </button>
        </motion.div>
      </section>

      {/* Contact Modal - 联系方式模态框 */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsContactModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setIsContactModalOpen(false)}
            >
              <div
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 max-w-lg w-full p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
                  {currentLang === 'zh' ? '联系方式' : 'Contact Information'}
                </h3>

                {/* Contact items */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
                      {currentLang === 'zh' ? '电话' : 'Phone'}
                    </p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-base font-light hover:opacity-60 transition-opacity duration-300 block"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>

                  {/* Telegram */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
                      Telegram
                    </p>
                    <a
                      href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-light hover:opacity-60 transition-opacity duration-300 block"
                    >
                      {contactInfo.telegram}
                    </a>
                  </div>

                  {/* Emails */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
                      {currentLang === 'zh' ? '邮箱' : 'Email'}
                    </p>
                    <div className="space-y-2">
                      {contactInfo.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="text-base font-light hover:opacity-60 transition-opacity duration-300 block"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-8" />

                {/* Note */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                  {currentLang === 'zh'
                    ? '期待与你的交流，通常会在 24 小时内回复。'
                    : 'Looking forward to hearing from you. I typically respond within 24 hours.'}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;
