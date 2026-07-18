import React from "react";
import Navbar from "../layout/Navbar"; // Adjust this path if necessary
import Footer from "../layout/Footer"; // Adjust this path if necessary
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Phone,
  Gem,
  PenTool,
  Layers,
  Clock,
  Leaf,
  Building2,
  Home,
  GraduationCap,
  Stethoscope,
  Hotel,
  Landmark,
  Church,
  ShoppingBag,
  Award,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const VallavarLandingPage: React.FC = () => {
  const projects = [
    {
      title: "ZOHO CORPORATE CAMPUS",
      loc: "Chennai",
      img: "images/zoho-logo-web.svg",
      isLogo: true,
    },
    {
      title: "SRM UNIVERSITY BLOCK",
      loc: "Chennai",
      img: "images/srm-college.jpeg",
      isLogo: false,
    },
    {
      title: "VBJ",
      loc: "Chennai",
      img: "images/vbj.jpeg",
      isLogo: false,
    },
    {
      title: "Paramount mills",
      loc: "Madurai",
      img: "images/image19.jpeg",
      isLogo: false,
    },
  ];
  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-[#C5A26B] selection:text-white">
      {/* SEO Hidden Text for Scrapers & Crawlers */}
      <div className="sr-only">
        <h1>Vallalar GRC - Best GRC in Chennai, Tamil Nadu</h1>
        <p>
          Leading GRC manufacturer in Chennai providing premium Glass Fiber
          Reinforced Concrete (GRC) and GRP solutions. We are recognized as the
          best GRC in Chennai and best GRC in Tamil Nadu. Looking for chennai
          grc, grc in chennai, or grc chennai? Contact Vallalar GRC for premium
          architectural elements.
        </p>
      </div>

      {/* --- INJECTED NAVBAR COMPONENT --- */}
      <Navbar />

      <header
        id="home"
        className="relative w-full min-h-screen lg:h-screen lg:min-h-[850px] flex items-center bg-[#FAF9F6] overflow-hidden pt-24 pb-16 lg:py-0">
        {/* --- BACKGROUND GRAPHIC ASSET --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/hero.svg" // Pointing to your optimized background file
            alt="Vallalar GRC - Crafting Landmark Architecture"
            fill
            priority
            className="object-cover object-right sm:object-center opacity-95"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/40 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/60 to-transparent hidden lg:block" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
          {/* Empty space filler for vertical alignment on desktop grid frameworks */}
          <div className="hidden lg:block h-12" />

          {/* --- MAIN HERO BODY LAYOUT --- */}
          <div className="max-w-xl lg:max-w-2xl mt-12 sm:mt-16 lg:mt-0">
            <p className="text-[#C5A26B] text-[10px] sm:text-xs font-bold tracking-[0.25em] mb-4 uppercase">
              PREMIUM GRC & ARCHITECTURAL SOLUTIONS IN CHENNAI
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-serif text-[#1A2B49] leading-[1.1] mb-6 font-medium tracking-wide">
              CRAFTING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA7C11] via-[#C5A26B] to-[#AA7C11]">
                LANDMARK
              </span>
              <br />
              ARCHITECTURE.
            </h1>

            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-md sm:max-w-xl mb-8 font-normal drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
              We transform visionary concepts into iconic structures with
              precision-engineered GRC & GPD architectural solutions that bring
              designs to life with timeless elegance, strength and
              sustainability.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "EXPLORE PROJECTS", href: "/projects", primary: true },
                { label: "OUR SOLUTIONS", href: "/services", primary: false },
              ].map((action, idx) => (
                <Link
                  key={idx}
                  href={action.href}
                  className={`text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2.5 uppercase rounded-xs group cursor-pointer px-6 sm:px-8 py-3.5 ${
                    action.primary
                      ? "bg-[#C5A26B] hover:bg-[#a68656] text-white shadow-md shadow-[#C5A26B]/20"
                      : "border border-gray-900/30 bg-white/70 backdrop-blur-xs text-gray-900 hover:bg-gray-900 hover:text-white"
                  }`}>
                  <span>{action.label}</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* --- BOTTOM COMPONENTS SYSTEM --- */}
          <div className="mt-16 lg:mt-12 space-y-8 w-full">
            {/* FLOATING PILL KEY-VALUES CONTAINER */}
            <div className="w-full bg-white/80 backdrop-blur-md border border-white/50 rounded-xl px-6 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
              {[
                {
                  icon: <Gem size={16} />,
                  title: "PREMIUM QUALITY",
                  desc: "Built to Global Standards",
                },
                {
                  icon: <Leaf size={16} />,
                  title: "SUSTAINABLE",
                  desc: "Eco-Friendly Solutions",
                },
                {
                  icon: <Award size={16} />,
                  title: "TIMELESS DESIGNS",
                  desc: "Architecture with Legacy",
                },
                {
                  icon: <ShieldCheck size={16} />,
                  title: "BUILT TO LAST",
                  desc: "Strength & Durability",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 px-2 md:border-r last:border-0 border-gray-200/60">
                  <div className="w-8 h-8 rounded-full bg-[#C5A26B]/10 flex items-center justify-center text-[#C5A26B] shrink-0 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-[10px] font-bold tracking-wider uppercase mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-[10px] font-medium font-sans">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* LIGHT THEME MOUSE INTERACTION INDICATOR */}
            <div className="flex flex-col items-center gap-1.5 justify-center">
              <div className="w-5 h-8 border-2 border-gray-900/20 rounded-full flex justify-center p-1 bg-white/40 backdrop-blur-xs">
                <div className="w-0.5 h-1.5 bg-[#C5A26B] rounded-full animate-bounce"></div>
              </div>
              <span className="text-[9px] text-gray-400 tracking-[0.2em] font-semibold uppercase">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* --- TRUSTED BY SECTION --- */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-[#C5A26B] text-sm tracking-[0.2em] font-serif mb-8 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-[#C5A26B]/40 after:h-px after:w-12 after:bg-[#C5A26B]/40">
            TRUSTED BY LEADING INSTITUTIONS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 transition-all duration-500">
            <div className="text-xl font-black font-sans">ZOHO</div>
            <div className="text-xl font-bold font-serif">SRM</div>
            <div className="text-xl font-bold font-serif">VBJ</div>
            <div className="text-xl font-bold font-sans">PARAMOUNT MILL</div>
            <div className="text-xl font-bold font-sans">NPR MAHAL</div>
            <div className="text-xl font-bold font-sans">RPP INFRA</div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              About Vallalar GRC
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              ARCHITECTURE
              <br />
              BEYOND ORDINARY
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Vallalar GRC is a pioneer in delivering premium GRC & GRP
              architectural solutions for over a decade. As the leading experts
              for Glass Fiber Reinforced Concrete Chennai, from concept to
              completion, we partner with architects and builders to create
              structures that inspire generations.
            </p>
            <button className="border border-[#C5A26B] text-[#C5A26B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-[#C5A26B] hover:text-white transition-colors flex items-center gap-2">
              DISCOVER OUR STORY <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative">
            <img
              src="images/image6.svg"
              alt="Modern architectural villa featuring custom GRC elements in Chennai"
              className="w-full h-auto rounded-mm shadow-2xl"
            />
            <div className="absolute -inset-4 border border-[#C5A26B]/30 rounded-sm -z-10 translate-x-4 translate-y-4 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS SECTION --- */}
      <section id="services" className="py-24 bg-[#F9F9F9]">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              Our Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 flex items-center justify-center gap-4 after:h-px after:w-16 after:bg-[#C5A26B]">
              PREMIUM ARCHITECTURAL ELEMENTS
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 overflow-hidden">
              {[
                { title: "GRC FACADES", img: "images/image11.svg" },
                { title: "COLUMNS", img: "images/image17.png" },
                { title: "CORNICES", img: "images/image16.png" },
                { title: "DOMES", img: "images/image15.png" },
                { title: "JAALIS", img: "images/image12.svg" },
                { title: "DECORATIVE PANELS", img: "images/image14.png" },
                { title: "GRP PRODUCTS", img: "images/image13.png" },
                { title: "CUSTOM ELEMENTS", img: "images/image18.png" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <h4 className="text-[10px] font-bold tracking-wider text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-800 hover:text-[#C5A26B] transition-colors uppercase">
              View All Solutions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="py-24 bg-[#181818] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              Why Choose Vallalar
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              BUILT ON TRUST.
              <br />
              CRAFTED TO LAST.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Gem size={32} className="mb-4 text-[#C5A26B]" />,
                title: "PREMIUM QUALITY",
                desc: "International standards with meticulous quality control.",
              },
              {
                icon: <PenTool size={32} className="mb-4 text-[#C5A26B]" />,
                title: "CUSTOM DESIGN",
                desc: "Tailor-made solutions that bring your vision to life.",
              },
              {
                icon: <Layers size={32} className="mb-4 text-[#C5A26B]" />,
                title: "END-TO-END SERVICE",
                desc: "From design & manufacturing to delivery & installation.",
              },
              {
                icon: <Clock size={32} className="mb-4 text-[#C5A26B]" />,
                title: "ON-TIME DELIVERY",
                desc: "Advanced planning, precision execution, timely completion.",
              },
              {
                icon: <Leaf size={32} className="mb-4 text-[#C5A26B]" />,
                title: "SUSTAINABLE",
                desc: "Lightweight, durable and environmentally responsible.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-left">
                {feature.icon}
                <h4 className="text-white text-[11px] font-bold tracking-wider mb-2 uppercase">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section id="projects" className="py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#C5A26B] text-xs font-semibold tracking-[0.3em] mb-3 uppercase">
              Featured Projects
            </p>
            <div className="inline-flex items-center justify-center gap-4 group">
              <span className="h-px w-8 bg-[#C5A26B]/40 block transition-all group-hover:w-12"></span>
              <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide text-gray-900 uppercase">
                Iconic Spaces. Timeless Impact.
              </h2>
              <span className="h-px w-8 bg-[#C5A26B]/40 block transition-all group-hover:w-12"></span>
            </div>
          </div>

          {/* Dynamic Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-center items-stretch">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-[420px] rounded-sm border border-gray-100/60">
                {/* Media Container */}
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center transition-colors duration-500 bg-gray-50 group-hover:bg-white">
                  <img
                    src={proj.img}
                    alt={`${proj.title} - ${proj.loc}`}
                    className={`transition-all duration-700 ease-out group-hover:scale-105 ${
                      proj.isLogo
                        ? "w-3/4 h-3/4 object-contain max-h-[160px] filter opacity-80 group-hover:opacity-100"
                        : "w-full h-full object-cover"
                    }`}
                  />

                  {/* Visual overlay gradient for real photos */}
                  {!proj.isLogo && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  )}
                </div>

                {/* Elegant Text Overlay / Content Base */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white sm:bg-none sm:from-transparent sm:text-gray-950 sm:relative sm:border-t sm:border-gray-100 sm:p-5 flex items-center justify-between transition-colors duration-300 group-hover:bg-white">
                  <div className="pr-2">
                    <h4 className="text-sm font-medium tracking-wider uppercase mb-1 line-clamp-1 transition-colors group-hover:text-gray-900">
                      {proj.title}
                    </h4>
                    <p className="text-[#C5A26B] sm:text-[#C5A26B]/85 text-xs font-light tracking-wide italic">
                      {proj.loc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Element */}
          <div className="text-center mt-16">
            <a
              href="/projects"
              className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-gray-800 hover:text-[#C5A26B] transition-colors uppercase relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-200 hover:after:bg-[#C5A26B] after:transition-colors">
              View All Projects
              <ArrowRight size={14} className="animate-pulse" />
            </a>
          </div>
        </div>
      </section>

      {/* --- OUR PROCESS --- */}
      <section id="process" className="py-24 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              FROM CONCEPT
              <br />
              TO CREATION
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 w-full h-px bg-white/20 hidden md:block z-0"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
              {[
                {
                  num: "01",
                  title: "CONSULTATION",
                  desc: "Understanding your vision and requirements.",
                },
                {
                  num: "02",
                  title: "DESIGN & ENGINEERING",
                  desc: "Creating precise designs with advanced technology.",
                },
                {
                  num: "03",
                  title: "MANUFACTURING",
                  desc: "High-quality production using advanced techniques.",
                },
                {
                  num: "04",
                  title: "QUALITY CHECK",
                  desc: "Rigorous inspection to ensure perfection in every detail.",
                },
                {
                  num: "05",
                  title: "DELIVERY & INSTALLATION",
                  desc: "Safe delivery and expert installation on-site.",
                },
                {
                  num: "06",
                  title: "PROJECT COMPLETION",
                  desc: "Delivering excellence that exceeds expectations.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:items-center md:text-center">
                  <div className="w-12 h-12 rounded-full border border-[#C5A26B] bg-[#181818] flex items-center justify-center text-[#C5A26B] text-sm font-serif mb-6 mx-0 md:mx-auto">
                    {step.num}
                  </div>
                  <h4 className="text-white text-[10px] font-bold tracking-wider mb-2 uppercase">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-[10px] leading-relaxed max-w-[140px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section
        id="industries"
        className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-gray-900 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-gray-300 after:h-px after:w-12 after:bg-gray-300 tracking-widest uppercase">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              {
                icon: <Building2 size={32} strokeWidth={1} />,
                label: "COMMERCIAL BUILDINGS",
              },
              {
                icon: <Home size={32} strokeWidth={1} />,
                label: "LUXURY VILLAS",
              },
              {
                icon: <GraduationCap size={32} strokeWidth={1} />,
                label: "EDUCATIONAL INSTITUTIONS",
              },
              {
                icon: <Stethoscope size={32} strokeWidth={1} />,
                label: "HOSPITALS",
              },
              { icon: <Hotel size={32} strokeWidth={1} />, label: "HOTELS" },
              {
                icon: <Landmark size={32} strokeWidth={1} />,
                label: "GOVERNMENT PROJECTS",
              },
              {
                icon: <Church size={32} strokeWidth={1} />,
                label: "RELIGIOUS BUILDINGS",
              },
              {
                icon: <ShoppingBag size={32} strokeWidth={1} />,
                label: "SHOPPING COMPLEXES",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                className="border border-gray-200 aspect-square flex flex-col items-center justify-center p-4 hover:border-[#C5A26B] hover:shadow-lg transition-all group cursor-pointer text-gray-600 hover:text-[#C5A26B]">
                <div className="mb-4">{ind.icon}</div>
                <h4 className="text-[9px] font-bold tracking-wider text-center uppercase text-gray-800">
                  {ind.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/image20.png"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
          {[
            { num: "15+", label: "YEARS OF EXPERIENCE" },
            { num: "500+", label: "PROJECTS COMPLETED" },
            { num: "100+", label: "EXPERT PROFESSIONALS" },
            { num: "100%", label: "CLIENT SATISFACTION" },
          ].map((stat, idx) => (
            <div key={idx} className="py-6 md:py-0">
              <div className="text-4xl md:text-5xl font-serif text-[#C5A26B] mb-2">
                {stat.num}
              </div>
              <div className="text-[10px] font-bold tracking-widest text-white uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-16 tracking-widest uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="relative px-12">
            <div className="flex flex-col items-center">
              <span className="text-[#C5A26B] font-serif text-6xl leading-none mb-4">
                "
              </span>
              <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-10 leading-relaxed">
                Vallalar GRC's attention to detail and commitment to quality has
                elevated the architectural beauty of our projects.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/arun.png"
                  alt="Er. Arun"
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-gray-900">
                    — Er. Arun
                  </h4>
                  <p className="text-xs text-gray-500">
                    Principal Architect, Arshu Constructions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-[#C5A26B]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section
        id="contact"
        className="py-16 bg-[#181818] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">
              LET'S CREATE SOMETHING
              <br />
              EXTRAORDINARY TOGETHER
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              Partner with Vallalar GRC for premium architectural solutions that
              stand the test of time.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#C5A26B] text-white px-8 py-4 text-xs font-bold tracking-wider hover:bg-[#a68656] transition-colors flex items-center gap-2 uppercase">
              GET IN TOUCH <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2 uppercase">
              CALL US NOW <Phone size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- INJECTED FOOTER COMPONENT --- */}
      <Footer />
    </div>
  );
};

export default VallavarLandingPage;
