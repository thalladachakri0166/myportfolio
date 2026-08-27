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
      className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-24 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
          <Navigation className="w-4 h-4 text-amber-400 rotate-90 animate-pulse" /> Winding Academic Roadmap
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Education <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
          A continuous curved road timeline connecting academic milestones with color-coded road dots & indicator lines.
        </p>
      </motion.div>

      {/* ========================================================================= */}
      {/* --- DESKTOP VIEW: HORIZONTAL WINDING ROADWAY (md+ screens) --- */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative min-h-[600px] items-center justify-center my-2">

        {/* SVG Curved Winding Roadway, Dots & Connector Lines (Desktop) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="roadGlowDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Outer Asphalt Base */}
          <path
            d="M 50,300 C 120,200 140,200 220,200 C 320,200 400,400 500,400 C 600,400 680,200 780,200 C 860,200 880,300 950,300"
            fill="none"
            stroke="#1e293b"
            strokeWidth="56"
            strokeLinecap="round"
          />

          {/* Inner Asphalt Track */}
          <path
            d="M 50,300 C 120,200 140,200 220,200 C 320,200 400,400 500,400 C 600,400 680,200 780,200 C 860,200 880,300 950,300"
            fill="none"
            stroke="#090d16"
            strokeWidth="44"
            strokeLinecap="round"
          />

          {/* Glowing Edge Aura */}
          <path
            d="M 50,300 C 120,200 140,200 220,200 C 320,200 400,400 500,400 C 600,400 680,200 780,200 C 860,200 880,300 950,300"
            fill="none"
            stroke="url(#roadGlowDesktop)"
            strokeWidth="48"
            strokeLinecap="round"
          />

          {/* Dashed Center Yellow Lane Line */}
          <path
            d="M 50,300 C 120,200 140,200 220,200 C 320,200 400,400 500,400 C 600,400 680,200 780,200 C 860,200 880,300 950,300"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeDasharray="14 14"
          />

          {/* Animated Scroll Progress Line */}
          <motion.path
            d="M 50,300 C 120,200 140,200 220,200 C 320,200 400,400 500,400 C 600,400 680,200 780,200 C 860,200 880,300 950,300"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="4"
            style={{ pathLength }}
          />

          {/* --- DESKTOP CONNECTOR LINES --- */}
          <line x1="220" y1="200" x2="220" y2="125" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 5" opacity="0.95" />
          <line x1="500" y1="400" x2="500" y2="475" stroke="#06b6d4" strokeWidth="3" strokeDasharray="5 5" opacity="0.95" />
          <line x1="780" y1="200" x2="780" y2="125" stroke="#a855f7" strokeWidth="3" strokeDasharray="5 5" opacity="0.95" />

          {/* --- DESKTOP ROAD DOTS --- */}
          <circle cx="220" cy="200" r="15" fill="#090d16" stroke="#f59e0b" strokeWidth="4" />
          <circle cx="220" cy="200" r="5" fill="#f59e0b" />

          <circle cx="500" cy="400" r="15" fill="#090d16" stroke="#06b6d4" strokeWidth="4" />
          <circle cx="500" cy="400" r="5" fill="#06b6d4" />

          <circle cx="780" cy="200" r="15" fill="#090d16" stroke="#a855f7" strokeWidth="4" />
          <circle cx="780" cy="200" r="5" fill="#a855f7" />
        </svg>

        {/* 3 Desktop Cards */}
        <div className="relative w-full grid grid-cols-3 gap-6 z-10 px-4 h-full">

          {/* 10TH CARD (UPSIDE) */}
          <div className="flex flex-col items-start text-left justify-start -mt-6">
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group w-full max-w-[270px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 to-yellow-600/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative glass-card rounded-2xl p-5 border border-amber-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-amber-500/10 flex flex-col justify-between transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      CBSE
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> 2019 - 2020
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors my-1">
                  10th Standard
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-300 pt-2.5 border-t border-gray-800/80 bg-gray-900/40 p-2.5 rounded-xl mt-3">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200 truncate">Gorkey Public School</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* INTERMEDIATE CARD (DOWNSIDE) */}
          <div className="flex flex-col items-center text-left justify-end pt-[480px]">
            <motion.div
              whileHover={{ y: 6, scale: 1.03 }}
              className="relative group w-full max-w-[270px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 to-teal-600/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative glass-card rounded-2xl p-5 border border-cyan-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-cyan-500/10 flex flex-col justify-between transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      TSBIE
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> 2020 - 2022
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors my-1">
                  Intermediate
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-300 pt-2.5 border-t border-gray-800/80 bg-gray-900/40 p-2.5 rounded-xl mt-3">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200 truncate">Krishnaveni Junior College</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* B.TECH CARD (UPSIDE) */}
          <div className="flex flex-col items-end text-left justify-start -mt-6">
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group w-full max-w-[270px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-600/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative glass-card rounded-2xl p-5 border border-purple-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-purple-500/10 flex flex-col justify-between transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      AI & DS
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-purple-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" /> 2022 - 2026
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors my-1">
                  B. Tech
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-300 pt-2.5 border-t border-gray-800/80 bg-gray-900/40 p-2.5 rounded-xl mt-3">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200 truncate">KL University</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* --- MOBILE VIEW: VERTICAL WINDING ROADWAY (sm/mobile screens) --- */}
      {/* ========================================================================= */}
      <div className="md:hidden relative py-4">
        {/* Central Vertical Winding S-Road Track */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-12 bg-gray-950 border-x-2 border-gray-800 rounded-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:8px_8px] opacity-40" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-amber-400/80 animate-pulse z-10" />
          <motion.div
            style={{ height: useTransform(smoothProgress, [0.1, 0.9], ['0%', '100%']) }}
            className="absolute left-0 right-0 top-0 bg-gradient-to-b from-amber-500 via-cyan-500 to-purple-600 opacity-40 z-10"
          />
        </div>

        {/* 3 Full Uncut Cards Stacked Vertically with Connector Dots & Lines */}
        <div className="space-y-12 relative z-10">

          {/* MOBILE 10TH CARD (AMBER THEME) */}
          <div className="relative flex flex-col items-center">
            {/* Center Road Dot */}
            <div className="w-10 h-10 rounded-full bg-gray-950 border-4 border-amber-500 shadow-lg shadow-amber-500/40 flex items-center justify-center mb-3 z-10">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
            </div>

            {/* Vertical Connector Line */}
            <div className="w-0.5 h-6 bg-amber-400 border-r-2 border-dashed border-amber-400 mb-2" />

            {/* Full Uncut 10th Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-sm glass-card rounded-2xl p-5 border border-amber-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-amber-500/10 space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <School className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    CBSE
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> 2019 - 2020
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-white">10th Standard</h3>
              <div className="flex items-center gap-2 text-xs text-gray-300 pt-2 border-t border-gray-800 bg-gray-900/40 p-2.5 rounded-xl">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="font-semibold text-gray-200">Gorkey Public School</span>
              </div>
            </motion.div>
          </div>

          {/* MOBILE INTERMEDIATE CARD (CYAN THEME) */}
          <div className="relative flex flex-col items-center">
            {/* Center Road Dot */}
            <div className="w-10 h-10 rounded-full bg-gray-950 border-4 border-cyan-500 shadow-lg shadow-cyan-500/40 flex items-center justify-center mb-3 z-10">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Vertical Connector Line */}
            <div className="w-0.5 h-6 bg-cyan-400 border-r-2 border-dashed border-cyan-400 mb-2" />

            {/* Full Uncut Intermediate Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-sm glass-card rounded-2xl p-5 border border-cyan-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-cyan-500/10 space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    TSBIE
                  </span>
                </div>
                <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" /> 2020 - 2022
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-white">Intermediate</h3>
              <div className="flex items-center gap-2 text-xs text-gray-300 pt-2 border-t border-gray-800 bg-gray-900/40 p-2.5 rounded-xl">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="font-semibold text-gray-200">Krishnaveni Junior College</span>
              </div>
            </motion.div>
          </div>

          {/* MOBILE B.TECH CARD (PURPLE THEME) */}
          <div className="relative flex flex-col items-center">
            {/* Center Road Dot */}
            <div className="w-10 h-10 rounded-full bg-gray-950 border-4 border-purple-500 shadow-lg shadow-purple-500/40 flex items-center justify-center mb-3 z-10">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping" />
            </div>

            {/* Vertical Connector Line */}
            <div className="w-0.5 h-6 bg-purple-400 border-r-2 border-dashed border-purple-400 mb-2" />

            {/* Full Uncut B.Tech Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-sm glass-card rounded-2xl p-5 border border-purple-500/40 bg-gray-950/95 backdrop-blur-xl shadow-xl shadow-purple-500/10 space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    AI & DS
                  </span>
                </div>
                <span className="text-xs font-semibold text-purple-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" /> 2022 - 2026
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-white">B. Tech</h3>
              <div className="flex items-center gap-2 text-xs text-gray-300 pt-2 border-t border-gray-800 bg-gray-900/40 p-2.5 rounded-xl">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="font-semibold text-gray-200">KL University</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
};
