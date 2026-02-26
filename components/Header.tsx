
import React from 'react';
import { SOCIAL_ICONS } from '../constants.jsx';
import { IMAGE } from '../constants.jsx';


const Header = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ];

  return (
    <header className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-12rem)] lg:w-1/2 lg:flex-col lg:justify-between">
      <div>
        {/* Profile Image - Increased to w-32 h-32 (approx 128px) */}
        <div className="mb-8 flex justify-center md:justify-start">
  <img 
    src={IMAGE[0].image} 
    alt={"IMAGE[1].alt_text}"} 
    className="h-30 w-30 rounded-full border-4 border-slate-200/10 object-cover shadow-2xl transition-transform hover:scale-105"
  />
</div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Aniruddha khanve</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
         Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Turning ideas into powerful, responsive WordPress and React websites.
        </p>
        
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-6 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  className="group flex items-center py-3" 
                  href={`#${item.id}`}
                >
                  <span className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'
                  }`}></span>
                  <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    activeSection === item.id ? 'text-slate-200' : 'text-slate-500'
                  }`}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  );
}; 

export default Header;
