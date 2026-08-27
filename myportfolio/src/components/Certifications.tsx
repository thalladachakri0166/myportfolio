import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X, Eye } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  image: string;
  link: string;
  color: string;
  borderColor: string;
  glowColor: string;
}

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credential: '441f972764b4413597bd3c0a0200b5e3',
      image: '/images/certifications/awscp.png',
      link: 'https://www.credly.com/badges/7678954e-fde9-4304-b187-5a8c318da5ce/public_url',
      color: 'from-amber-500/10 via-amber-600/5 to-transparent',
      borderColor: 'hover:border-amber-500/50',
      glowColor: 'hover:shadow-amber-500/10',
    },
    {
      title: 'Oracle Cloud Infrastructure Certified AI Associate',
      issuer: 'Oracle',
      date: '2024',
      credential: '103466408OCI25AICFA',
      image: '/images/certifications/Oracle.png',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=0A0ED68A1BE7AB0EF0A610D2A7F40D0C1C8F9CCB656291BBDA2838DE9F77DE37',
      color: 'from-rose-500/10 via-rose-600/5 to-transparent',
      borderColor: 'hover:border-rose-500/50',
      glowColor: 'hover:shadow-rose-500/10',
    },
    {
      title: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: '2024',
      credential: '5116913',
      image: '/images/certifications/salesforce.png',
      link: 'https://trailhead.salesforce.com/en/credentials/verification',
      color: 'from-blue-500/10 via-blue-600/5 to-transparent',
      borderColor: 'hover:border-blue-500/50',
      glowColor: 'hover:shadow-blue-500/10',
    },
    {
      title: 'Multicloud Network Associate',
      issuer: 'Aviatrix',
      date: '2025',
      credential: '2025-23634',
      image: '/images/certifications/multicloud.png',
      link: 'https://www.credly.com/badges/bbee5aeb-f7fb-499a-9c85-5f7c18a16236/public_url',
      color: 'from-purple-500/10 via-purple-600/5 to-transparent',
      borderColor: 'hover:border-purple-500/50',
      glowColor: 'hover:shadow-purple-500/10',
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5" /> Industry Recognized Credentials
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Certifications & <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Badges</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Globally verified credentials in Cloud Architecture, AI Systems, Multicloud Networking, and Salesforce AI
        </p>
      </motion.div>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.credential}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`group relative glass-card rounded-2xl p-6 border border-gray-800/80 ${cert.borderColor} ${cert.glowColor} transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between`}
          >
            {/* Background Ambient Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${cert.color} rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

            <div>
              {/* Card Header & Verification Status */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800/80 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-7 h-7 text-yellow-400" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5 mb-4 relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-yellow-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-medium">
                  <span className="text-gray-200">{cert.issuer}</span>
                  <span>•</span>
                  <span className="font-mono text-yellow-400">{cert.date}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-gray-950/80 border border-gray-800/80 mb-4 text-xs font-mono text-gray-400 flex items-center gap-2 relative z-10">
                <ShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Credential ID: {cert.credential}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 relative z-10">
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-4 h-4 text-yellow-400" /> Enlarge Badge
              </button>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-gray-950 font-bold text-xs rounded-xl shadow-md transition-all duration-300 hover:scale-105"
              >
                Verify Credential <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-6"
            >
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-800">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs text-gray-400">{selectedCert.issuer} ({selectedCert.date})</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-full max-h-[70vh] bg-white rounded-xl overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[65vh] object-contain"
                />
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold rounded-xl transition-colors text-sm"
                >
                  <span>Verify Credential on Issuer Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
