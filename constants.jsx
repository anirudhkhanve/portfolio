
import React from 'react';

import project1 from "./assets/project_1.png";
import project2 from "./assets/project_2.png";
import project3 from "./assets/project_3.png";
import profile from "./assets/profile.png";

export const IMAGE = [
  {
    id:'1',
    image: profile,
    alt_text: 'Aniruddha kahnve'
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 'exp-1',
    period: '2025 — PRESENT',
    role: 'PHP/WordPress Developer',
    company: 'Techsimba Pvt. Ltd.',
    description: 'Build and maintain scalable WordPress components and features across 20+ websites, implementing UI enhancements and reusable modules using PHP, HTML, CSS, JavaScript, and SQL. Collaborate across teams to deliver responsive, high-performing, and accessible web experiences, while conducting performance optimizations, plugin audits, and developing custom publishing solutions to improve functionality and site stability.',
    tags: ['HTML', 'CSS', 'Javascript', 'PHP', 'Bootstrap', 'SQL', 'Elementor', 'ACF', 'Wordpress'],
    link: 'https://techsimba.co/'
  },
  {
    id: 'exp-2',
    period: '2025',
    role: 'Java Intern',
    company: 'Intelliatech',
    description: 'Led end-to-end front-end development using React, building core UI components for a client–CA interaction platform, while contributing to backend development with Java and Spring Boot. Supported backend maintenance and enhancements across internal company projects to ensure stability and performance.',
    tags: ['Java', 'Tailwind', 'SQL', 'React', 'Spring Boot', 'RESTful API', 'Postman'],
    link: 'https://intelliatech.com/'
  },

];

export const PROJECT_DATA = [
  {
    id: 'proj-1',
    title: 'Pond Fish Food eCommerce Platform (U.S. Market)',
    description: 'Customized and enhanced the prebuilt homepage layout to deliver a more intuitive, user-friendly experience, while implementing advanced search functionality with auto-suggestions to improve product discoverability and streamline the overall customer journey.',
    imageUrl: project1,
    tags: ['HTML', 'CSS', 'PHP', 'Wordpress'],
    link: 'https://pondmax.com/'
  },
  {
    id: 'proj-2',
    title: 'c2fo multisite',
    description: 'Redesigned and improved the website navigation bar to align with updated UI/UX standards. Implemented a dynamic header icon management system with admin-side control, and developed custom website sections using Gutenberg blocks and Advanced Custom Fields (ACF) to deliver a flexible, client-focused content management solution.',
    imageUrl: project2,
    tags: ['HTML', 'CSS', 'javascript', 'Bootstrap', 'PHP', 'ACF'],
    link: 'https://c2fo.com/'
  },
  {
    id: 'proj-3',
    title: 'Kinesis Advisory',
    description: 'Developed a WordPress website for an Australia-based business coaching provider using the WordPress Block Editor (Gutenberg), delivering a responsive, user-friendly design aligned with the client’s branding and business objectives.',
    imageUrl: project3,
    tags: ['Block Editor', 'HTML', 'CSS', 'javascript'],
    link: 'https://www.kinesisadvisory.com.au/'
  }
];

export const SOCIAL_ICONS = {
  Github: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  ),
  LinkedIn: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  ),
  Instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  Mail: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-12"
      aria-hidden="true"
    >
      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v.01L12 13 2 4.01V4zm0 2.236V20a2 2 0 002 2h16a2 2 0 002-2V6.236l-9.447 8.507a1 1 0 01-1.106 0L2 6.236z" />
    </svg>
  )
};
