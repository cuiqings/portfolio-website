import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  blogArticles,
  getAllTags,
  getAllCategories,
  filterArticlesByTag,
  filterArticlesByCategory,
  searchArticles,
  type BlogArticle,
} from '../data/blog';

/**
 * BlogPage Component - Redesigned with Premium Minimalist Aesthetic
 * 极简博客列表：大卡片、清晰排版、精致筛选
 */
const BlogPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language as 'zh' | 'en';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all tags and categories
  const allTags = useMemo(() => getAllTags(), []);
  const allCategories = useMemo(() => getAllCategories(), []);

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let articles = blogArticles;

    // Apply search
    if (searchQuery) {
      articles = searchArticles(searchQuery, currentLang);
    }

    // Apply tag filter
    if (selectedTag) {
      articles = filterArticlesByTag(selectedTag);
    }

    // Apply category filter
    if (selectedCategory) {
      articles = filterArticlesByCategory(selectedCategory);
    }

    // Sort by date (newest first)
    return articles.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [searchQuery, selectedTag, selectedCategory, currentLang]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-gray-900 dark:bg-gray-100 mb-8 origin-left"
          />
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {t('blog.title') || 'Blog'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            {t('blog.subtitle') || 'Thoughts, tutorials, and insights on web development'}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-8"
        >
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'zh' ? '搜索文章...' : 'Search articles...'}
              className="w-full px-6 py-4 bg-transparent border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors text-sm tracking-wide"
            />
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-4 font-light">
              {currentLang === 'zh' ? '分类' : 'Categories'}
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 text-sm tracking-wide transition-colors border ${
                  selectedCategory === null
                    ? 'border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white'
                    : 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 hover:border-gray-900 dark:hover:border-gray-100 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currentLang === 'zh' ? '全部' : 'All'}
              </button>
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm tracking-wide transition-colors border ${
                    selectedCategory === category.id
                      ? 'border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white'
                      : 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 hover:border-gray-900 dark:hover:border-gray-100 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {category[currentLang]}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-600 mb-4 font-light">
              {currentLang === 'zh' ? '标签' : 'Tags'}
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 text-xs tracking-wide transition-colors border ${
                  selectedTag === null
                    ? 'border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white'
                    : 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 hover:border-gray-900 dark:hover:border-gray-100 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currentLang === 'zh' ? '全部' : 'All'}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-xs tracking-wide transition-colors border ${
                    selectedTag === tag
                      ? 'border-gray-900 dark:border-gray-100 text-gray-900 dark:text-white'
                      : 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 hover:border-gray-900 dark:hover:border-gray-100 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Articles List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {filteredArticles.map((article) => (
            <motion.article
              key={article.slug}
              variants={itemVariants}
              onClick={() => navigate(`/blog/${article.slug}`)}
              className="group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Image */}
                {article.coverImage && (
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden group-hover:border-gray-900 dark:group-hover:border-gray-100 transition-colors">
                      <img
                        src={article.coverImage}
                        alt={article.titleTranslations[currentLang]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={article.coverImage ? 'lg:col-span-7' : 'lg:col-span-12'}>
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400 dark:text-gray-600 tracking-wide">
                    <time>{formatDate(article.publishDate)}</time>
                    <span>·</span>
                    <span>{article.readingTime} {currentLang === 'zh' ? '分钟阅读' : 'min read'}</span>
                    <span>·</span>
                    <span>{article.categoryTranslations[currentLang]}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {article.titleTranslations[currentLang]}
                  </h2>

                  {/* Summary */}
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light">
                    {article.summaryTranslations[currentLang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="mt-6 flex items-center text-sm text-gray-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="tracking-wide">{currentLang === 'zh' ? '阅读全文' : 'Read More'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-32"
          >
            <p className="text-lg text-gray-400 dark:text-gray-600 font-light tracking-wide">
              {currentLang === 'zh' ? '未找到文章' : 'No articles found'}
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

export default BlogPage;
