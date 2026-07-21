"use client";

import React, { useState, memo, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, SlidersHorizontal, ChevronDown } from "lucide-react";
import Link from "next/link";

// Static configuration configurations safely separated outside the component re-render pipeline
const CATEGORIES = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "commercial", label: "COMMERCIAL" },
  { id: "educational", label: "EDUCATIONAL" },
  { id: "hospitality", label: "HOSPITALITY" },
  { id: "residential", label: "RESIDENTIAL" },
  { id: "institutional", label: "INSTITUTIONAL" },
  { id: "government", label: "GOVERNMENT" },
  { id: "religious", label: "RELIGIOUS" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Zoho Corporate Campus",
    location: "Chennai, Tamil Nadu",
    category: "commercial",
    tag: "COMMERCIAL",
    img: "/images/zoho-logo-web.svg",
    isLogo: true,
  },
  {
    id: 2,
    title: "SRM School of Law",
    location: "Chennai, Tamil Nadu",
    category: "institutional",
    tag: "INSTITUTIONAL",
    img: "/images/srm-college.jpeg",
    isLogo: false,
  },
  {
    id: 3,
    title: "VBJ",
    location: "Chennai, Tamil Nadu",
    category: "commercial",
    tag: "COMMERCIAL",
    img: "/images/vbj.jpeg",
    isLogo: false,
  },
  {
    id: 4,
    title: "Paramount Mill",
    location: "Madurai, Tamil Nadu",
    category: "commercial",
    tag: "COMMERCIAL",
    img: "/images/image19.jpeg",
    isLogo: false,
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Memoizing operations prevents unneeded recalculations when expanding lists out to dozens of array nodes
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen flex flex-col justify-between">
      {/* --- SEO KEYWORD INDEX CONTAINER --- */}
      <section className="sr-only" aria-hidden="true">
        <h2>
          Vallalar GRC Landmark Architecture Portfolio & Executed Projects
        </h2>
        <p>
          Explore our structural footprint across South India, featuring premium
          glass fiber reinforced concrete installation systems. As providers of
          the best grc in chennai and recognized leaders for the best grc in
          tamil nadu, we deliver high-fidelity execution. Our verified
          structural solutions include: chennai grc architectural cladding,
          custom grc in chennai, grc chennai industrial supply, and
          architectural glass reinforced concrete modules for institutions and
          corporate campuses. Key geographical service markets include ECR
          Chennai, OMR Chennai, Ambattur, Guindy, Sriperumbudur, Chennai,
          Madurai, and Trichy.
        </p>
      </section>

      <Navbar />

      <header className="relative w-full h-[65vh] min-h-[520px] lg:h-[75vh] flex items-center bg-white overflow-hidden pt-20">
        {/* Full-bleed background image across all viewports */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/image22.png"
            alt="Vallalar GRC iconic architectural exterior implementation project"
            fill
            priority
            className="object-cover object-center md:object-[center_right]"
            sizes="100vw"
          />
        </div>

        {/* 
        High-Fidelity Figma Blend Layer Matrix:
        Creates a soft, cloudy transition. Fully white on the left text area,
        gradually fading out to display the crisp building detail on the right.
      */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/75 via-white/60 to-transparent lg:hidden" />

        <div className="hidden lg:block absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 via-white/60 via-white/30 to-transparent transition-all duration-300" />

        {/* Typography and Meta Layout Layer */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl md:max-w-2xl lg:max-w-[50%]">
            {/* Breadcrumb Header Line */}
            <nav className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-6">
              <a href="/" className="hover:text-[#C5A26B] transition-colors">
                HOME
              </a>
              <span className="text-gray-300 text-[8px] font-light">/</span>
              <span className="text-[#C5A26B]">PROJECTS</span>
            </nav>

            {/* Figma Typography Stack */}
            <h1 className="flex flex-col mb-6 font-serif tracking-tight leading-none">
              <span className="text-4xl sm:text-5xl lg:text-[76px] font-light text-gray-900">
                Our
              </span>
              <span className="text-4xl sm:text-5xl lg:text-[76px] font-normal text-[#C5A26B] italic mt-1 lg:-mt-1">
                Projects
              </span>
            </h1>

            {/* Structured Portfolio Description Box */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-wide mb-10 max-w-sm sm:max-w-md font-sans font-light">
              A collection of spaces where visionary design meets our
              architectural expertise. Timeless structures. Lasting impact.
            </p>

            {/* Custom Action Trigger */}
            <div>
              <a
                href="#portfolio-grid"
                className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.25em] text-gray-950 hover:text-[#C5A26B] transition-colors uppercase group relative pb-1">
                <span>EXPLORE OUR WORK</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1.5 transition-transform duration-300 text-gray-950 group-hover:text-[#C5A26B]"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A26B] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- FILTERS SUB-NAVBAR --- */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 lg:gap-8 overflow-x-auto no-scrollbar h-full scroll-smooth">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-[11px] font-bold tracking-widest transition-all relative h-full flex items-center whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "text-gray-900 font-extrabold"
                    : "text-gray-400 hover:text-gray-600"
                }`}>
                {cat.label}
                {activeFilter === cat.id && (
                  <span className="w-1 h-1 rounded-full bg-[#C5A26B] absolute bottom-0 left-1/2 -translate-x-1/2" />
                )}
              </button>
            ))}
          </div>

          <button
            className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-900 border-l border-gray-200 pl-6 h-full hover:text-[#C5A26B] transition-colors shrink-0"
            aria-label="Advanced portfolio filters">
            <span>FILTER</span>
            <SlidersHorizontal size={13} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* --- HIGH-PERFORMANCE ASYMMETRICAL PORTFOLIO MASONRY GRID --- */}
      <main
        id="portfolio-grid"
        className="py-16 sm:py-24 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[380px] sm:auto-rows-[440px]">
          {filteredProjects.map((project, index) => {
            // Assign structural sizing classes based dynamically on data positioning layout configurations
            const isLargeCard = index % 4 === 0 || index % 4 === 3;
            const cardSpanSettings = isLargeCard
              ? "lg:col-span-2"
              : "lg:col-span-1";

            return (
              <div
                key={project.id}
                className={`relative group overflow-hidden bg-white border border-gray-100/70 rounded-xs cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${cardSpanSettings}`}>
                {/* Image Media Container Elements */}
                <div
                  className={`relative w-full h-full overflow-hidden flex items-center justify-center transition-colors duration-500 ${
                    project.isLogo ? "bg-gray-50/80 p-12" : "bg-gray-900"
                  }`}>
                  <Image
                    src={project.img}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    loading={index < 4 ? "eager" : "lazy"}
                    className={`transition-transform duration-700 ease-out group-hover:scale-104 ${
                      project.isLogo
                        ? "object-contain !w-3/5 !h-3/5 !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 filter brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                        : "object-cover opacity-85 group-hover:opacity-100"
                    }`}
                    sizes={
                      isLargeCard
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 50vw, 33vw"
                    }
                  />

                  {/* Real Architecture Photo Light Shield Gradient Control */}
                  {!project.isLogo && (
                    <div className="absolute inset-0 to-transparent transition-opacity duration-500 group-hover:opacity-85" />
                  )}
                </div>

                {/* Typography Descriptive Overlay Footer Element */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white sm:relative sm:bg-none sm:text-gray-900 sm:border-t sm:border-gray-100 flex items-center justify-between gap-4 transition-colors duration-300 group-hover:bg-white z-10">
                  <div className="min-w-0">
                    <span className="hidden sm:inline-block text-[#C5A26B] text-[9px] font-bold tracking-widest uppercase mb-1">
                      {project.tag}
                    </span>
                    <h3 className="text-sm font-semibold tracking-wider text-inherit uppercase truncate mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-white/70 sm:text-gray-400 text-xs italic font-light truncate">
                      {project.location}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* --- PRE-FOOTER INQUIRY CTA CONTAINER --- */}
      <section className="bg-white border-t border-gray-100 py-16 sm:py-20 relative overflow-hidden">
        {/* Dynamic Architectural Background Layer Matrix */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] opacity-25 pointer-events-none hidden md:block z-0">
          <Image
            src="/images/image24.png"
            alt="Structural background profile matrix"
            fill
            className="object-cover object-right-bottom"
            sizes="60vw"
          />
          {/* Soft horizontal gradient fade matching the Figma UI wash effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-wide mb-2">
              Have a project in mind?
            </h2>
            <p className="text-gray-500 font-serif text-lg sm:text-xl italic font-light">
              Let's build something{" "}
              <span className="text-[#C5A26B] font-normal font-sans not-italic">
                iconic
              </span>{" "}
              together.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-[#C5A26B] text-white px-8 py-4 text-xs font-bold tracking-wider hover:bg-[#a68656] transition-colors flex items-center gap-2 uppercase">
            GET IN TOUCH <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default memo(ProjectsPage);
