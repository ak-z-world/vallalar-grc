"use client";

import React, { useState, memo, FormEvent } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Phone, Mail, MessageSquare, Clock, ShieldAlert, 
  ArrowRight, MapPin, ChevronDown 
} from 'lucide-react';

const ContactPage = () => {
  // Form State Handles
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    projectDetails: '',
    agreed: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implementation of production endpoint submission logic
    console.log("Submitting query payload: ", formData);
  };

  return (
    <div className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen">
      
      {/* --- CRAWLER, SCRAPER, GEO, AEO & SEO HIDDEN KEYWORD DICTIONARY --- */}
      <section className="sr-only" aria-hidden="true">
        <h1>Contact Vallavar GRC - Premium GRC Cladding Suppliers in Chennai</h1>
        <p>
          Get in touch with the core project management desk at Vallavar GRC. Known as the best grc in chennai and recognized for engineering the best grc in tamil nadu, we coordinate commercial and residential design requests. 
          Contact us for verified project metrics concerning: chennai grc cost structures, customized grc in chennai installation procedures, bulk grc chennai industrial supply networks, glass fiber reinforced concrete quotation sheets, and premium architectural glass reinforced plastic modules.
          Our key logistics corridors support execution across central Chennai business districts, luxury villa projects on ECR, IT infrastructure grids on OMR, industrial hubs in Ambattur and Sriperumbudur, manufacturing rings in Coimbatore, and structural developments across Tamil Nadu and South India.
          Keywords targeted: glass reinforced concrete price India, custom GRC panel manufacturing factory, premium commercial building facade construction quotation, architectural jaali designs contact.
        </p>
      </section>

      <Navbar />

      {/* --- HERO BANNER SECTION --- */}
      <header className="relative w-full min-h-[500px] lg:h-[65vh] flex items-center bg-white overflow-hidden pt-24">
        <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-12 pointer-events-none">
          <div className="hidden lg:block lg:col-span-6 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
          <div className="col-span-1 lg:col-span-6 relative h-full w-full opacity-20 lg:opacity-100">
            <Image 
              src="/images/image24.png" // Utilizing image_2af753.jpg featuring premium architectural screen facade
              alt="Vallavar GRC elegant lattice architecture screen facade workspace project" 
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.25em] mb-4 uppercase">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Let's Build<br />Something <span className="text-[#C5A26B] font-sans not-italic">Iconic.</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md font-light">
              We partner with architects, developers, and institutions to create architectural masterpieces that stand the test of time.
            </p>
          </div>
        </div>
      </header>

      {/* --- HORIZONTAL CONTACT QUICK-INFO BAR --- */}
      <section className="bg-white border-y border-gray-150 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 md:gap-x-0 md:divide-x divide-gray-200">
            
            {/* Item 1: Phone */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <Phone size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">Phone</h4>
                <a href="tel:+919566665001" className="text-gray-600 text-xs font-semibold block hover:text-[#C5A26B] transition-colors">+91 95666 65001</a>
                <span className="text-gray-400 text-[10px] block mt-0.5">Mon – Sat, 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Item 2: Email */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <Mail size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">Email</h4>
                <a href="mailto:info@vallavargrc.com" className="text-gray-600 text-xs font-semibold block hover:text-[#C5A26B] transition-colors">info@vallavargrc.com</a>
                <span className="text-gray-400 text-[10px] block mt-0.5">We reply within 24 hours</span>
              </div>
            </div>

            {/* Item 3: WhatsApp */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <MessageSquare size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">WhatsApp</h4>
                <a href="https://wa.me/919566665001" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-xs font-semibold block hover:text-[#C5A26B] transition-colors">+91 95666 65001</a>
                <span className="text-gray-400 text-[10px] block mt-0.5">Chat with our team instantly</span>
              </div>
            </div>

            {/* Item 4: Hours */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <Clock size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">Business Hours</h4>
                <span className="text-gray-600 text-xs font-semibold block">Mon – Sat</span>
                <span className="text-gray-400 text-[10px] block mt-0.5">9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Item 5: Response */}
            <div className="flex items-start gap-4 lg:justify-center px-2 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <ShieldAlert size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">Quick Response</h4>
                <span className="text-gray-600 text-xs font-semibold block">Dedicated Desk</span>
                <span className="text-gray-400 text-[10px] block mt-0.5">Assisting your next project</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FORM & ADDRESSES COMBINED SPECIFICATION GRID --- */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: OUR LOCATIONS / VISIT US */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">OUR LOCATIONS</p>
              <h2 className="text-3xl font-serif text-gray-900 tracking-wide">Visit Us</h2>
            </div>

            {/* Address Card 1: Head Office */}
            <div className="bg-white border border-gray-150 p-5 rounded-sm flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all duration-300">
              <div className="relative w-full sm:w-40 h-36 bg-gray-900 overflow-hidden rounded-xs shrink-0">
                <Image 
                  src="/images/image24.png" 
                  alt="Vallavar GRC Head Office Building profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-1.5 text-[#C5A26B] text-[10px] font-bold tracking-wider uppercase mb-2">
                    <MapPin size={12} />
                    <span>Head Office</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2 font-sans tracking-wide">VALLAVAR GRC</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    SF No. 259/9B, Chinnavedampatti,<br />
                    Coimbatore – 641 048,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
                <a href="#map-anchor" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-900 hover:text-[#C5A26B] transition-colors mt-4 uppercase">
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Address Card 2: Manufacturing Unit */}
            <div className="bg-white border border-gray-150 p-5 rounded-sm flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all duration-300">
              <div className="relative w-full sm:w-40 h-36 bg-gray-900 overflow-hidden rounded-xs shrink-0">
                <Image 
                  src="/images/image25.png" // Mapping to industrial factory plant image asset
                  alt="Vallavar GRC Production Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-1.5 text-[#C5A26B] text-[10px] font-bold tracking-wider uppercase mb-2">
                    <MapPin size={12} />
                    <span>Manufacturing Facility</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2 font-sans tracking-wide">VALLAVAR GRC Factory</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    SF No. 259/9B, Chinnavedampatti,<br />
                    Coimbatore – 641 048,<br />
                    Tamil Nadu, India.
                  </p>
                </div>
                <a href="#map-anchor" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-900 hover:text-[#C5A26B] transition-colors mt-4 uppercase">
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE CRM CONTACT FORM */}
          <div className="lg:col-span-7 bg-white border border-gray-150 p-8 sm:p-10 rounded-sm hover:shadow-md transition-shadow">
            <div className="mb-8">
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">SEND US A MESSAGE</p>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-wide">We'd Love to Hear From You</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-800 placeholder-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-800 placeholder-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="flex flex-col">
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-800 placeholder-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors"
                />
              </div>

              {/* Row 3: Company / Organization */}
              <div className="flex flex-col">
                <input 
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company / Organization"
                  className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-800 placeholder-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors"
                />
              </div>

              {/* Row 4: Custom Selective Dropdown Vector mapping */}
              <div className="flex flex-col relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>I'm Interested In</option>
                  <option value="facades" className="text-gray-800">GRC Facades & Cladding Panels</option>
                  <option value="columns" className="text-gray-800">Classical Columns & Pilasters</option>
                  <option value="jaalis" className="text-gray-800">Intricate Screen Panels / Jaalis</option>
                  <option value="domes" className="text-gray-800">Lightweight High-Strength Domes</option>
                  <option value="custom" className="text-gray-800">Bespoke Custom Engineering Molds</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronDown size={14} />
                </div>
              </div>

              {/* Row 5: Project details textarea */}
              <div className="flex flex-col">
                <textarea 
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project"
                  required
                  className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-800 placeholder-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors resize-none"
                />
              </div>

              {/* Row 6: Legal validation check */}
              <div className="flex items-start gap-2.5 pt-2">
                <input 
                  type="checkbox"
                  id="agreed-box"
                  checked={formData.agreed}
                  onChange={handleCheckboxChange}
                  required
                  className="w-3.5 h-3.5 mt-0.5 accent-[#C5A26B] cursor-pointer"
                />
                <label htmlFor="agreed-box" className="text-[11px] text-gray-500 leading-normal select-none cursor-pointer">
                  I agree to the Privacy Policy and Terms & Conditions.
                </label>
              </div>

              {/* Submission Execution Control Handle */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-[#181818] hover:bg-[#C5A26B] text-white font-sans text-xs font-bold tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 uppercase rounded-xs shadow-md shadow-black/10"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* --- CARTOGRAPHIC DARK SPECIFICATION PLOT SECTION --- */}
      <section id="map-anchor" className="bg-[#141414] border-t border-white/5 relative h-[450px] w-full overflow-hidden">
        {/* Stylized background fallback graphic mapping to represent an advanced engineering geographic view */}
        <div className="absolute inset-0 bg-[#1e1e1e] opacity-35 filter grayscale invert">
          <Image 
            src="/images/image25.png" 
            alt="Operational blueprint geographic structural overview map backdrop"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Map Dark Abstract Layer Spec */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 p-8 rounded-sm max-w-xs text-left shadow-2xl">
            <p className="text-[#C5A26B] text-[9px] font-bold tracking-widest uppercase mb-1">FIND US</p>
            <h3 className="text-xl font-serif text-white tracking-wide mb-3">Our Locations</h3>
            <p className="text-gray-400 text-[11px] leading-relaxed font-light mb-6">
              Strategically located to serve projects across India with precision and efficiency.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#C5A26B] hover:text-white transition-colors uppercase group"
            >
              <span>VIEW ON GOOGLE MAPS</span>
              <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- LIGHTWEIGHT ACTION ORIENTED PRE-FOOTER STRIP --- */}
      <section className="bg-white py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-wide mb-1.5">
              Ready to Create Architecture That Inspires?
            </h2>
            <p className="text-gray-500 font-sans text-xs sm:text-sm font-light max-w-xl">
              Partner with Vallavar GRC for premium architectural elements that bring your structural and custom aesthetic vision to life.
            </p>
          </div>
          
          <button className="group border border-gray-900 hover:border-[#C5A26B] hover:bg-[#C5A26B] text-gray-900 hover:text-white px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-3 uppercase rounded-xs shrink-0 whitespace-nowrap">
            <span>START YOUR PROJECT</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default memo(ContactPage);