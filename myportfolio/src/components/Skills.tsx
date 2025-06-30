import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

export const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      description: 'Expertise in building responsive, modern web applications using React and TypeScript. Proficient in creating beautiful UIs with Tailwind CSS and developing scalable applications with Next.js.'
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 text-green-500" />,
      items: ['Python', 'Java'],
      description: 'Strong foundation in server-side development with Node.js and Express. Experience in building RESTful APIs and microservices. Proficient in Python and Java for robust backend solutions.'
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      items: ['PostgreSQL', 'MySQL'],
      description: 'Skilled in both SQL and NoSQL databases. Experience with data modeling, optimization, and implementing caching solutions. Proficient in handling large-scale data operations.'
    },
    {
      category: 'Tools & Others',
      icon: <Code2 className="w-8 h-8 text-yellow-500" />,
      items: ['Git', 'Docker', 'AWS', 'CI/CD'],
      description: 'Experienced with modern development tools and practices. Proficient in version control, containerization, cloud services, and implementing automated deployment pipelines.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="group h-[300px] perspective-1000"
          >
            <div className="relative h-full w-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute inset-0 bg-gray-800/50 rounded-xl p-6 border border-gray-700 backface-hidden">
                <div className="flex flex-col items-center text-center space-y-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 bg-gray-800/50 rounded-xl p-6 border border-gray-700 backface-hidden rotate-y-180">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};