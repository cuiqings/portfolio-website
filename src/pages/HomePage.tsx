import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * HomePage Component - Redesigned with Premium Minimalist Aesthetic
 * 极简高级设计：大量留白、克制的动效、精致的排版
 * Requirements: 1.1, 1.3, 1.4, 1.5, 19.3
 */
const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 微妙的鼠标跟随效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTAClick = () => {
    navigate('/projects');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-950">
      {/* 极简背景层 - 微妙的噪点纹理 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      
      {/* 微妙的光晕效果 - 跟随鼠标 */}
      <motion.div
        className="absolute inset-0 opacity-0 dark:opacity-100 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(99, 102, 241, 0.08), transparent 40%)`,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* 主内容区 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl w-full">
          {/* 顶部装饰线 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-gradient-to-r from-transparent via-gray-900 to-transparent dark:via-gray-100 mb-16 origin-left"
          />

          {/* 问候语 - 小号、轻量 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-8 font-light"
          >
            {t('home.greeting')}
          </motion.p>

          {/* 姓名 - 超大、粗体、留白充足 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[0.9]"
          >
            {t('home.name')}
          </motion.h1>

          {/* 职位 - 中号、细线条 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 dark:text-gray-300 mb-12 tracking-wide"
          >
            {t('home.position')}
          </motion.h2>

          {/* 介绍 - 适中尺寸、行高舒适 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl leading-relaxed font-light"
          >
            {t('home.introduction')}
          </motion.p>

          {/* CTA 按钮组 - 极简风格 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* 主按钮 - 纯黑/纯白 */}
            <button
              onClick={handleCTAClick}
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium tracking-wide uppercase overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">{t('home.cta')}</span>
              <div className="absolute inset-0 bg-gray-800 dark:bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>

            {/* 次要按钮 - 边框样式 */}
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-medium tracking-wide uppercase hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('nav.about')}
            </button>
          </motion.div>

          {/* 底部装饰线 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-gradient-to-r from-transparent via-gray-900 to-transparent dark:via-gray-100 mt-16 origin-left"
          />
        </div>
      </div>

      {/* 极简滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-gray-600" />
          <span className="text-xs text-gray-400 dark:text-gray-600 tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* 页面角落装饰 - 版本号或标识 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 right-8 text-xs text-gray-400 dark:text-gray-600 tracking-widest"
      >
        © 2024
      </motion.div>
    </div>
  );
};

export default HomePage;
