import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Loading from '../components/UI/Loading';

// Eager load critical pages
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// Lazy load other pages for code splitting
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogDetailPage = lazy(() => import('../pages/BlogDetailPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ComponentTestPage = lazy(() => import('../pages/ComponentTestPage'));

// Wrapper component for lazy-loaded pages
const LazyPageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loading fullScreen />}>{children}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/:lang?',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: (
          <LazyPageWrapper>
            <ProjectsPage />
          </LazyPageWrapper>
        ),
      },
      {
        path: 'skills',
        element: (
          <LazyPageWrapper>
            <SkillsPage />
          </LazyPageWrapper>
        ),
      },
      {
        path: 'blog',
        element: (
          <LazyPageWrapper>
            <BlogPage />
          </LazyPageWrapper>
        ),
      },
      {
        path: 'blog/:slug',
        element: (
          <LazyPageWrapper>
            <BlogDetailPage />
          </LazyPageWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <LazyPageWrapper>
            <AboutPage />
          </LazyPageWrapper>
        ),
      },
      {
        path: 'test-components',
        element: (
          <LazyPageWrapper>
            <ComponentTestPage />
          </LazyPageWrapper>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
], {
  basename: '/portfolio-website',
});
