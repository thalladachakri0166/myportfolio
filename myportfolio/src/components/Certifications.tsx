import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credential: 'AWS-CP-2024',
      image: '/images/certifications/awscp.png',
      link: 'https://www.credly.com/badges/7678954e-fde9-4304-b187-5a8c318da5ce/public_url'
    },
    {
      title: 'AI Associate',
      issuer: 'Salesforce',
      date: '2024',
      credential: '5116913',
      image: '/images/certifications/salesforce.png',
      link: 'https://trailhead.salesforce.com/en/credentials/verification'
    },
    {
      title: 'Multicloud Network Associate',
      issuer: 'Aviatrix',
      date: '2025',
      credential: 'Multicloud-Network-Associate',
      image: '/images/certifications/multicloud.png',
      link: 'https://www.credly.com/badges/bbee5aeb-f7fb-499a-9c85-5f7c18a16236/public_url'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.credential}
            className="group h-[400px] w-full perspective-1000 cursor-pointer"
          >
            <div className="relative h-full w-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180 rounded-xl">
              {/* Front of card */}
              <div className="absolute inset-0 bg-gray-800 rounded-xl p-6 border border-gray-700 backface-hidden">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Award className="w-12 h-12 text-yellow-500" />
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">{cert.issuer}</p>
                    <p className="text-gray-400">{cert.date}</p>
                    <p className="text-sm text-gray-500">Credential: {cert.credential}</p>
                  </div>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 backface-hidden rotate-y-180">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain bg-white"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/90 to-transparent p-6">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Verify Certificate <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
