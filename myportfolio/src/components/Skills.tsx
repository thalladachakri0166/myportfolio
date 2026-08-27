import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Database, Wrench, CheckCircle2, Terminal, Layers, Cpu, Globe, Server, Cloud, ShieldCheck, X } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'web' | 'ai' | 'cloud' | 'core' | 'languages';
  proficiency: 'Expert' | 'Advanced' | 'Proficient' | 'Basic' | 'Fluent';
  icon: React.ReactNode;
  accent: string;
  glowColor: string;
  borderColor: string;
  tagBg: string;
  description: string;
  usedIn: string;
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'ai' | 'cloud' | 'core' | 'languages'>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const skillsList: SkillItem[] = [
    {
      name: 'Python',
      category: 'ai',
      proficiency: 'Expert',
      icon: <Terminal className="w-5 h-5 text-yellow-400" />,
      accent: 'from-yellow-500/20 to-amber-500/5',
      borderColor: 'hover:border-yellow-500/50',
      glowColor: 'hover:shadow-yellow-500/20',
      tagBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      description: 'Primary language for AI/ML algorithms, automated image processing, data analysis, and Django backends.',
      usedIn: 'AI Image Editing Website, Data Analysis & Machine Learning workflows.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'web',
      proficiency: 'Expert',
      icon: <Code2 className="w-5 h-5 text-amber-300" />,
      accent: 'from-amber-400/20 to-yellow-500/5',
      borderColor: 'hover:border-amber-400/50',
      glowColor: 'hover:shadow-amber-400/20',
      tagBg: 'bg-amber-400/10 text-amber-200 border-amber-400/30',
      description: 'Used extensively across frontend web applications, async REST API handling, and Node.js servers.',
      usedIn: 'Tutor CRM System, AI Image Editor UI, Portfolio Platform.'
    },
    {
      name: 'React.js',
      category: 'web',
      proficiency: 'Expert',
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      accent: 'from-cyan-500/20 to-blue-500/5',
      borderColor: 'hover:border-cyan-400/50',
      glowColor: 'hover:shadow-cyan-400/20',
      tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      description: 'Building modern responsive UIs, role-based dashboards, state management, and reusable component libraries.',
      usedIn: 'Tutor CRM System Dashboards, Interactive Portfolio Platform.'
    },
    {
      name: 'Django',
      category: 'web',
      proficiency: 'Advanced',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      accent: 'from-emerald-500/20 to-green-500/5',
      borderColor: 'hover:border-emerald-500/50',
      glowColor: 'hover:shadow-emerald-500/20',
      tagBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      description: 'Backend web framework for Python handling ORM, authentication, RESTful APIs, and administrative portals.',
      usedIn: 'AI Image Editing Website, Tourism Management System.'
    },
    {
      name: 'Express.js & Node.js',
      category: 'web',
      proficiency: 'Advanced',
      icon: <Cpu className="w-5 h-5 text-green-400" />,
      accent: 'from-green-500/20 to-emerald-500/5',
      borderColor: 'hover:border-green-500/50',
      glowColor: 'hover:shadow-green-500/20',
      tagBg: 'bg-green-500/10 text-green-300 border-green-500/30',
      description: 'Server-side runtime and framework for building scalable RESTful APIs, middleware, and database connectors.',
      usedIn: 'Tutor CRM System API Backend.'
    },
    {
      name: 'Machine Learning & DL',
      category: 'ai',
      proficiency: 'Advanced',
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      accent: 'from-purple-500/20 to-pink-500/5',
      borderColor: 'hover:border-purple-500/50',
      glowColor: 'hover:shadow-purple-500/20',
      tagBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      description: 'Predictive modeling, neural networks, computer vision image enhancement, and natural language processing (NLP).',
      usedIn: 'B.Tech Honors AI Specialization, Automated Image Processing.'
    },
    {
      name: 'MongoDB',
      category: 'cloud',
      proficiency: 'Advanced',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      accent: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'hover:border-emerald-400/50',
      glowColor: 'hover:shadow-emerald-400/20',
      tagBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      description: 'NoSQL document database design, aggregation pipelines, schema validation, and indexing.',
      usedIn: 'Tutor CRM System database architecture.'
    },
    {
      name: 'MySQL',
      category: 'cloud',
      proficiency: 'Expert',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      accent: 'from-blue-500/20 to-cyan-500/5',
      borderColor: 'hover:border-blue-400/50',
      glowColor: 'hover:shadow-blue-400/20',
      tagBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      description: 'Relational database schema modeling, ACID transactions, complex SQL queries, and normalization.',
      usedIn: 'Airline Reservation System, Academic Projects.'
    },
    {
      name: 'AWS Cloud',
      category: 'cloud',
      proficiency: 'Advanced',
      icon: <Cloud className="w-5 h-5 text-amber-400" />,
      accent: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'hover:border-amber-500/50',
      glowColor: 'hover:shadow-amber-500/20',
      tagBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      description: 'AWS Certified Cloud Practitioner; EC2 instance configuration, S3 bucket storage, IAM security, and cloud deployment.',
      usedIn: 'Cloud Application Hosting & Infrastructure Management.'
    },
    {
      name: 'Docker & DevOps',
      category: 'cloud',
      proficiency: 'Advanced',
      icon: <Wrench className="w-5 h-5 text-sky-400" />,
      accent: 'from-sky-500/20 to-blue-500/5',
      borderColor: 'hover:border-sky-400/50',
      glowColor: 'hover:shadow-sky-400/20',
      tagBg: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
      description: 'Containerizing full-stack web applications, Dockerfile writing, CI/CD pipeline automation, and SDLC workflows.',
      usedIn: 'Program add-on in Software Modelling & DevOps.'
    },
    {
      name: 'Git & GitHub',
      category: 'core',
      proficiency: 'Expert',
      icon: <Code2 className="w-5 h-5 text-rose-400" />,
      accent: 'from-rose-500/20 to-pink-500/5',
      borderColor: 'hover:border-rose-400/50',
      glowColor: 'hover:shadow-rose-400/20',
      tagBg: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
      description: 'Distributed version control, branch management, collaborative code review, and repository management.',
      usedIn: 'All software engineering projects & team collaborations.'
    },
    {
      name: 'RESTful API & System Design',
      category: 'core',
      proficiency: 'Expert',
      icon: <Globe className="w-5 h-5 text-violet-400" />,
      accent: 'from-violet-500/20 to-purple-500/5',
      borderColor: 'hover:border-violet-400/50',
      glowColor: 'hover:shadow-violet-400/20',
      tagBg: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
      description: 'REST API architecture, JSON payload design, status code management, authentication middleware, and API testing.',
      usedIn: 'Tutor CRM System, AI Image Editor, Airline Reservation.'
    },
    {
      name: 'Japanese',
      category: 'languages',
      proficiency: 'Basic',
      icon: <Globe className="w-5 h-5 text-pink-400" />,
      accent: 'from-pink-500/20 to-rose-500/5',
      borderColor: 'hover:border-pink-400/50',
      glowColor: 'hover:shadow-pink-400/20',
      tagBg: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
      description: 'Basic level Japanese language understanding with elementary reading and conversational capabilities.',
      usedIn: 'Multilingual communication.'
    },
    {
      name: 'English',
      category: 'languages',
      proficiency: 'Fluent',
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      accent: 'from-blue-500/20 to-cyan-500/5',
      borderColor: 'hover:border-blue-400/50',
      glowColor: 'hover:shadow-blue-400/20',
      tagBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      description: 'Professional fluent English communication for technical documentation, presentations, and collaborative engineering.',
      usedIn: 'Professional academic & engineering collaborations.'
    }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'All Competencies' },
    { key: 'web', label: 'Web & Frameworks' },
    { key: 'ai', label: 'AI & Data Science' },
    { key: 'cloud', label: 'Databases & Cloud' },
    { key: 'core', label: 'Core Engineering' },
    { key: 'languages', label: 'Languages Known' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" /> Technical Matrix
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Ecosystem</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Tap any technology badge to inspect engineering application, use cases, and proficiency level
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as any)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200 bg-gray-900/60 border border-gray-800'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-500/20"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Interactive Tech Badge Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              whileHover={{ y: -3, scale: 1.02 }}
              onClick={() => setActiveSkill(skill)}
              className={`group relative glass-card p-5 rounded-2xl border border-gray-800/80 ${skill.borderColor} ${skill.glowColor} transition-all duration-300 shadow-lg cursor-pointer overflow-hidden flex flex-col justify-between`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${skill.accent} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              <div>
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gray-900/90 border border-gray-800/80 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${skill.tagBg}`}>
                    {skill.proficiency}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 relative z-10">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400 relative z-10">
                <span className="truncate max-w-[200px] text-gray-400">
                  {skill.usedIn}
                </span>
                <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Details &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Skill Detail Lightbox Modal */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSkill(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-6"
            >
              <div className="flex justify-between items-center pb-4 border-b border-gray-800 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gray-800 border border-gray-700">
                    {activeSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeSkill.name}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border inline-block mt-1 ${activeSkill.tagBg}`}>
                      {activeSkill.proficiency} Level
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Technical Capability</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">{activeSkill.description}</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-950/80 border border-gray-800">
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Applied In Portfolio Projects
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{activeSkill.usedIn}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-800 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};