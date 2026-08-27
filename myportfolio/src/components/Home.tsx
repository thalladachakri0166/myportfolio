import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Linkedin, ArrowRight, Terminal, Award, Code } from 'lucide-react';

export const Home: React.FC = () => {
  // Rotating role titles
  const roles = [
    'B.Tech Honors Graduate (CGPA 9.15)',
    'Software Modelling & DevOps Specialist',
    'AI & Data Science Engineer',
    'Full-Stack Developer',
    'NSS Co-coordinator'
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3D Perspective Tilt on Mouse Move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXRaw = useTransform(mouseY, [-150, 150], [12, -12]);
  const rotateYRaw = useTransform(mouseX, [-150, 150], [-12, 12]);

  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(rotateXRaw, springConfig);
  const rotateY = useSpring(rotateYRaw, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center max-w-7xl mx-auto px-4 py-12 lg:py-0">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 space-y-8 max-w-2xl w-full text-center lg:text-left"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium shadow-inner"
          >
            <Code className="w-4 h-4 text-blue-400" />
            <span>Welcome to my interactive portfolio</span>
          </motion.div>

          {/* Main Hero Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              <span className="text-gray-300 font-light text-2xl sm:text-3xl block mb-2">Hello, I'm</span>
              <span className="bg-gradient-to-r from-white via-gray-100 to-blue-200 bg-clip-text text-transparent block">
                THALLADA
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                CHAKRI
              </span>
            </h1>

            {/* Dynamic Rotating Role */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-medium text-gray-300 mr-2">I am a</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-bold text-blue-400 border-b-2 border-blue-500 pb-0.5"
              >
                {roles[roleIndex]}
              </motion.span>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Completed B.Tech with an Honors degree in Artificial Intelligence & Data Science (CGPA 9.15) with program add-on specialization in Software Modelling and DevOps from KL University.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.a
              href="https://www.linkedin.com/in/thalladachakri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30 border border-blue-400/30"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </motion.a>

            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-900/80 border border-gray-700 hover:border-blue-400 text-gray-200 hover:text-blue-400 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right 3D Tilt Profile Card Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center items-center w-full lg:w-auto perspective-1000"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative cursor-pointer group"
          >
            {/* Background Pulsing Glow Effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-40 blur-xl group-hover:opacity-75 transition duration-500 animate-pulse-glow" />

            {/* Decorative Frame */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-4 border-t-4 border-blue-400 rounded-tl-xl z-20" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-purple-400 rounded-br-xl z-20" />

            {/* Main Image Frame Container */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl z-10 transform-style-3d">
              <img
                src="/images/profile/2.jpg"
                alt="Thallada Chakri"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>

            {/* Floating Badge 1 - Left Bottom */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{ translateZ: 40 }}
              className="absolute -bottom-6 -left-6 z-30 px-4 py-2 bg-gray-900/90 border border-blue-500/40 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-blue-400"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>DevOps & Software Modelling</span>
            </motion.div>

            {/* Floating Badge 2 - Right Top */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              style={{ translateZ: 50 }}
              className="absolute -top-6 -right-6 z-30 px-4 py-2 bg-gray-900/90 border border-purple-500/40 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-purple-300"
            >
              <Award className="w-4 h-4 text-purple-400" />
              <span>AWS & Aviatrix Certified</span>
            </motion.div>

            {/* Floating Badge 3 - Top Left Accent */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              style={{ translateZ: 30 }}
              className="absolute top-1/3 -left-10 z-30 p-2.5 bg-gray-900/90 border border-gray-700 rounded-xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs font-medium text-gray-200"
            >
              <Code className="w-4 h-4 text-pink-400" />
              <span>AI & Data Science</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
