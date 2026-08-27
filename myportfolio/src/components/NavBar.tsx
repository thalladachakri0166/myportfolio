import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

interface NavBarProps {
  onNavigate: (section: string) => void;
  activeSection?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigate, activeSection = 'home' }) => {
  const sections = ['home', 'about', 'education', 'projects', 'skills', 'certifications', 'volunteer', 'contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-950/85 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Desktop Left Spacer to balance centering */}
            <div className="hidden md:block w-32 flex-shrink-0" />

            {/* Mobile Header elements */}
            <div className="flex items-center justify-between w-full md:hidden">
              <button
                className="p-2 text-gray-300 hover:text-white rounded-lg bg-gray-900/60 border border-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <a
                href="/images/profile/chakrithallada.pdf"
                download
                className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 text-purple-400 border border-purple-500/40 bg-purple-950/30 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>
            </div>

            {/* Desktop navigation bar */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex items-center gap-1 bg-gray-900/70 p-1.5 rounded-full border border-gray-800/80 backdrop-blur-md">
                {sections.map((section) => {
                  const isActive = activeSection === section;
                  return (
                    <button
                      key={section}
                      onClick={() => onNavigate(section)}
                      className={`relative px-4 py-1.5 text-sm font-medium transition-colors capitalize rounded-full ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-500/20"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{section}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Resume button desktop */}
            <div className="hidden md:flex w-32 justify-end flex-shrink-0">
              <motion.a
                href="/images/profile/chakrithallada.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm font-semibold text-purple-300 border border-purple-500/50 bg-purple-950/40 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-md shadow-purple-900/20 group"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-gray-950/95 border-b border-gray-800 px-4 py-4 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {sections.map((section) => {
                  const isActive = activeSection === section;
                  return (
                    <button
                      key={section}
                      onClick={() => {
                        onNavigate(section);
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-3 text-left text-sm font-medium rounded-xl transition-all capitalize flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                      }`}
                    >
                      <span>{section}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-blue-400"></div>}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
