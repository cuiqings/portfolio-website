import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';

interface MainLayoutProps {
  transparentHeader?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ transparentHeader = false }) => {
  const location = useLocation();
  
  // Check if we're on the home page for transparent header
  const isHomePage = location.pathname === '/' || !!location.pathname.match(/^\/(zh|en)\/?$/);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header transparent={isHomePage || transparentHeader} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MainLayout;
