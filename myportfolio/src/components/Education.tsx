import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  GraduationCap,
  School,
  BookOpen,
  Calendar,
  CheckCircle2,
  Navigation,
  Award,
  MapPin,
  Flag,
} from 'lucide-react';

interface EducationItem {
  id: string;
  year: string;
  degree: string;
  board: string;
  institution: string;
  description: string;
  highlights: string[];
  status: string;
  icon: React.ReactNode;
  badgeBg: string;
  borderColor: string;
  glowColor: string;
  signText: string;
}

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress relative to the Education section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform progress to height percentage
  const roadFillHeight = useTransform(smoothProgress, [0.1, 0.85], ['0%', '100%']);
  const carPosition = useTransform(smoothProgress, [0.1, 0.85], ['0%', '98%']);

  const educationData: EducationItem[] = [
    {
      id: 'btech',
      year: '2022 - 2026',
      degree: 'B.Tech - Artificial Intelligence & Data Science',
      board: 'KL University',
      institution: 'Koneru Lakshmaiah Education Foundation (KL University)',
      description:
        'Specializing in Artificial Intelligence, Machine Learning, Data Analytics, and Full-Stack Engineering. Maintained high academic excellence with a CGPA of 9.15.',
      highlights: [
        'Specialization: Artificial Intelligence & Data Science',
        'Academic Performance: CGPA 9.15 / 10.0',
        'Student Leadership: ARISE Representative & NSS UNIT-12 Co-Coordinator',
        'Hands-on practical projects in AI, ML, & Web Technologies',
      ],
      status: 'Graduated (Honors)',
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      borderColor: 'group-hover:border-purple-500/60',
      glowColor: 'from-purple-600/30 via-pink-600/20 to-blue-600/30',
      signText: 'DESTINATION: B.TECH (AI & DS)',
    },
    {
      id: 'intermediate',
      year: '2020 - 2022',
      degree: 'Intermediate (12th Standard - MPC)',
      board: 'TSBIE (Telangana State Board of Intermediate Education)',
      institution: 'Krishnaveni Junior College',
      description:
        'Focused on Mathematics, Physics, and Chemistry (MPC). Developed rigorous analytical skills, mathematical logic, and scientific problem-solving abilities.',
      highlights: [
        'Curriculum: Mathematics, Physics & Chemistry (MPC)',
        'Board: Telangana State Board of Intermediate Education (TSBIE)',
        'Built strong foundation for engineering competitive exams',
      ],
      status: 'Completed',
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      borderColor: 'group-hover:border-blue-500/60',
      glowColor: 'from-blue-600/30 via-cyan-600/20 to-purple-600/30',
      signText: 'CHECKPOINT 02: INTERMEDIATE',
    },
    {
      id: '10th',
      year: '2019 - 2020',
      degree: 'Secondary School Certificate (10th Standard)',
      board: 'CBSE (Central Board of Secondary Education)',
      institution: 'Gorkey Public School',
      description:
        'Completed secondary education with comprehensive academic foundation across science, mathematics, and languages under the Central Board of Secondary Education.',
      highlights: [
        'Curriculum: Central Board of Secondary Education (CBSE)',
        'Gorkey Public School',
        'Participated actively in school science exhibitions & extra-curriculars',
      ],
      status: 'Completed',
      icon: <School className="w-6 h-6 text-amber-400" />,
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      borderColor: 'group-hover:border-amber-500/60',
      glowColor: 'from-amber-600/30 via-orange-600/20 to-yellow-600/30',
      signText: 'START LINE: 10TH CBSE',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-24 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Navigation className="w-4 h-4 text-blue-400 animate-bounce" /> Academic Highway
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Education <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">Roadmap</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          An interactive roadway journey mapping academic milestones from high school foundation to specialized engineering degree.
        </p>
      </motion.div>

      {/* Main Roadway Container */}
      <div className="relative my-8">

        {/* --- DESKTOP CENTRAL ROAD & CAR (md+ screens) --- */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-14 bg-gray-950/90 border-x-2 border-gray-800 rounded-full shadow-2xl overflow-hidden z-10">
          {/* Asphalt texture / stripes */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:8px_8px] opacity-40" />

          {/* Animated Moving Yellow Center Lane Divider */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 border-r-2 border-dashed border-amber-400/80 animate-pulse" />

          {/* Glowing Neon Road Fill on Scroll */}
          <motion.div
            style={{ height: roadFillHeight }}
            className="absolute left-0 right-0 top-0 bg-gradient-to-b from-purple-600 via-blue-500 to-amber-400 opacity-30 blur-sm"
          />

          {/* Traveling Sports Car / Vehicle Marker */}
          <motion.div
            style={{ top: carPosition }}
            className="absolute left-1/2 -translate-x-1/2 z-30 transition-transform duration-75"
          >
            <div className="relative p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border border-white/40 shadow-xl shadow-blue-500/50 flex items-center justify-center animate-pulse">
              <Navigation className="w-5 h-5 text-white transform rotate-180 fill-white" />
            </div>
          </motion.div>
        </div>

        {/* --- MOBILE LEFT ROAD & CAR (sm screens) --- */}
        <div className="md:hidden absolute left-5 top-4 bottom-4 w-10 bg-gray-950 border-x border-gray-800 rounded-full overflow-hidden z-10">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-amber-400/70" />
          <motion.div
            style={{ height: roadFillHeight }}
            className="absolute left-0 right-0 top-0 bg-gradient-to-b from-purple-600 via-blue-500 to-amber-400 opacity-40"
          />
          <motion.div
            style={{ top: carPosition }}
            className="absolute left-1/2 -translate-x-1/2 z-30"
          >
            <div className="p-1.5 rounded-full bg-blue-600 border border-white/40 shadow-lg">
              <Navigation className="w-4 h-4 text-white transform rotate-180 fill-white" />
            </div>
          </motion.div>
        </div>

        {/* --- MILESTONE CARDS ALONG THE ROAD --- */}
        <div className="space-y-16 sm:space-y-24 relative z-20">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >

                {/* Road Sign Banner Header (Floating above card) */}
                <div className="w-full md:w-1/2 px-0 md:px-8 pl-14 md:pl-8">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Ambient Glow Aura */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${item.glowColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Card Container */}
                    <div
                      className={`relative glass-card rounded-3xl p-6 sm:p-8 border border-gray-800/90 ${item.borderColor} bg-gray-950/85 backdrop-blur-xl shadow-2xl transition-all duration-500`}
                    >
                      {/* Road Highway Sign Tag Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800/80">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                            <Flag className="w-3 h-3 text-amber-400" /> {item.signText}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 bg-gray-900/80 px-2.5 py-1 rounded-lg border border-gray-800">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" /> {item.year}
                        </span>
                      </div>

                      {/* Title & Board */}
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`p-2 rounded-xl bg-gray-900 border border-gray-800 shadow-md`}>
                            {item.icon}
                          </span>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                              {item.degree}
                            </h3>
                            <p className="text-xs font-semibold text-gray-400 flex items-center gap-1 mt-0.5">
                              <Award className="w-3.5 h-3.5 text-purple-400" /> {item.board}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-4 bg-gray-900/40 p-2.5 rounded-xl border border-gray-800/60">
                        <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        <span className="font-medium">{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-gray-800/80">
                        {item.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Card Footer Status */}
                      <div className="mt-6 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs">
                        <span className="text-gray-400">Status</span>
                        <span className={`px-3 py-1 rounded-full font-bold text-xs border ${item.badgeBg}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Central Road Marker Node (Dot on the road) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-950 border-4 border-blue-500 shadow-xl shadow-blue-500/40 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400 animate-ping" />
                  </div>
                </div>

                {/* Opposite empty space for desktop symmetry */}
                <div className="hidden md:block w-1/2" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
