import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, HeartHandshake, Calendar, Users, ZoomIn } from 'lucide-react';

export const Volunteer: React.FC = () => {
  const [currentNssImage, setCurrentNssImage] = useState(0);
  const [currentAriseImage, setCurrentAriseImage] = useState(0);
  const [isNssPaused, setIsNssPaused] = useState(false);
  const [isArisePaused, setIsArisePaused] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  useEffect(() => {
    if (isNssPaused) return;
    const timer = setInterval(() => {
      setCurrentNssImage((prev) => (prev + 1) % nssImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isNssPaused, nssImages.length]);

  useEffect(() => {
    if (isArisePaused) return;
    const timer = setInterval(() => {
      setCurrentAriseImage((prev) => (prev + 1) % ariseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isArisePaused, ariseImages.length]);

  return (
    <div id="volunteer" className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <HeartHandshake className="w-4 h-4" /> Leadership & Community
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Volunteer <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Experience</span>
        </h2>
      </motion.div>

      {/* Grid of Volunteer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* NSS Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-pink-500/40 shadow-xl flex flex-col justify-between transition-colors"
        >
          <div>
            {/* Carousel Container */}
            <div
              className="relative h-56 sm:h-64 w-full mb-6 rounded-xl overflow-hidden bg-gray-950 border border-gray-800 shadow-inner group"
              onMouseEnter={() => setIsNssPaused(true)}
              onMouseLeave={() => setIsNssPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentNssImage}
                  src={nssImages[currentNssImage]}
                  alt="NSS Activities"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setPreviewImage(nssImages[currentNssImage])}
                />
              </AnimatePresence>

              {/* Overlay Zoom Hint */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 cursor-pointer pointer-events-none"
              >
                <ZoomIn className="w-4 h-4" /> Click to enlarge
              </div>

              {/* Controls */}
              <button
                onClick={() => setCurrentNssImage((prev) => (prev - 1 + nssImages.length) % nssImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white hover:bg-pink-600 transition-colors shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentNssImage((prev) => (prev + 1) % nssImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white hover:bg-pink-600 transition-colors shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {nssImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentNssImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentNssImage ? 'bg-pink-400 w-5' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Title & Organization */}
            <div className="space-y-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider">
                UNIT-12 Co-Coordinator
              </span>
              <h3 className="text-2xl font-bold text-white">National Service Scheme (NSS)</h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Led and organized community service programs, blood donation drives, and awareness campaigns at KL University. Promoted from NSS Volunteer to Co-Coordinator (UNIT-12), demonstrating strong organizational, team leadership, and communication capabilities.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-pink-400" /> NOV 2023 - OCT 2024
            </span>
            <span className="flex items-center gap-1.5 text-pink-300">
              <Users className="w-3.5 h-3.5" /> KL University
            </span>
          </div>
        </motion.div>

        {/* ARISE Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-purple-500/40 shadow-xl flex flex-col justify-between transition-colors"
        >
          <div>
            {/* Carousel Container */}
            <div
              className="relative h-56 sm:h-64 w-full mb-6 rounded-xl overflow-hidden bg-gray-950 border border-gray-800 shadow-inner group"
              onMouseEnter={() => setIsArisePaused(true)}
              onMouseLeave={() => setIsArisePaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentAriseImage}
                  src={ariseImages[currentAriseImage]}
                  alt="ARISE Activities"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setPreviewImage(ariseImages[currentAriseImage])}
                />
              </AnimatePresence>

              {/* Overlay Zoom Hint */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 cursor-pointer pointer-events-none"
              >
                <ZoomIn className="w-4 h-4" /> Click to enlarge
              </div>

              {/* Controls */}
              <button
                onClick={() => setCurrentAriseImage((prev) => (prev - 1 + ariseImages.length) % ariseImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white hover:bg-purple-600 transition-colors shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentAriseImage((prev) => (prev + 1) % ariseImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white hover:bg-purple-600 transition-colors shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {ariseImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentAriseImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentAriseImage ? 'bg-purple-400 w-5' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Title & Organization */}
            <div className="space-y-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                Student Representative
              </span>
              <h3 className="text-2xl font-bold text-white">ARISE - Student Body (AI & DS)</h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Acted as key liaison between AI & Data Science students and university administration. Addressed academic, transport, hostel, and infrastructure feedback, driving collaborative campus improvements and student engagement.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> NOV 2024 - MAY 2025
            </span>
            <span className="flex items-center gap-1.5 text-purple-300">
              <Users className="w-3.5 h-3.5" /> Department of AI & DS
            </span>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={previewImage}
                alt="Enlarged Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-gray-800 shadow-2xl"
              />
              <button
                className="absolute -top-4 -right-4 p-2 rounded-full bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg"
                onClick={() => setPreviewImage(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
