import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FolderGit2, Github, ExternalLink, CheckCircle2, ArrowRight, X, ShieldCheck, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'ai-ml' | 'java';
  timeline: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  summary: string;
  bullets: string[];
  keyHighlights: string[];
  impact: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'ai-ml' | 'java'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'tutor-crm',
      title: 'Tutor CRM System',
      category: 'fullstack',
      timeline: 'May 2026 – Jun 2026',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: '/images/projects/TutorCRM.png',
      github: 'https://github.com/thalladachakri0166',
      live: 'https://tutorcrm-sigma.vercel.app/',
      summary: 'Developed a full-stack CRM platform to manage students, tutors, attendance, payments, and academic records.',
      bullets: [
        'Developed a full-stack CRM platform to manage students, tutors, attendance, payments, and academic records.',
        'Built responsive role-based dashboards using React.js and developed RESTful APIs using Node.js and Express.js.',
        'Implemented authentication, role-based access control (RBAC), MongoDB integration, API testing, debugging, and application deployment.'
      ],
      keyHighlights: ['Role-Based Access Control', 'MongoDB Integration', 'RESTful API Suite', 'Responsive React Dashboard'],
      impact: 'Streamlined academic administration, tutor scheduling, and payment tracking into a single unified dashboard.'
    },
    {
      id: 'ai-image-editor',
      title: 'AI Image Editing Website',
      category: 'ai-ml',
      timeline: 'Jul 2023 – Dec 2023',
      tech: ['Python', 'Django', 'JavaScript', 'AI/ML', 'REST APIs'],
      image: '/images/projects/AIIMAGE.png',
      github: 'https://github.com/thalladachakri0166',
      summary: 'Developed an AI-powered web application for automated image editing and enhancement using Python and Django.',
      bullets: [
        'Developed an AI-powered web application for automated image editing and enhancement using Python and Django.',
        'Applied AI/ML-based image processing techniques to perform automated image editing operations.',
        'Designed a responsive web interface using HTML, CSS, and JavaScript and integrated RESTful APIs for image processing workflows.'
      ],
      keyHighlights: ['AI/ML Processing', 'Django Backend', 'Automated Enhancement Workflows', 'RESTful Image Pipeline'],
      impact: 'Automated complex image filtering and enhancement workflows with real-time API responses.'
    },
    {
      id: 'airline-system',
      title: 'Airline Reservation System',
      category: 'java',
      timeline: '3 Months',
      tech: ['Java', 'HTML', 'CSS', 'MySQL', 'JDBC'],
      image: '/images/projects/airline.png',
      github: 'https://github.com/thalladachakri0166',
      summary: 'A robust desktop & web system offering flight search, ticket booking, cancellation processing, and MySQL connectivity.',
      bullets: [
        'Built real-time flight search, seat availability checking, and instant ticket booking system.',
        'Designed relational database schema in MySQL for flight schedules, passenger manifests, and payments.',
        'Implemented passenger booking cancellation, rescheduling, and administrative report generation.'
      ],
      keyHighlights: ['Relational Database Design', 'Seat Inventory Tracking', 'JDBC Transactions', 'Passenger Manifests'],
      impact: 'Ensured zero-conflict seat reservation transactions with real-time database locks.'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Works' },
    { key: 'fullstack', label: 'Full-Stack & React' },
    { key: 'ai-ml', label: 'AI / ML Applications' },
    { key: 'java', label: 'Java & Databases' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <FolderGit2 className="w-3.5 h-3.5" /> Project Portfolio
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Engineering Projects</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Explore technical architecture, key features, and engineering impact
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200 bg-gray-900/60 border border-gray-800'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-500/20"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass-card rounded-2xl border border-gray-800/80 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-gray-900/90 backdrop-blur-md border border-gray-700/80 text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                      {project.timeline}
                    </span>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 rounded-md bg-blue-600/90 hover:bg-blue-500 text-white backdrop-blur-md text-[11px] font-semibold flex items-center gap-1 shadow-md transition-colors"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.bullets.slice(0, 2).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-gray-300 text-[11px] font-medium group-hover:border-blue-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-4 bg-gray-950/60 border-t border-gray-800/80 flex items-center justify-between text-xs text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> View Details & Impact
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start pb-4 border-b border-gray-800 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                    {selectedProject.timeline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Responsibilities & Architecture */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" /> Key Accomplishments & Deliverables
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                        <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact callout */}
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Engineering Impact:</span>
                    {selectedProject.impact}
                  </div>
                </div>

                {/* Tech pills */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-colors shadow-md shadow-blue-500/20"
                  >
                    <span>Live Application</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};