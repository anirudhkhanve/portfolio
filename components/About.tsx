import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <SectionHeader title="About" />
      <div className="space-y-4">
        <p>
          I’m a Web Developer specializing in WordPress, PHP, and React, focused on building responsive, <span className="font-medium text-slate-200"> high-performance </span> websites that create real impact. I enjoy transforming ideas into clean, scalable, and <span className="font-medium text-slate-200"> user-friendly </span> digital experiences that balance design and functionality.
        </p>
        <p>
        Currently, I work as a PHP/WordPress Developer at <span className="font-medium text-slate-200"> Techsimba Pvt. Ltd.</span>, where I implement new features and UI enhancements across multiple<span className="font-medium text-slate-200"> WordPress websites</span>. I build reusable components, optimize performance to improve page speed, enhance accessibility standards, and conduct detailed plugin audits to ensure security, stability, and efficiency.
        </p>
        <p>
          Previously, I worked as a Java Intern at <span className="font-medium text-slate-200">Intelliatech</span>, where I led the complete front-end development of a client–CA interaction platform using React. I built major <span className="font-medium text-slate-200">UI components</span> , ensured responsive design implementation, and collaborated closely with the backend team. I also contributed to backend development using <span className="font-medium text-slate-200"> Spring Boot</span> and supported maintenance for internal company projects, gaining strong experience in full-stack development and team collaboration.
        </p>
       <br></br><br></br>
      </div>
    </section>
  );
};

export default About;