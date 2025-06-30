import { useRef } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Volunteer } from './components/Volunteer';

function App() {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    volunteer: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionName: keyof typeof sectionRefs) => {
    sectionRefs[sectionName].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar onNavigate={(section) => scrollToSection(section as keyof typeof sectionRefs)} />
      
      <main className="container mx-auto px-4 pt-20 flex-grow">
        <section ref={sectionRefs.home} className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section ref={sectionRefs.about} className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section ref={sectionRefs.volunteer} className="min-h-screen flex items-center justify-center">
          <Volunteer />
        </section>

        <section ref={sectionRefs.skills} className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section ref={sectionRefs.certifications} className="min-h-screen flex items-center justify-center">
          <Certifications />
        </section>

        <section ref={sectionRefs.projects} className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section ref={sectionRefs.contact} className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>

      <footer className="w-full bg-gray-900 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thallada Chakri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;