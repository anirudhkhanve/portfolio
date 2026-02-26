import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import { SOCIAL_ICONS } from './constants.jsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = ['about', 'experience', 'projects'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute cursor-glow"></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <footer className="sm:pb-24 w-full flex justify-center">
              <ul className="flex items-center gap-10 -mt-8" aria-label="Social media">
                <li>
                  <a className="block text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1" href="https://www.linkedin.com/in/aniruddh-khanve-100445237/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    {SOCIAL_ICONS.LinkedIn}
                  </a>
                </li>
                <li>
                  <a className="block text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1"  href={`mailto:aniruddhkhanve@gmail.com?subject=${encodeURIComponent(
    "🚀 Let's Build Something Amazing Together"
)}&body=${encodeURIComponent(
    "Hi,\n\nI came across your portfolio and was really impressed with your work.\n\nI'd love to connect and discuss a potential opportunity / collaboration.\n\nLooking forward to hearing from you!\n"
  )}`}
  aria-label="Send email" rel="noreferrer noopener" >
                    {SOCIAL_ICONS.Mail}
                  </a>
                </li>
                <li>
                  <a className="block text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1" href="https://github.com/anirudhkhanve" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                    {SOCIAL_ICONS.Github}
                  </a>
                </li>
                <li>
                  <a className="block text-slate-400 hover:text-teal-300 transition-all hover:-translate-y-1" href="https://www.instagram.com/aniruddhkhanve" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                    {SOCIAL_ICONS.Instagram}
                  </a>
                </li>
              </ul>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;