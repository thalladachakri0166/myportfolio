import React from 'react';
import { Download } from 'lucide-react';

interface NavBarProps {
  onNavigate: (section: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
  const sections = ['home', 'about', 'volunteer', 'skills', 'certifications', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop navigation */}
          <div className="hidden md:flex-1 md:flex md:justify-center md:items-center">
            <div className="flex items-center gap-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => onNavigate(section)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Resume button */}
          <div className="flex-shrink-0">
            <a
              href="/thalladachakri1.pdf"
              download
              className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-lg inline-flex items-center gap-2 
                         text-purple-400 border border-purple-400
                         transition-all duration-300 ease-out
                         hover:text-gray-900 group"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4" />
                <span className="hidden md:inline">Resume</span>
              </span>
              <div className="absolute inset-0 w-full h-full 
                            bg-purple-400 scale-0 translate-y-[140%] rounded-[20%]
                            transition-transform duration-500 ease-out
                            group-hover:scale-150 group-hover:translate-y-0 group-hover:rounded-[50%]">
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
