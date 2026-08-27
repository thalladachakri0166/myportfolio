import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  X,
  HeartHandshake,
  Calendar,
  Users,
  ZoomIn,
  Award,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';

export const Volunteer: React.FC = () => {
  const [currentNssImage, setCurrentNssImage] = useState(0);
  const [currentAriseImage, setCurrentAriseImage] = useState(0);
  const [isNssPaused, setIsNssPaused] = useState(false);
  const [isArisePaused, setIsArisePaused] = useState(false);
  
  // Lightbox preview state: { images: string[]; index: number; title: string } | null
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const nssImages = [
    '/images/volunteer/nss/1.JPG',
    '/images/volunteer/nss/2.jpg',
    '/images/volunteer/nss/3.jpg',
    '/images/volunteer/nss/4.jpg',
    '/images/volunteer/nss/5.jpg',
    '/images/volunteer/nss/6.jpg',
  ];

  const ariseImages = [
    '/images/volunteer/arise/1.jpg',
    '/images/volunteer/arise/2.jpg',
    '/images/volunteer/arise/3.jpg',
  ];

  // Auto-play NSS slideshow
  useEffect(() => {
    if (isNssPaused || lightbox !== null) return;
    const timer = setInterval(() => {
      setCurrentNssImage((prev) => (prev + 1) % nssImages.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isNssPaused, nssImages.length, lightbox]);

  // Auto-play ARISE slideshow
  useEffect(() => {
    if (isArisePaused || lightbox !== null) return;
    const timer = setInterval(() => {
      setCurrentAriseImage((prev) => (prev + 1) % ariseImages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isArisePaused, ariseImages.length, lightbox]);

  const nssHighlights = [
    'Organized campus-wide blood donation drives and community health camps.',
    'Promoted from NSS Volunteer to UNIT-12 Co-Coordinator for outstanding leadership.',
    'Led social awareness campaigns on environmental sustainability & education.',
    'Managed team coordination for 50+ volunteers across university events.',
  ];

  const ariseHighlights = [
    'Served as key student liaison between 300+ AI & DS students and university faculty.',
    'Collected and advocated student feedback on academic curriculum & hostel facilities.',
    'Coordinated departmental technical workshops, hackathons, and guest lectures.',
    'Fostered collaborative student engagement and peer mentoring networks.',
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <HeartHandshake className="w-4 h-4 text-pink-400 animate-pulse" /> Leadership & Community Impact
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Volunteer <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Driving meaningful social change, team leadership, and campus advocacy through active community engagement.
        </p>
      </motion.div>

      {/* Grid of Volunteer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* Card 1: NSS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -8 }}
          className="relative group"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/30 via-purple-600/20 to-rose-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Card Body */}
          <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-gray-800/90 group-hover:border-pink-500/50 bg-gray-950/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between transition-all duration-500 h-full">
            <div>
              
              {/* Carousel Container */}
              <div
                className="relative h-60 sm:h-64 w-full mb-6 rounded-2xl overflow-hidden bg-gray-950 border border-gray-800/90 shadow-inner group/carousel"
                onMouseEnter={() => setIsNssPaused(true)}
                onMouseLeave={() => setIsNssPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentNssImage}
                    src={nssImages[currentNssImage]}
                    alt="NSS Activities"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover cursor-pointer group-hover/carousel:scale-105 transition-transform duration-700 ease-out"
                    onClick={() => setLightbox({ images: nssImages, index: currentNssImage, title: 'NSS Activities Gallery' })}
                  />
                </AnimatePresence>

                {/* Top Image Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-pink-300 flex items-center gap-1.5 shadow-md">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{currentNssImage + 1} / {nssImages.length} Photos</span>
                </div>

                {/* Overlay Zoom Button */}
                <button
                  onClick={() => setLightbox({ images: nssImages, index: currentNssImage, title: 'NSS Activities Gallery' })}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-xs font-semibold gap-2"
                  aria-label="Enlarge image"
                >
                  <div className="px-4 py-2 rounded-full bg-pink-600/90 hover:bg-pink-500 backdrop-blur-md text-white font-medium flex items-center gap-2 shadow-lg transform translate-y-2 group-hover/carousel:translate-y-0 transition-all">
                    <ZoomIn className="w-4 h-4" /> Expand Gallery
                  </div>
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentNssImage((prev) => (prev - 1 + nssImages.length) % nssImages.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gray-950/80 text-white hover:bg-pink-600 border border-gray-800 hover:border-transparent transition-all shadow-xl opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentNssImage((prev) => (prev + 1) % nssImages.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gray-950/80 text-white hover:bg-pink-600 border border-gray-800 hover:border-transparent transition-all shadow-xl opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Carousel Pagination Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  {nssImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentNssImage(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentNssImage ? 'bg-pink-400 w-6' : 'bg-white/40 hover:bg-white/80 w-1.5'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Title & Role Header */}
              <div className="space-y-2 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" /> UNIT-12 Co-Coordinator
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-pink-400" /> NOV 2023 - OCT 2024
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors">
                  National Service Scheme (NSS)
                </h3>
              </div>

              {/* Summary Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Promoted from NSS Volunteer to Co-Coordinator (UNIT-12) for organizing impactful community programs, social campaigns, and mega blood donation drives at KL University.
              </p>

              {/* Key Highlights Bullet List */}
              <div className="space-y-2.5 pt-2 border-t border-gray-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Key Contributions & Achievements
                </p>
                <div className="space-y-2">
                  {nssHighlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Card Footer */}
            <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 font-medium text-gray-300">
                <Users className="w-4 h-4 text-pink-400" /> KL University
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-[11px] font-semibold">
                Social Service
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: ARISE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          whileHover={{ y: -8 }}
          className="relative group"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-indigo-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Card Body */}
          <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-gray-800/90 group-hover:border-purple-500/50 bg-gray-950/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between transition-all duration-500 h-full">
            <div>
              
              {/* Carousel Container */}
              <div
                className="relative h-60 sm:h-64 w-full mb-6 rounded-2xl overflow-hidden bg-gray-950 border border-gray-800/90 shadow-inner group/carousel"
                onMouseEnter={() => setIsArisePaused(true)}
                onMouseLeave={() => setIsArisePaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentAriseImage}
                    src={ariseImages[currentAriseImage]}
                    alt="ARISE Activities"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover cursor-pointer group-hover/carousel:scale-105 transition-transform duration-700 ease-out"
                    onClick={() => setLightbox({ images: ariseImages, index: currentAriseImage, title: 'ARISE Activities Gallery' })}
                  />
                </AnimatePresence>

                {/* Top Image Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-purple-300 flex items-center gap-1.5 shadow-md">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{currentAriseImage + 1} / {ariseImages.length} Photos</span>
                </div>

                {/* Overlay Zoom Button */}
                <button
                  onClick={() => setLightbox({ images: ariseImages, index: currentAriseImage, title: 'ARISE Activities Gallery' })}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-xs font-semibold gap-2"
                  aria-label="Enlarge image"
                >
                  <div className="px-4 py-2 rounded-full bg-purple-600/90 hover:bg-purple-500 backdrop-blur-md text-white font-medium flex items-center gap-2 shadow-lg transform translate-y-2 group-hover/carousel:translate-y-0 transition-all">
                    <ZoomIn className="w-4 h-4" /> Expand Gallery
                  </div>
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentAriseImage((prev) => (prev - 1 + ariseImages.length) % ariseImages.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gray-950/80 text-white hover:bg-purple-600 border border-gray-800 hover:border-transparent transition-all shadow-xl opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentAriseImage((prev) => (prev + 1) % ariseImages.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-gray-950/80 text-white hover:bg-purple-600 border border-gray-800 hover:border-transparent transition-all shadow-xl opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Carousel Pagination Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  {ariseImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentAriseImage(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentAriseImage ? 'bg-purple-400 w-6' : 'bg-white/40 hover:bg-white/80 w-1.5'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Title & Role Header */}
              <div className="space-y-2 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" /> Student Representative
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" /> NOV 2024 - MAY 2025
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  ARISE - Student Body (AI & DS)
                </h3>
              </div>

              {/* Summary Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Served as key student representative bridging communication between Department of AI & Data Science students and university leadership to enhance campus life and technical engagement.
              </p>

              {/* Key Highlights Bullet List */}
              <div className="space-y-2.5 pt-2 border-t border-gray-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Key Contributions & Achievements
                </p>
                <div className="space-y-2">
                  {ariseHighlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Card Footer */}
            <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 font-medium text-gray-300">
                <Users className="w-4 h-4 text-purple-400" /> Dept of AI & DS
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold">
                Student Leadership
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Lightbox Image Preview Modal with Gallery Navigation */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="w-full flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-white font-bold text-base sm:text-lg">{lightbox.title}</h4>
                  <span className="text-xs text-gray-400 px-2.5 py-0.5 rounded-full bg-gray-900 border border-gray-800">
                    {lightbox.index + 1} of {lightbox.images.length}
                  </span>
                </div>
                <button
                  className="p-2 rounded-full bg-gray-900/90 text-gray-300 hover:text-white border border-gray-800 hover:bg-gray-800 transition-colors shadow-lg"
                  onClick={() => setLightbox(null)}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Preview Image */}
              <div className="relative w-full flex items-center justify-center bg-gray-950 rounded-2xl border border-gray-800/80 overflow-hidden shadow-2xl p-2">
                <img
                  src={lightbox.images[lightbox.index]}
                  alt="Enlarged Preview"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />

                {/* Modal Navigation Arrows */}
                <button
                  onClick={() =>
                    setLightbox({
                      ...lightbox,
                      index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length,
                    })
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-pink-600 border border-white/10 transition-all shadow-2xl"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    setLightbox({
                      ...lightbox,
                      index: (lightbox.index + 1) % lightbox.images.length,
                    })
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-pink-600 border border-white/10 transition-all shadow-2xl"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Thumbnails Strip */}
              <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full p-2">
                {lightbox.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ ...lightbox, index: idx })}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === lightbox.index ? 'border-pink-500 scale-105 shadow-md shadow-pink-500/20' : 'border-gray-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
