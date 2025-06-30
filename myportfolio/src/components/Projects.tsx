import React from 'react';
import {Code2, Users, Zap, Calendar } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio built using React to showcase projects, blogs, and skills.',
      tech: ['React', 'EmailJS', 'Tailwind CSS'],
      image: '/images/projects/Portfolio.png', // Add your project image here
      details: {
        overview: 'A dynamic and responsive personal portfolio website showcasing projects, skills, and experience, built with modern web technologies and integrated with a blog and contact system.',
        features: [
          'Interactive project showcase',
          'Contact form with email integration',
          'Responsive design for all devices',
          'SEO optimized pages'
        ],
        impact: 'Designed to highlight personal achievements and technical skills effectively.',
        timeline: '3 weeks',
        team: '1 developer'
      }
    },
    {
      title: 'Airline Reservation System',
      description: 'Collaborative task management with real-time updates and team features.',
      tech: ['JAVA', 'HTML', 'CSS', 'MySQL'],
      image: '/images/projects/airline.png', // Add your project image here
      github: '',
      live: '',
      details: {
        overview: 'A robust airline reservation system offering seamless booking, cancellation, and flight tracking with real-time seat availability and secure payment gateway integration.',
        features: [
          'Real-time flight search & seat booking',
          'Booking cancellation & rescheduling',
          'Payment gateway integration',
          'Passenger profile management'
        ],
        timeline: '3 months',
        team: '3 developers'
      }
    },
    {
      title: 'Tourism management system',
      description: ' A complete tourism management platform for browsing, booking, and reviewing tour packages.',
      tech: ['Python', 'Django', 'SQLite'],
      image: '/images/projects/tourism.png', // Add your project image here
      github: '',
      live: '',
      details: {
        overview: 'A user-centric tourism management platform enabling tour package browsing, booking, and reviews with a smart admin dashboard for vendors.',
        features: [
          'Tour package listing and filtering',
          'Online booking and payment',
          'User reviews and ratings',
          'Vendor dashboard with analytics',
          'Email confirmations and reminders'
        ],
        timeline: '3 months',
        team: '3 developers'
      }
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group h-[500px] perspective-1000"
          >
            <div className="relative h-full w-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute inset-0 bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 backface-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 bg-gray-800/50 rounded-xl p-6 border border-gray-700 backface-hidden rotate-y-180">
                <div className="h-full flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-center">{project.title}</h3>
                  
                  <div className="flex-1 space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.details.overview}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Code2 className="w-4 h-4" /> Key Features
                      </h4>
                      <ul className="text-sm text-gray-300 list-disc list-inside">
                        {project.details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{project.details.team}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{project.details.timeline}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <p className="text-sm text-gray-300">{project.details.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};