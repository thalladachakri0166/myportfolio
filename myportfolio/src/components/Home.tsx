import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-4 py-20">
      {/* Left Content */}
      <div className="flex-1 space-y-8 max-w-2xl">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white block">I'm</span>
            <span className="text-blue-400 block">THALLADA</span>
            <span className="text-white block">CHAKRI</span>
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              PASSIONATE DEVELOPER
            </h2>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-blue-400"></div>
              <ArrowRight className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 max-w-lg">
          <p className="text-gray-400 text-lg leading-relaxed">
            Software Modelling and DevOps student at KL University with a passion for creating 
            innovative solutions through code. Specializing in modern web technologies 
            and always eager to learn new skills.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a
            href="https://www.linkedin.com/in/thalladachakri"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span>CONNECT</span>
          </a>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Check My Profile</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Right Content - Profile Image with Frame */}
      <div className="hidden lg:flex flex-1 justify-end items-center">
        <div className="relative">
          {/* Decorative Frame Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-blue-400"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-blue-400"></div>
          
          {/* Main Image Container */}
          <div className="relative w-80 h-96 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
            <img
              src="/images/profile/profile.jpg"
              alt="Thallada Chakri"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-400"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400"></div>
          </div>
          
          {/* Background geometric elements */}
          <div className="absolute -z-10 top-8 right-8 w-32 h-32 border border-gray-700 rotate-45"></div>
          <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 bg-blue-400/10 rotate-12"></div>
        </div>
      </div>
    </div>
  );
};
