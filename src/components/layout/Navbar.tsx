"use client";

import React, { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "OUR PROCESS", href: "/manufacturing" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <a href="#home" className="text-xl sm:text-2xl font-serif text-white tracking-widest flex items-center hover:opacity-90 transition-opacity">
            <span className="text-[#C5A26B] text-2xl sm:text-3xl mr-1">V</span> 
            VALLAVAR{" "}
            <span className="text-[10px] sm:text-xs ml-1 sm:ml-2 text-[#C5A26B] font-sans mt-1 sm:mt-2">
              GRC
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-widest text-white/90">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C5A26B] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#C5A26B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-[#C5A26B] text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-[#a68656] transition-colors uppercase shadow-lg shadow-black/20">
          Get a Quote
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 z-50 relative focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center relative">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-x-1" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-1" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center gap-6 text-base font-semibold tracking-widest text-white">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${idx * 50}ms` : "0ms" }}
              className={`hover:text-[#C5A26B] transform transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className={`mt-4 bg-[#C5A26B] text-white px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-[#a68656] transition-all uppercase rounded-sm shadow-md ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"} duration-500 delay-300`}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;