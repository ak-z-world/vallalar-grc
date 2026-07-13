import React from 'react';
import { 
  ChevronRight, ChevronLeft, MapPin, Phone, Mail, Download, 
  ArrowRight, 
  Gem, PenTool, Layers, Clock, Leaf, Building2, Home, 
  GraduationCap, Stethoscope, Hotel, Landmark, Church, ShoppingBag 
} from 'lucide-react';

const VallavarLandingPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-[#C5A26B] selection:text-white">
      {/* SEO Hidden Text for Scrapers & Crawlers */}
      <div className="sr-only">
        <h1>Vallavar GRC - Best GRC in Chennai, Tamil Nadu</h1>
        <p>
          Leading GRC manufacturer in Chennai providing premium Glass Fiber Reinforced Concrete (GRC) 
          and GRP solutions. We are recognized as the best GRC in Chennai and best GRC in Tamil Nadu. 
          Looking for chennai grc, grc in chennai, or grc chennai? Contact Vallavar GRC for premium architectural elements.
        </p>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="text-2xl font-serif text-white tracking-widest flex items-center">
            <span className="text-[#C5A26B] text-3xl mr-1">V</span> VALLAVAR <span className="text-xs ml-2 text-[#C5A26B] font-sans mt-2">GRC</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest text-white/90">
          <a href="#home" className="hover:text-[#C5A26B] transition-colors">HOME</a>
          <a href="#about" className="hover:text-[#C5A26B] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[#C5A26B] transition-colors">SERVICES</a>
          <a href="#projects" className="hover:text-[#C5A26B] transition-colors">PROJECTS</a>
          <a href="#industries" className="hover:text-[#C5A26B] transition-colors">INDUSTRIES</a>
          <a href="#process" className="hover:text-[#C5A26B] transition-colors">OUR PROCESS</a>
          <a href="#blog" className="hover:text-[#C5A26B] transition-colors">BLOG</a>
          <a href="#contact" className="hover:text-[#C5A26B] transition-colors">CONTACT</a>
        </div>
        <button className="hidden md:block bg-[#C5A26B] text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-[#a68656] transition-colors uppercase">
          Get a Quote
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img
  src="/images/image1.png"
  alt="Premium GRC building facade in Chennai"
  className="w-full h-full object-cover opacity-60"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-end pb-20">
          <div className="md:col-span-8">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              Premium GRC & GRP Architectural Solutions in Chennai
            </p>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              CRAFTING<br />LANDMARK<br />ARCHITECTURE.
            </h2>
            <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed mb-10">
              We transform visionary concepts into iconic structures with precision-engineered 
              GRC & GRP elements that define beauty, strength and timeless elegance. Widely regarded 
              as the best GRC in Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C5A26B] text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-[#a68656] transition-colors flex items-center gap-2">
                EXPLORE PROJECTS <ArrowRight size={16} />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2">
                OUR SOLUTIONS <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex md:col-span-4 flex-col items-end gap-4 pb-12">
            <div className="border border-white/20 px-6 py-3 backdrop-blur-sm">
              <p className="text-white text-xs tracking-widest font-semibold">SHAPING ELEVATIONS.</p>
            </div>
            <div className="border border-white/20 px-6 py-3 backdrop-blur-sm">
              <p className="text-white text-xs tracking-widest font-semibold">DEFYING ORDINARY.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C5A26B] rounded-full animate-bounce"></div>
          </div>
          <span className="text-[10px] text-white/50 tracking-widest uppercase">Scroll to explore</span>
        </div>
      </header>

      {/* --- TRUSTED BY SECTION --- */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-[#C5A26B] text-sm tracking-[0.2em] font-serif mb-8 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-[#C5A26B]/40 after:h-px after:w-12 after:bg-[#C5A26B]/40">
            TRUSTED BY LEADING INSTITUTIONS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos representational placeholders */}
            <div className="text-xl font-black font-sans">ZOHO</div>
            <div className="text-xl font-bold font-serif">SRM</div>
            <div className="text-xl font-bold font-serif">AMET</div>
            <div className="text-xl font-bold font-sans">ASHOK LEYLAND</div>
            <div className="text-xl font-bold font-sans">RAMKY</div>
            <div className="text-xl font-bold font-sans">DLF BUILDING INDIA</div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              About Vallavar GRC
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              ARCHITECTURE<br />BEYOND ORDINARY
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Vallavar GRC is a pioneer in delivering premium GRC & GRP architectural solutions for over a decade. 
              As the leading experts for Glass Fiber Reinforced Concrete Chennai, from concept to completion, 
              we partner with architects and builders to create structures that inspire generations.
            </p>
            <button className="border border-[#C5A26B] text-[#C5A26B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-[#C5A26B] hover:text-white transition-colors flex items-center gap-2">
              DISCOVER OUR STORY <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="image_f142be.jpg" 
              alt="Modern architectural villa featuring custom GRC elements in Chennai" 
              className="w-full h-auto rounded-sm shadow-2xl"
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
            <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-[#C5A26B] hover:text-white hover:border-[#C5A26B] transition-colors" aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 overflow-hidden">
              {[
                { title: 'GRC FACADES', img: 'image_f13ff7.jpg' },
                { title: 'COLUMNS', img: '/api/placeholder/300/400' },
                { title: 'CORNICES', img: '/api/placeholder/300/400' },
                { title: 'DOMES', img: '/api/placeholder/300/400' },
                { title: 'JAALIS', img: '/api/placeholder/300/400' },
                { title: 'DECORATIVE PANELS', img: '/api/placeholder/300/400' },
                { title: 'GRP PRODUCTS', img: '/api/placeholder/300/400' },
                { title: 'CUSTOM ELEMENTS', img: '/api/placeholder/300/400' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="h-40 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <h4 className="text-[10px] font-bold tracking-wider text-gray-800">{item.title}</h4>
                    <ArrowRight size={14} className="text-[#C5A26B]" />
                  </div>
                </div>
              ))}
            </div>
            <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-[#C5A26B] hover:text-white hover:border-[#C5A26B] transition-colors" aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-center mt-12">
            <a href="#services" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-800 hover:text-[#C5A26B] transition-colors uppercase">
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
              Why Choose Vallavar
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              BUILT ON TRUST.<br />CRAFTED TO LAST.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: <Gem size={32} className="mb-4 text-[#C5A26B]"/>, title: 'PREMIUM QUALITY', desc: 'International standards with meticulous quality control.' },
              { icon: <PenTool size={32} className="mb-4 text-[#C5A26B]"/>, title: 'CUSTOM DESIGN', desc: 'Tailor-made solutions that bring your vision to life.' },
              { icon: <Layers size={32} className="mb-4 text-[#C5A26B]"/>, title: 'END-TO-END SERVICE', desc: 'From design & manufacturing to delivery & installation.' },
              { icon: <Clock size={32} className="mb-4 text-[#C5A26B]"/>, title: 'ON-TIME DELIVERY', desc: 'Advanced planning, precision execution, timely completion.' },
              { icon: <Leaf size={32} className="mb-4 text-[#C5A26B]"/>, title: 'SUSTAINABLE', desc: 'Lightweight, durable and environmentally responsible.' },
            ].map((feature, idx) => (
              <div key={idx} className="text-left">
                {feature.icon}
                <h4 className="text-white text-[11px] font-bold tracking-wider mb-2 uppercase">{feature.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section id="projects" className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 flex items-center justify-center gap-4 after:h-px after:w-16 after:bg-[#C5A26B]">
              ICONIC SPACES. TIMELESS IMPACT.
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-[#C5A26B] hover:text-white transition-colors hidden md:block" aria-label="Previous Project">
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'ZOHO CORPORATE CAMPUS', loc: 'Chennai', img: 'image_f13ff7.jpg' },
                { title: 'SRM UNIVERSITY BLOCK', loc: 'Chennai', img: '/api/placeholder/400/300' },
                { title: 'DLF IT PARK', loc: 'Chennai', img: '/api/placeholder/400/300' },
                { title: 'LUXURY VILLA', loc: 'ECR, Chennai', img: 'image_f142be.jpg' },
              ].map((proj, idx) => (
                <div key={idx} className="bg-white border border-gray-200 group cursor-pointer shadow-sm hover:shadow-xl transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={proj.img} alt={`${proj.title} - ${proj.loc}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5 flex items-end justify-between">
                    <div>
                      <h4 className="text-xs font-bold tracking-wider text-gray-900 mb-1">{proj.title}</h4>
                      <p className="text-[#C5A26B] text-[10px] italic">{proj.loc}</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-[#C5A26B] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-[#C5A26B] hover:text-white transition-colors hidden md:block" aria-label="Next Project">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-12">
            <a href="#projects" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-800 hover:text-[#C5A26B] transition-colors uppercase">
              View All Projects <ArrowRight size={16} />
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
              FROM CONCEPT<br />TO CREATION
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 w-full h-px bg-white/20 hidden md:block z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
              {[
                { num: '01', title: 'CONSULTATION', desc: 'Understanding your vision and requirements.' },
                { num: '02', title: 'DESIGN & ENGINEERING', desc: 'Creating precise designs with advanced technology.' },
                { num: '03', title: 'MANUFACTURING', desc: 'High-quality production using advanced techniques.' },
                { num: '04', title: 'QUALITY CHECK', desc: 'Rigorous inspection to ensure perfection in every detail.' },
                { num: '05', title: 'DELIVERY & INSTALLATION', desc: 'Safe delivery and expert installation on-site.' },
                { num: '06', title: 'PROJECT COMPLETION', desc: 'Delivering excellence that exceeds expectations.' },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col md:items-center md:text-center">
                  <div className="w-12 h-12 rounded-full border border-[#C5A26B] bg-[#181818] flex items-center justify-center text-[#C5A26B] text-sm font-serif mb-6 mx-0 md:mx-auto">
                    {step.num}
                  </div>
                  <h4 className="text-white text-[10px] font-bold tracking-wider mb-2 uppercase">{step.title}</h4>
                  <p className="text-gray-400 text-[10px] leading-relaxed max-w-[140px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section id="industries" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-gray-900 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-gray-300 after:h-px after:w-12 after:bg-gray-300 tracking-widest uppercase">
              Industries We Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: <Building2 size={32} strokeWidth={1} />, label: 'COMMERCIAL BUILDINGS' },
              { icon: <Home size={32} strokeWidth={1} />, label: 'LUXURY VILLAS' },
              { icon: <GraduationCap size={32} strokeWidth={1} />, label: 'EDUCATIONAL INSTITUTIONS' },
              { icon: <Stethoscope size={32} strokeWidth={1} />, label: 'HOSPITALS' },
              { icon: <Hotel size={32} strokeWidth={1} />, label: 'HOTELS' },
              { icon: <Landmark size={32} strokeWidth={1} />, label: 'GOVERNMENT PROJECTS' },
              { icon: <Church size={32} strokeWidth={1} />, label: 'RELIGIOUS BUILDINGS' },
              { icon: <ShoppingBag size={32} strokeWidth={1} />, label: 'SHOPPING COMPLEXES' },
            ].map((ind, idx) => (
              <div key={idx} className="border border-gray-200 aspect-square flex flex-col items-center justify-center p-4 hover:border-[#C5A26B] hover:shadow-lg transition-all group cursor-pointer text-gray-600 hover:text-[#C5A26B]">
                <div className="mb-4">{ind.icon}</div>
                <h4 className="text-[9px] font-bold tracking-wider text-center uppercase text-gray-800">{ind.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src="image_f13ff7.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
          {[
            { num: '15+', label: 'YEARS OF EXPERIENCE' },
            { num: '500+', label: 'PROJECTS COMPLETED' },
            { num: '100+', label: 'EXPERT PROFESSIONALS' },
            { num: '50+', label: 'CITIES SERVED' },
          ].map((stat, idx) => (
            <div key={idx} className="py-6 md:py-0">
              <div className="text-4xl md:text-5xl font-serif text-[#C5A26B] mb-2">{stat.num}</div>
              <div className="text-[10px] font-bold tracking-widest text-white uppercase">{stat.label}</div>
            </div>
          ))}
          {/* Missing 100% Client Satisfaction from design - replacing cities served if needed, but design has 5 actually. Let's add the 5th. */}
           <div className="py-6 md:py-0 border-t md:border-t-0 md:border-l border-white/20">
              <div className="text-4xl md:text-5xl font-serif text-[#C5A26B] mb-2">100%</div>
              <div className="text-[10px] font-bold tracking-widest text-white uppercase">CLIENT SATISFACTION</div>
            </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-16 tracking-widest uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="relative px-12">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-[#C5A26B] hover:text-white transition-colors" aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex flex-col items-center">
              <span className="text-[#C5A26B] font-serif text-6xl leading-none mb-4">"</span>
              <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-10 leading-relaxed">
                Vallavar GRC's attention to detail and commitment to quality has elevated the architectural beauty of our projects.
              </p>
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/60/60" alt="Ar. Ramesh Krishnan" className="w-12 h-12 rounded-full object-cover grayscale" />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-gray-900">— Ar. Ramesh Krishnan</h4>
                  <p className="text-xs text-gray-500">Principal Architect, RKA Architecture</p>
                </div>
              </div>
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-[#C5A26B] hover:text-white transition-colors" aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-[#C5A26B]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 bg-[#181818] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">
              LET'S CREATE SOMETHING<br />EXTRAORDINARY TOGETHER
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              Partner with Vallavar GRC for premium architectural solutions that stand the test of time.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#C5A26B] text-white px-8 py-4 text-xs font-bold tracking-wider hover:bg-[#a68656] transition-colors flex items-center gap-2 uppercase">
              GET IN TOUCH <ArrowRight size={16} />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2 uppercase">
              CALL US NOW <Phone size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black pt-20 pb-8 px-6 text-white/70">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="text-2xl font-serif text-white tracking-widest flex items-center">
              <span className="text-[#C5A26B] text-3xl mr-1">V</span> VALLAVAR <span className="text-xs ml-2 text-[#C5A26B] font-sans mt-2">GRC</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs text-white/60">
              Crafting landmark architecture with premium GRC & GRP solutions. Timeless beauty. Engineered to last. 
            </p>
            {/* social media */}
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-xs">
              {['Home', 'About Us', 'Services', 'Projects', 'Industries', 'Our Process', 'Blog', 'Contact'].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#C5A26B] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">SOLUTIONS</h4>
            <ul className="space-y-3 text-xs">
              {['GRC Facades', 'Columns', 'Cornices', 'Domes', 'Jaalis', 'Decorative Panels', 'GRP Products', 'Custom Elements'].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#C5A26B] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-6">CONTACT</h4>
            <ul className="space-y-4 text-xs mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C5A26B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">SF No. 258/18, Chinnavedampatti<br/>Coimbatore - 641 049, Tamil Nadu, India<br/>(Also Serving Chennai GRC Markets)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C5A26B] shrink-0" />
                <span>+91 95666 65001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C5A26B] shrink-0" />
                <span>info@vallavargrc.com</span>
              </li>
            </ul>
            <button className="bg-[#C5A26B] text-white px-6 py-3 text-[10px] font-bold tracking-wider hover:bg-[#a68656] transition-colors flex items-center gap-2 uppercase w-full justify-center">
              DOWNLOAD BROCHURE <Download size={14} />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 tracking-wider">
          <p>© 2026 Vallavar GRC. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VallavarLandingPage;