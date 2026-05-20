import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, AppMetadata } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PortfolioView } from './components/PortfolioView';
import { AppDetail } from './components/AppDetail';
import { LegalView } from './components/LegalView';
import { AboutView } from './components/AboutView';
import { APPS } from './data/apps';
import { CORPORATE_INFO } from './data/legal';
import { HelpCircle, Mail, Globe, ArrowUp } from 'lucide-react';

export default function App() {
  const [pageId, setPageId] = useState<PageId>('home');
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (targetPage: PageId, appId?: string) => {
    setPageId(targetPage);
    if (targetPage === 'app' && appId) {
      setSelectedAppId(appId);
    } else {
      setSelectedAppId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAppFromCatalog = (appId: string) => {
    setSelectedAppId(appId);
    setPageId('app');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeApp = APPS.find((app) => app.id === selectedAppId);

  return (
    <div className="min-h-screen flex flex-col bg-geo-bg text-[#1A1A1A] font-sans selection:bg-[#E63946] selection:text-white">
      
      {/* 1. Global Navigation Frame */}
      <Header currentPageId={pageId} onNavigate={handleNavigate} />

      {/* 2. Primary Route State Render Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageId + (selectedAppId || '')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {pageId === 'home' && (
              <PortfolioView 
                onSelectApp={handleSelectAppFromCatalog} 
                onNavigate={(id) => handleNavigate(id as PageId)} 
              />
            )}

            {pageId === 'app' && activeApp && (
              <AppDetail 
                app={activeApp} 
                onBack={() => handleNavigate('home')} 
              />
            )}

            {pageId === 'privacy' && (
              <LegalView initialTab="privacy" />
            )}

            {pageId === 'terms' && (
              <LegalView initialTab="terms" />
            )}

            {pageId === 'about' && (
              <AboutView 
                onNavigateToPolicy={(name) => handleNavigate(name as PageId)} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer block */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Scroll To Top UI Asset */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 bg-white border-2 border-[#1A1A1A] hover:bg-[#E63946] hover:text-white p-3 rounded-none hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer text-[#1A1A1A] transition-all duration-150"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
