import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const Volunteer: React.FC = () => {
  const [currentNssImage, setCurrentNssImage] = useState(0);
  const [currentAriseImage, setCurrentAriseImage] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const nssImages = [
    '/images/volunteer/nss/1.jpg',
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

  const handleNextImage = (type: 'nss' | 'arise') => {
    if (type === 'nss') {
      setCurrentNssImage(prev => (prev + 1) % nssImages.length);
    } else {
      setCurrentAriseImage(prev => (prev + 1) % ariseImages.length);
    }
  };

  const handlePrevImage = (type: 'nss' | 'arise') => {
    if (type === 'nss') {
      setCurrentNssImage(prev => (prev - 1 + nssImages.length) % nssImages.length);
    } else {
      setCurrentAriseImage(prev => (prev - 1 + ariseImages.length) % ariseImages.length);
    }
  };

  useEffect(() => {
    const nssInterval = setInterval(() => {
      setCurrentNssImage(prev => (prev + 1) % nssImages.length);
    }, 3000);

    const ariseInterval = setInterval(() => {
      setCurrentAriseImage(prev => (prev + 1) % ariseImages.length);
    }, 3000);

    return () => {
      clearInterval(nssInterval);
      clearInterval(ariseInterval);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Volunteer Experience</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* NSS Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="px-4 sm:px-10 py-6 sm:py-10 max-w-md mx-auto">
            <div className="relative h-48 sm:h-52 w-full mb-6">
              <img
                src={nssImages[currentNssImage]}
                alt="NSS Activities"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                onClick={() => setPreviewImage(nssImages[currentNssImage])}
              />
              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={() => handlePrevImage('nss')}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 m-2 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={() => handleNextImage('nss')}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 m-2 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800">Co-coordinator</h3>
            <h4 className="text-lg font-bold text-gray-600">National Service Scheme (NSS)</h4>
            <p className="text-gray-600 text-justify pt-4 leading-relaxed">
              Led and organized various social service activities and community development programs.
              From NSS Volunteer to Co-Coordinator, UNIT-12 at KL University, leveraging strong work, communication, and team management skills.
            </p>
            <p className="mt-4 text-gray-600">Duration: NOV 2023 - OCT 2024</p>
          </div>
        </div>

        {/* ARISE Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="px-4 sm:px-10 py-6 sm:py-10 max-w-md mx-auto">
            <div className="relative h-48 sm:h-52 w-full mb-6">
              <img
                src={ariseImages[currentAriseImage]}
                alt="ARISE Activities"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                onClick={() => setPreviewImage(ariseImages[currentAriseImage])}
              />
              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={() => handlePrevImage('arise')}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 m-2 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={() => handleNextImage('arise')}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 m-2 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800">Student Representative</h3>
            <h4 className="text-lg font-bold text-gray-600">ARISE - Student Body, AI & DS</h4>
            <p className="text-gray-600 text-justify pt-4 leading-relaxed">
              Liaison between students and faculty, addressing concerns in academics, transport, hostel, canteen, and library. Gathered feedback, advocated improvements, and collaborated with departments to enhance student experience.
            </p>
            <p className="mt-4 text-gray-600">Duration: NOV 2024 - Present</p>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img 
              src={previewImage} 
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute -top-4 -right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
              onClick={() => setPreviewImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
