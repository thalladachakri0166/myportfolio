import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-gray-950/90 border-t border-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 flex items-center justify-center text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Thallada Chakri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
