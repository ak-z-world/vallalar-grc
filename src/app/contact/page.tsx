"use client";

import React, { useState, memo, FormEvent } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldAlert,
  ArrowRight,
  MapPin,
  ChevronDown,
} from "lucide-react";

const ContactPage = () => {
  // Form State Handles
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    projectDetails: "",
    agreed: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreed: e.target.checked }));
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
        <h1>
          Contact Vallalar GRC - Premium GRC Cladding Suppliers in Chennai
        </h1>
        <p>
          Get in touch with the core project management desk at Vallalar GRC.
          Known as the best grc in chennai and recognized for engineering the
          best grc in tamil nadu, we coordinate commercial and residential
          design requests. Contact us for verified project metrics concerning:
          chennai grc cost structures, customized grc in chennai installation
          procedures, bulk grc chennai industrial supply networks, glass fiber
          reinforced concrete quotation sheets, and premium architectural glass
          reinforced plastic modules. Our key logistics corridors support
          execution across central Chennai business districts, luxury villa
          projects on ECR, IT infrastructure grids on OMR, industrial hubs in
          Ambattur and Sriperumbudur, manufacturing rings in Chennai, and
          structural developments across Tamil Nadu and South India. Keywords
          targeted: glass reinforced concrete price India, custom GRC panel
          manufacturing factory, premium commercial building facade construction
          quotation, architectural jaali designs contact.
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
              alt="Vallalar GRC elegant lattice architecture screen facade workspace project"
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
              Let's Build
              <br />
              Something{" "}
              <span className="text-[#C5A26B] font-sans not-italic">
                Iconic.
              </span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md font-light">
              We partner with architects, developers, and institutions to create
              architectural masterpieces that stand the test of time.
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
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+919566665001"
                  className="text-gray-600 text-xs font-semibold block hover:text-[#C5A26B] transition-colors">
                  +91 95666 65001
                </a>
                <span className="text-gray-400 text-[10px] block mt-0.5">
                  Mon – Sat, 9:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            {/* Item 2: Email */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <Mail size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">
                  Email
                </h4>
                <a
                  href="mailto:info@vallalargrc.com"
                  className="text-gray-600 text-xs font-semibold block hover:text-[#C5A26B] transition-colors">
                  info@vallalargrc.com
                </a>
                <span className="text-gray-400 text-[10px] block mt-0.5">
                  We reply within 24 hours
                </span>
              </div>
            </div>

            {/* Item 3: WhatsApp */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <MessageSquare size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">
                  WhatsApp
                </h4>
                <a
                  href="https://wa.me/9698216241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-xs font-semibold block hover:text-[#C5A26B] transition-colors">
                  +91 96982 16241
                </a>
                <span className="text-gray-400 text-[10px] block mt-0.5">
                  Chat with our team instantly
                </span>
              </div>
            </div>

            {/* Item 4: Hours */}
            <div className="flex items-start gap-4 lg:justify-center px-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <Clock size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">
                  Business Hours
                </h4>
                <span className="text-gray-600 text-xs font-semibold block">
                  Mon – Sat
                </span>
                <span className="text-gray-400 text-[10px] block mt-0.5">
                  9:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            {/* Item 5: Response */}
            <div className="flex items-start gap-4 lg:justify-center px-2 col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#C5A26B]/20 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                <ShieldAlert size={14} />
              </div>
              <div>
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-1">
                  Quick Response
                </h4>
                <span className="text-gray-600 text-xs font-semibold block">
                  Dedicated Desk
                </span>
                <span className="text-gray-400 text-[10px] block mt-0.5">
                  Assisting your next project
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM & ADDRESSES COMBINED SPECIFICATION GRID --- */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: OUR LOCATION / VISIT US */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                OUR LOCATION
              </p>
              <h2 className="text-3xl font-serif text-gray-900 tracking-wide">
                Visit Us
              </h2>
            </div>

            {/* Unified Single Primary Address Card */}
            <div className="bg-white border border-gray-150 p-5 rounded-sm flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all duration-300">
              <div className="relative w-full sm:w-40 h-40 bg-gray-900 overflow-hidden rounded-xs shrink-0">
                <Image
                  src="/images/image24.png"
                  alt="Vallalar GRC Headquarters Building profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-1.5 text-[#C5A26B] text-[10px] font-bold tracking-wider uppercase mb-2">
                    <MapPin size={12} />
                    <span>Headquarters & Production</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2 font-sans tracking-wide">
                    VALLAVAR GRC
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    No. 258/18, JEYENDERA SARASWATHI NAGAR,
                    <br />
                    GUDUVANCHERY,
                    <br />
                    CHENNAI - 603202, TAMIL NADU, INDIA
                  </p>
                  <p className="text-[#C5A26B] italic text-[11px] mt-2 font-medium">
                    Serving All Across Tamil Nadu, Andhra Pradesh, Kerala &
                    Karnataka
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/place/12%C2%B050'55.2%22N+80%C2%B004'37.5%22E/@12.8486777,80.0745025,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-900 hover:text-[#C5A26B] transition-colors mt-4 uppercase">
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE CRM CONTACT FORM */}
          <div className="lg:col-span-7 bg-white border border-gray-150 p-8 sm:p-10 rounded-sm hover:shadow-md transition-shadow">
            <div className="mb-8">
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                SEND US A MESSAGE
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-wide">
                We'd Love to Hear From You
              </h2>
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
                  className="w-full bg-[#FAF9F6] border border-gray-200 text-xs text-gray-400 p-4 rounded-xs outline-none focus:border-[#C5A26B] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>
                    I'm Interested In
                  </option>
                  <option value="facades" className="text-gray-800">
                    GRC Facades & Cladding Panels
                  </option>
                  <option value="columns" className="text-gray-800">
                    Classical Columns & Pilasters
                  </option>
                  <option value="jaalis" className="text-gray-800">
                    Intricate Screen Panels / Jaalis
                  </option>
                  <option value="domes" className="text-gray-800">
                    Lightweight High-Strength Domes
                  </option>
                  <option value="custom" className="text-gray-800">
                    Bespoke Custom Engineering Molds
                  </option>
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
                <label
                  htmlFor="agreed-box"
                  className="text-[11px] text-gray-500 leading-normal select-none cursor-pointer">
                  I agree to the Privacy Policy and Terms & Conditions.
                </label>
              </div>

              {/* Submission Execution Control Handle */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#181818] hover:bg-[#C5A26B] text-white font-sans text-xs font-bold tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 uppercase rounded-xs shadow-md shadow-black/10">
                  <span>SEND MESSAGE</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* --- ELEVATED ATMOSPHERIC MAP SECTION --- */}
      <section
        id="map-anchor"
        className="relative w-full h-[500px] bg-[#ebe8e8] overflow-hidden flex items-center">
        {/* 1. Map Base */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.916373340686!2d80.07450247507433!3d12.848677687455526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUwJzU1LjIiTiA4MMKwMDQnMzcuNSJF!5e0!3m2!1sen!2sin!4v1783966954796!5m2!1sen!2sin"
            className="w-full h-full border-0 opacity-50 saturate-[0.3] contrast-[1.1]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vallalar GRC Location Map"
          />
        </div>

        {/* 2. Gradient Overlays for Seamless Blending */}
        {/* Top & Bottom fade to blend with adjacent sections */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none opacity-90" />

        {/* Left-to-right fade to ensure the text card is always readable */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent pointer-events-none" />

        {/* 3. Floating Content Card */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="pointer-events-auto max-w-[340px] md:max-w-md bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-2xl transition-transform duration-500 hover:border-[#C5A26B]/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C5A26B]" />
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase">
                Find Us
              </p>
            </div>

            <h3
              className="text-2xl md:text-3xl font-light text-white tracking-wide mb-4"
              style={{ fontFamily: "Georgia, serif" }}>
              Our Locations
            </h3>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light mb-8">
              Strategically located to serve projects across India with
              precision and efficiency. Visit our headquarters or manufacturing
              facility.
            </p>

            <a
              href="https://maps.app.goo.gl/y7LVgiddSFu32paK7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.15em] text-white hover:text-[#C5A26B] transition-colors uppercase group">
              <span className="border-b border-white/20 pb-1 group-hover:border-[#C5A26B]/50 transition-colors">
                View on Google Maps
              </span>
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform text-[#C5A26B]"
              />
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
              Partner with Vallalar GRC for premium architectural elements that
              bring your structural and custom aesthetic vision to life.
            </p>
          </div>

          <button className="group border border-gray-900 hover:border-[#C5A26B] hover:bg-[#C5A26B] text-gray-900 hover:text-white px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-3 uppercase rounded-xs shrink-0 whitespace-nowrap">
            <span>START YOUR PROJECT</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default memo(ContactPage);
