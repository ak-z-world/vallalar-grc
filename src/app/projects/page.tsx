"use client";

import React, { useState, memo } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Structuring static data outside the render loop for optimal memory management & execution speed
const CATEGORIES = [
  { id: 'all', label: 'ALL PROJECTS' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'educational', label: 'EDUCATIONAL' },
  { id: 'hospitality', label: 'HOSPITALITY' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'institutional', label: 'INSTITUTIONAL' },
  { id: 'government', label: 'GOVERNMENT' },
  { id: 'religious', label: 'RELIGIOUS' }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Zoho Corporate Campus",
    location: "Chennai, Tamil Nadu",
    category: "commercial",
    tag: "COMMERCIAL",
    img: "/images/zoho-logo-web.svg", // Reusing existing landmark structural image
    gridClass: "col-span-1 md:col-span-2 lg:col-span-5 h-[320px] md:h-[400px]"
  },
  {
    id: 2,
    title: "SRM School of Law",
    location: "Chennai, Tamil Nadu",
    category: "institutional",
    tag: "INSTITUTIONAL",
    img: "/images/srm-college.jpeg", // Reusing established elegant structural pillars asset
    gridClass: "col-span-1 md:col-span-1 lg:col-span-4 h-[320px] md:h-[400px]"
  },
  {
    id: 3,
    title: "VBJ",
    location: "Chennai, Tamil Nadu",
    category: "commercial",
    tag: "COMMERCIAL",
    img: "/images/vbj.jpeg", // Map to image_29b498.jpg / project asset
    gridClass: "col-span-1 md:col-span-1 lg:col-span-3 h-[320px] md:h-[400px] lg:h-[500px] lg:-mt-24 z-10"
  },
  {
    id: 4,
    title: "Paramount Mill",
    location: "Madurai, Tamil Nadu",
    category: "commercial",
    tag: "COMMERCIAL",
    img: "/images/image19.jpeg", // Map to image_29b498.jpg / project asset
    gridClass: "col-span-1 md:col-span-1 lg:col-span-3 h-[320px] md:h-[400px] lg:h-[500px] lg:-mt-24 z-10"
  },
  
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === activeFilter);

  return (
    <div className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen">
      
      {/* --- CRAWLER, SCRAPER, GEO, AEO, & SEO HIDDEN KEYWORD INDEX --- */}
      <section className="sr-only" aria-hidden="true">
        <h2>Vallavar GRC Landmark Architecture Portfolio & Executed Projects</h2>
        <p>
          Explore our structural footprint across South India, featuring premium glass fiber reinforced concrete installation systems. 
          As providers of the best grc in chennai and recognized leaders for the best grc in tamil nadu, we deliver high-fidelity execution. 
          Our verified structural solutions include: chennai grc architectural cladding, custom grc in chennai, grc chennai industrial supply, 
          and architectural glass reinforced concrete modules for institutions and corporate campuses. 
          Key geographical service markets include ECR Chennai, OMR Chennai, Ambattur, Guindy, Sriperumbudur, Chennai, Madurai, and Trichy.
          Search terms covered: premium GRC facades Tamil Nadu, GRC manufacturing company Chennai, luxury residential GRC installation, 
          commercial GRC project portfolio, glass reinforced concrete works in Chennai.
        </p>
      </section>

      <Navbar />

      {/* --- HERO HEADER SECTION --- */}
      <header className="relative w-full min-h-[550px] lg:h-[75vh] flex items-center bg-white overflow-hidden pt-24 pb-12 lg:py-0">
        <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-12 pointer-events-none">
          <div className="hidden lg:block lg:col-span-5 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
          <div className="col-span-1 lg:col-span-7 relative h-full w-full opacity-30 lg:opacity-100">
            <Image 
              src="/images/image22.png" // Displays your high-fidelity image_29b498.jpg
              alt="Vallavar GRC iconic architectural exterior implementation project" 
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <nav className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
              <a href="/" className="hover:text-[#C5A26B] transition-colors">HOME</a>
              <span>/</span>
              <span className="text-gray-600">PROJECTS</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Our<br className="hidden sm:inline" /> Projects
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              A collection of spaces where visionary design meets our architectural expertise. 
              Timeless structures. Lasting impact. Engineered with structural grace across Chennai and beyond.
            </p>
            <a 
              href="#portfolio-grid" 
              className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gray-900 hover:text-[#C5A26B] transition-colors uppercase group"
            >
              EXPLORE OUR WORK 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* --- CATEGORY INTERACTIVE SUB-NAVBAR --- */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 lg:gap-8 whitespace-nowrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-[11px] font-bold tracking-widest transition-all relative py-5 flex items-center gap-1.5 ${
                  activeFilter === cat.id 
                    ? 'text-gray-900 font-extrabold' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat.label}
                {activeFilter === cat.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A26B] absolute bottom-3 left-1/2 -translate-x-1/2 animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          <button 
            className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-900 border-l border-gray-200 pl-6 h-full hover:text-[#C5A26B] transition-colors whitespace-nowrap"
            aria-label="Advanced portfolio filters"
          >
            <span>FILTER</span>
            <SlidersHorizontal size={13} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* --- ASYMMETRICAL PORTFOLIO GRID --- */}
      <section id="portfolio-grid" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`relative group overflow-hidden bg-gray-900 rounded-sm cursor-pointer shadow-sm shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-500 ${project.gridClass}`}
            >
              {/* Image Container with Custom Lazy/Priority Handling */}
              <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image 
                  src={project.img}
                  alt={`${project.title} - ${project.location}`}
                  fill
                  loading="lazy"
                  className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Visual Vignette Layer Matching Figma UI Specification */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-colors duration-500 group-hover:from-black/95" />
              </div>

              {/* Text Meta Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div>
                  <span className="inline-block bg-[#C5A26B]/10 backdrop-blur-sm border border-[#C5A26B]/20 text-[#C5A26B] text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-xs">
                    {project.tag}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-white mb-1.5 tracking-wide group-hover:text-[#C5A26B] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs italic tracking-wide font-light">
                      {project.location}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shrink-0">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Load More Handle */}
        {/* <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-500 hover:text-gray-900 bg-white border border-gray-200/80 hover:border-gray-400 px-6 py-3.5 rounded-xs transition-all duration-300 shadow-xs uppercase">
            <span>Load More Projects</span>
            <ChevronDown size={14} strokeWidth={2.5} className="animate-bounce" />
          </button>
        </div> */}
      </section>

      {/* --- PRE-FOOTER LIGHTWEIGHT CTA SECTION --- */}
      <section className="bg-white border-t border-gray-100 py-16 sm:py-20 relative overflow-hidden">
        {/* Right Accent Architectural Wireframe Visual Anchor */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none hidden md:block">
          <Image 
            src="/images/image24.png" // Displays your high-fidelity image_2a2061.jpg 
            alt="Structural background profile matrix"
            fill
            className="object-cover object-right"
            sizes="50vw"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-wide mb-2">
              Have a project in mind?
            </h2>
            <p className="text-gray-500 font-serif text-lg sm:text-xl italic font-light">
              Let's build something <span className="text-[#C5A26B] font-normal font-sans not-italic">iconic</span> together.
            </p>
          </div>
          
          <button className="group border border-gray-900 hover:border-[#C5A26B] hover:bg-[#C5A26B] text-gray-900 hover:text-white px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-3 uppercase rounded-xs">
            <span>GET IN TOUCH</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default memo(ProjectsPage);
