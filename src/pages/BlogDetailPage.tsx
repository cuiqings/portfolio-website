import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getArticleBySlug } from '../data/blog';
import 'highlight.js/styles/github-dark.css';

/**
 * BlogDetailPage Component - Redesigned with Premium Minimalist Aesthetic
 * 极简博客详情：大标题、宽松排版、代码高亮
 */
const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'zh' | 'en';

  const article = slug ? getArticleBySlug(slug) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {currentLang === 'zh' ? '文章未找到' : 'Article Not Found'}
          </h1>
          <button
            onClick={() => navigate('/blog')}
            className="mt-8 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            {currentLang === 'zh' ? '返回博客' : 'Back to Blog'}
          </button>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => navigate('/blog')}
          className="group flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors mb-12"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="tracking-wide">{currentLang === 'zh' ? '返回' : 'Back'}</span>
        </motion.button>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-xs text-gray-400 dark:text-gray-600 tracking-wide">
            <time>{formatDate(article.publishDate)}</time>
            <span>·</span>
            <span>{article.readingTime} {currentLang === 'zh' ? '分钟阅读' : 'min read'}</span>
            <span>·</span>
            <span>{article.categoryTranslations[currentLang]}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            {article.titleTranslations[currentLang]}
          </h1>

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
        </motion.header>

        {/* Cover Image */}
        {article.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
              <img
                src={article.coverImage}
                alt={article.titleTranslations[currentLang]}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-8
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-light
            prose-a:text-gray-900 dark:prose-a:text-white prose-a:no-underline prose-a:border-b prose-a:border-gray-300 dark:prose-a:border-gray-700 hover:prose-a:border-gray-900 dark:hover:prose-a:border-white
            prose-code:text-gray-900 dark:prose-code:text-white prose-code:bg-gray-100 dark:prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-950 dark:prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800
            prose-ul:list-disc prose-ul:pl-6
            prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:font-light
            prose-blockquote:border-l-2 prose-blockquote:border-gray-900 dark:prose-blockquote:border-white prose-blockquote:pl-6 prose-blockquote:italic
            prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-800"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {article.contentTranslations[currentLang]}
          </ReactMarkdown>
        </motion.article>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <button
            onClick={() => navigate('/blog')}
            className="group flex items-center gap-2 text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="tracking-wide">{currentLang === 'zh' ? '查看所有文章' : 'View All Articles'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
