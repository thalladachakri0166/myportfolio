import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  GraduationCap,
  School,
  BookOpen,
  Calendar,
  Navigation,
  MapPin,
} from 'lucide-react';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0.15, 0.85], [0, 1]);

  return (
    <div
      id="education"
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-16 scroll-mt-24 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
          <Navigation className="w-4 h-4 text-amber-400 rotate-90 animate-pulse" /> Winding Academic Roadmap
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Education <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-base mt-2 max-w-lg mx-auto">
          A curved road timeline connecting 3 distinct education milestones with color-coded road dots & indicator lines.
        </p>
      </motion.div>

      {/* --- ROADWAY CONTAINER WITH CARDS ENTIRELY OUTSIDE ROAD & CLEAR CONNECTOR LINES --- */}
      <div className="relative min-h-[460px] sm:min-h-[580px] flex items-center justify-center my-2">

        {/* SVG Curved Winding Roadway, Road Dots & Connector Lines (Visible on BOTH Mobile & Desktop) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 1000 540"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="roadGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* 1. Outer Asphalt Base */}
          <path
            d="M 40,270 C 120,195 140,195 220,195 C 320,195 400,345 500,345 C 600,345 680,195 780,195 C 860,195 880,270 960,270"
            fill="none"
            stroke="#1e293b"
            strokeWidth="48"
            strokeLinecap="round"
          />

          {/* 2. Inner Asphalt Track */}
          <path
            d="M 40,270 C 120,195 140,195 220,195 C 320,195 400,345 500,345 C 600,345 680,195 780,195 C 860,195 880,270 960,270"
            fill="none"
            stroke="#090d16"
            strokeWidth="38"
            strokeLinecap="round"
          />

          {/* 3. Glowing Edge Aura */}
          <path
            d="M 40,270 C 120,195 140,195 220,195 C 320,195 400,345 500,345 C 600,345 680,195 780,195 C 860,195 880,270 960,270"
            fill="none"
            stroke="url(#roadGlow)"
            strokeWidth="42"
            strokeLinecap="round"
          />

          {/* 4. Dashed Center Yellow Lane Line */}
          <path
            d="M 40,270 C 120,195 140,195 220,195 C 320,195 400,345 500,345 C 600,345 680,195 780,195 C 860,195 880,270 960,270"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeDasharray="10 10"
          />

          {/* 5. Animated Scroll Progress Line */}
          <motion.path
            d="M 40,270 C 120,195 140,195 220,195 C 320,195 400,345 500,345 C 600,345 680,195 780,195 C 860,195 880,270 960,270"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="4"
            style={{ pathLength }}
          />

          {/* --- 3 CLEAR VISIBLE CONNECTOR LINES FROM ROAD DOT TO CARDS --- */}
          {/* Line 1: Amber Line connecting Road Dot to 10th Card */}
          <line x1="220" y1="195" x2="220" y2="135" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 5" opacity="0.95" />

          {/* Line 2: Cyan Line connecting Road Dot to Intermediate Card */}
          <line x1="500" y1="345" x2="500" y2="405" stroke="#06b6d4" strokeWidth="3" strokeDasharray="5 5" opacity="0.95" />

          {/* Line 3: Purple Line connecting Road Dot to B.Tech Card */}
          <line x1="780" y1="195" x2="780" y2="135" stroke="#a855f7" strokeWidth="3" strokeDasharray="5 5" opacity="0.95" />

          {/* --- 3 COLOR-CODED ROAD DOTS IN THE ROAD --- */}
          {/* Dot 1: Amber Road Dot (10th) */}
          <circle cx="220" cy="195" r="14" fill="#090d16" stroke="#f59e0b" strokeWidth="4" />
          <circle cx="220" cy="195" r="5" fill="#f59e0b" />

          {/* Dot 2: Cyan Road Dot (Intermediate) */}
          <circle cx="500" cy="345" r="14" fill="#090d16" stroke="#06b6d4" strokeWidth="4" />
          <circle cx="500" cy="345" r="5" fill="#06b6d4" />

          {/* Dot 3: Purple Road Dot (University) */}
          <circle cx="780" cy="195" r="14" fill="#090d16" stroke="#a855f7" strokeWidth="4" />
          <circle cx="780" cy="195" r="5" fill="#a855f7" />
        </svg>

        {/* 3 Milestone Card Containers (Positioned completely outside the road on ALL screens) */}
        <div className="relative w-full grid grid-cols-3 gap-2 sm:gap-6 z-10 px-1 sm:px-4 h-full">

          {/* --- SCHOOLING (10TH) CARD: AMBER THEME (ENTIRELY ABOVE ROAD) --- */}
          <div className="flex flex-col items-center sm:items-start text-left justify-start -mt-2 sm:-mt-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group w-full max-w-[115px] sm:max-w-[260px]"
            >
              {/* Amber Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-yellow-600/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative glass-card rounded-lg sm:rounded-xl p-2 sm:p-4 border border-amber-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-amber-500/10 flex flex-col justify-between transition-all duration-300">
                <div className="flex items-center justify-between gap-1 mb-1.5 pb-1.5 sm:mb-2 sm:pb-2 border-b border-gray-800/80">
                  <div className="flex items-center gap-1">
                    <School className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      CBSE
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-amber-400 flex items-center gap-0.5">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                    <span className="hidden sm:inline">2019 - 2020</span>
                    <span className="sm:hidden">19-20</span>
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors my-0.5 sm:my-1">
                  10th Standard
                </h3>

                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-300 pt-1.5 sm:pt-2 border-t border-gray-800/80 bg-gray-900/40 p-1.5 sm:p-2 rounded-lg mt-1 sm:mt-2">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200 truncate">
                    <span className="hidden sm:inline">Gorkey Public School</span>
                    <span className="sm:hidden">Gorkey Public</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- INTERMEDIATE CARD: CYAN THEME (ENTIRELY BELOW ROAD) --- */}
          <div className="flex flex-col items-center text-left justify-end pt-56 sm:pt-96">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: 6, scale: 1.03 }}
              className="relative group w-full max-w-[115px] sm:max-w-[260px]"
            >
              {/* Cyan Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 via-blue-600/20 to-teal-600/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative glass-card rounded-lg sm:rounded-xl p-2 sm:p-4 border border-cyan-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-cyan-500/10 flex flex-col justify-between transition-all duration-300">
                <div className="flex items-center justify-between gap-1 mb-1.5 pb-1.5 sm:mb-2 sm:pb-2 border-b border-gray-800/80">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      TSBIE
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-400 flex items-center gap-0.5">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                    <span className="hidden sm:inline">2020 - 2022</span>
                    <span className="sm:hidden">20-22</span>
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors my-0.5 sm:my-1">
                  Intermediate
                </h3>

                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-300 pt-1.5 sm:pt-2 border-t border-gray-800/80 bg-gray-900/40 p-1.5 sm:p-2 rounded-lg mt-1 sm:mt-2">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200 truncate">
                    <span className="hidden sm:inline">Krishnaveni Junior College</span>
                    <span className="sm:hidden">Krishnaveni Jr</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- UNIVERSITY (B.TECH) CARD: PURPLE THEME (ENTIRELY ABOVE ROAD) --- */}
          <div className="flex flex-col items-center sm:items-end text-left justify-start -mt-2 sm:-mt-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group w-full max-w-[115px] sm:max-w-[260px]"
            >
              {/* Purple Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-indigo-600/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative glass-card rounded-lg sm:rounded-xl p-2 sm:p-4 border border-purple-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-purple-500/10 flex flex-col justify-between transition-all duration-300">
                <div className="flex items-center justify-between gap-1 mb-1.5 pb-1.5 sm:mb-2 sm:pb-2 border-b border-gray-800/80">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      AI & DS
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-purple-400 flex items-center gap-0.5">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                    <span className="hidden sm:inline">2022 - 2026</span>
                    <span className="sm:hidden">22-26</span>
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors my-0.5 sm:my-1">
                  B. Tech
                </h3>

                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-300 pt-1.5 sm:pt-2 border-t border-gray-800/80 bg-gray-900/40 p-1.5 sm:p-2 rounded-lg mt-1 sm:mt-2">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200 truncate">
                    <span className="hidden sm:inline">KL University</span>
                    <span className="sm:hidden">KL Univ</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
};
