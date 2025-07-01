import React from 'react';

export const About: React.FC = () => {
  return (
    <div
      id="about"
      data-section="about"
      className="max-w-5xl mx-auto px-4 py-12 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed text-justify">
        Hi, I'm Chakri, a passionate and driven B.Tech student specializing in Artificial Intelligence and Data Science at KL University, with a CGPA of 9.34. With a strong foundation in software modeling and DevOps, I thrive on building impactful tech solutions that solve real-world problems. I’ve worked on diverse projects, including a Tourism Management System, an Airline Reservation System, and machine learning models for health prediction. I enjoy contributing to communities, organizing events, and constantly upskilling through internships and hands-on experiences. I’m currently exploring backend development, cloud computing, and open-source contributions.
      </p>
    </div>
  );
};
