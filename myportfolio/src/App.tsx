import { useRef, useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Volunteer } from './components/Volunteer';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    volunteer: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionName: string) => {
    const targetRef = sectionRefs[sectionName as keyof typeof sectionRefs];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const el = document.getElementById(sectionName);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Scroll Spy with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Background Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Navigation Bar */}
      <NavBar
        activeSection={activeSection}
        onNavigate={(section) => scrollToSection(section as keyof typeof sectionRefs)}
      />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-16">
        <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section id="about" ref={sectionRefs.about} className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="education" ref={sectionRefs.education} className="min-h-screen flex items-center justify-center">
          <Education />
        </section>

        <section id="projects" ref={sectionRefs.projects} className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="skills" ref={sectionRefs.skills} className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section id="certifications" ref={sectionRefs.certifications} className="min-h-screen flex items-center justify-center">
          <Certifications />
        </section>

        <section id="volunteer" ref={sectionRefs.volunteer} className="min-h-screen flex items-center justify-center">
          <Volunteer />
        </section>

        <section id="contact" ref={sectionRefs.contact} className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;