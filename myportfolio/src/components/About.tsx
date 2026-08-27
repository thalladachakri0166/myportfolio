import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award, Rocket, Code2, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      title: 'B.Tech Honors (9.15 CGPA)',
      subtitle: 'AI & DS | Software & DevOps',
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: '3 Global Certs',
      subtitle: 'AWS, Salesforce, Aviatrix',
      color: 'from-yellow-500/20 to-yellow-600/5',
      borderColor: 'border-yellow-500/30',
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: 'Full-Stack & DevOps',
      subtitle: 'Software Modeling',
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-pink-400" />,
      title: 'Leadership & NSS',
      subtitle: 'Co-Coordinator UNIT-12',
      color: 'from-pink-500/20 to-pink-600/5',
      borderColor: 'border-pink-500/30',
    },
  ];

  const focusAreas = [
    'Artificial Intelligence & ML',
    'Software Modelling & Architecture',
    'DevOps & CI/CD Pipelines',
    'Full-Stack Web Engineering',
    'Cloud Computing & Multicloud Networking',
  ];

  return (
    <div
      id="about"
      data-section="about"
      className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-24"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <User className="w-4 h-4" /> About Me
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Passionate Developer & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Problem Solver</span>
        </h2>
      </motion.div>

      {/* Main Bio Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-2xl p-6 sm:p-10 border border-gray-800 shadow-2xl relative overflow-hidden mb-12"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed text-justify relative z-10 font-normal">
          Hi! I'm <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">Thallada Chakri</span>. I completed my <span className="text-blue-400 font-semibold">Honors degree in B.Tech in Artificial Intelligence and Data Science</span> with a CGPA of <span className="text-emerald-400 font-bold">9.15</span> from KL University, alongside a program add-on specialization in <span className="text-purple-400 font-semibold">Software Modelling and DevOps</span>. I thrive on building scalable, high-performance tech solutions that solve real-world problems.
        </p>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-4 text-justify relative z-10">
          My journey spans creating food management systems, airline reservation platforms, and machine learning models for health analytics. Beyond writing clean code, I love leading community programs, organizing tech workshops as an NSS Co-coordinator, and representing student interests across departments.
        </p>

        {/* Tech Focus Tags */}
        <div className="mt-8 pt-6 border-t border-gray-800/80">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-400" /> Core Interests & Specializations
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {focusAreas.map((area, idx) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 rounded-lg bg-gray-900/90 border border-gray-700/80 text-gray-200 text-sm font-medium hover:border-blue-400 hover:text-blue-400 transition-colors shadow-sm"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} backdrop-blur-md shadow-lg transition-all duration-300 flex flex-col justify-between`}
          >
            <div className="w-12 h-12 rounded-xl bg-gray-900/80 border border-gray-700/60 flex items-center justify-center mb-4 shadow-md">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 font-medium">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
