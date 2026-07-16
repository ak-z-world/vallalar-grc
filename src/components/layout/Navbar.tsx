"use client";

import React, { useState } from "react";
import Link from "next/link"; // Using Next.js Link for internal App Router navigation performance

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "INDUSTRIES", href: "/industries" },
  { label: "OUR PROCESS", href: "/manufacturing" },
  // { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Changed class from 'absolute' to 'fixed' to enable sticky scrolling behavior */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-sm">
        {/* Brand Logo & Typography Wrapper */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-serif text-white tracking-widest flex items-center gap-0 hover:opacity-90 transition-opacity group"
            onClick={() => setIsOpen(false)}
          >
            {/* Optimized & Enlarged Logo Container:
              - h-12 (mobile) and sm:h-16 (desktop) makes the graphic element bigger
              - -mx-2 (negative margins) ensures the larger image doesn't force extra space on left/right sides
              - gap-0 on parent ensures the text aligns tightly to the graphic's edge
            */}
            <img
              src="/logo.png"
              alt="Vallalar GRC Logo"
              className="h-12 sm:h-16 w-auto -mx-2 object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />

            <span className="leading-none select-none pl-1">
              VALLALAR{" "}
              <span className="text-[10px] sm:text-xs ml-0.5 text-[#C5A26B] font-sans font-semibold tracking-wider inline-block align-middle">
                GRC
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-widest text-white/90">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#C5A26B] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#C5A26B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:block bg-[#C5A26B] text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-[#a68656] transition-colors uppercase shadow-lg shadow-black/20 text-center"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Toggle Button */}
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
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${idx * 50}ms` : "0ms" }}
              className={`hover:text-[#C5A26B] transform transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: isOpen ? `${NAV_LINKS.length * 50}ms` : "0ms" }}
            className={`mt-4 bg-[#C5A26B] text-white px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-[#a68656] transition-all uppercase rounded-sm shadow-md text-center transform ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"} duration-500`}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;