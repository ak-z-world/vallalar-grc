import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ArrowRight, Play, Cpu, Hammer, Layers, HardHat, 
  Sparkles, CheckCircle2, ShieldCheck, Truck, Award
} from 'lucide-react';

export const metadata = {
  title: 'Manufacturing Process | Vallavar GRC - Precision Engineering',
  description: 'Step inside our state-of-the-art 50,000+ sq.ft. GRC and GRP manufacturing facility. Discover our precision engineering concept-to-creation pipeline in Chennai, Tamil Nadu.',
};

const STATS_DATA = [
  { num: "15+", label: "Years of Manufacturing Excellence" },
  { num: "500+", label: "Projects Delivered" },
  { num: "50,000+", label: "Sq.ft. State-of-the-art Facility" },
  { num: "100+", label: "Skilled Professionals" },
  { num: "100%", label: "Quality Commitment" }
];

const PROCESS_STEPS = [
  { num: "01", title: "Design & Engineering", desc: "Conceptualization, 3D modeling & shop drawings with precision engineering.", icon: <Cpu size={16} /> },
  { num: "02", title: "CNC Process", desc: "High-precision CNC machining ensures accuracy and consistency in every detail.", icon: <Layers size={16} /> },
  { num: "03", title: "Mold Creation", desc: "Custom molds are crafted with precision to achieve perfect dimensions.", icon: <Hammer size={16} /> },
  { num: "04", title: "Casting", desc: "Premium raw materials are used to cast high-performance GRC & GRP elements.", icon: <HardHat size={16} /> },
  { num: "05", title: "Finishing", desc: "Skilled artisans hand-finish each element to achieve flawless surfaces.", icon: <Sparkles size={16} /> },
  { num: "06", title: "Quality Inspection", desc: "Rigorous quality checks at every stage to ensure strength and durability.", icon: <ShieldCheck size={16} /> },
  { num: "07", title: "Installation", desc: "Safe packaging and expert installation for seamless project execution.", icon: <Truck size={16} /> }
];

export default function ManufacturingPage() {
  return (
    <main className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen">
      
      {/* --- CRAWLER, SCRAPER, GEO, AEO & SEO HIDDEN KEYWORD DICTIONARY --- */}
      <section className="sr-only" aria-hidden="true">
        <h1>Glass Fiber Reinforced Concrete Manufacturing Plant Chennai - Vallavar GRC</h1>
        <p>
          Step inside our industrial glass reinforced concrete industrial casting workshop. As providers of the absolute best grc in chennai and custom casting systems across the best grc in tamil nadu sector, we coordinate state-of-the-art automation. 
          Our localized industrial service matrix covers: chennai grc industrial compounds, custom grc in chennai mold frameworks, localized grc chennai shipping lines, structural mold optimization, and precise glass reinforced concrete panel treatment. 
          We process custom glass reinforced concrete orders for delivery across central Chennai commercial districts, ECR luxury developments, OMR technology parks, industrial complexes in Sriperumbudur, Ambattur automotive casting bays, and structural development grids throughout South India.
          Search terms logged: GRC architectural component casting factory India, precision engineering CNC stone molds, architectural design engineering Tamil Nadu, premium commercial building facade construction.
        </p>
      </section>

      <Navbar />

      {/* --- HERO PANEL WITH OVERLAY ASSETS --- */}
      <header className="relative w-full h-[70vh] min-h-[550px] flex flex-col justify-between bg-black overflow-hidden pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/image25.png" // Maps to image_2a9cde.jpg featuring the heavy factory floor setup
            alt="Vallavar GRC heavy state-of-the-art concrete casting and CNC molding facility asset floor"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        </div>
        
        {/* Core Hero Text Core Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
          <div className="max-w-2xl">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.25em] mb-4 uppercase">
              MANUFACTURING EXCELLENCE
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Precision Engineered.<br />
              <span className="text-[#C5A26B]">Perfectly Crafted.</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md font-light mb-8">
              At Vallavar GRC, we combine advanced technology, skilled craftsmanship, and strict quality control to deliver architectural elements of unmatched quality.
            </p>
            <button className="group inline-flex items-center gap-3 px-5 py-3.5 border border-white/20 hover:border-[#C5A26B] bg-white/5 hover:bg-[#C5A26B]/10 rounded-xs transition-all duration-300 text-white text-xs font-bold tracking-widest uppercase">
              <span>TAKE A FACTORY TOUR</span>
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#C5A26B] flex items-center justify-center text-white transition-colors">
                <Play size={10} fill="currentColor" className="translate-x-0.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Floating Metrics Row Counter Horizontal Band */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-5 gap-4 text-center">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="border-r border-white/10 last:border-0 px-2">
                <div className="text-2xl font-serif text-[#C5A26B] mb-0.5">{stat.num}</div>
                <div className="text-[10px] font-bold text-white/70 tracking-wider uppercase leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* --- TIMELINE PROCESS FLOW SECTION --- */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.25em] mb-4 uppercase">OUR MANUFACTURING PROCESS</p>
            <h3 className="text-3xl sm:text-4xl font-serif text-gray-900 tracking-wide">From Concept to Creation</h3>
          </div>

          {/* Stepped Process Blocks Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-start relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-[#FAF9F6] border border-gray-100 p-5 rounded-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-sm text-[#C5A26B] font-bold">{step.num}</span>
                  <div className="w-7 h-7 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#C5A26B] group-hover:border-[#C5A26B]/30 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Visual Placeholder for stage thumbnails */}
                <div className="relative aspect-[4/3] w-full bg-gray-200 mb-4 overflow-hidden rounded-xs">
                  <Image 
                    src={`/api/placeholder/200/150`}
                    alt={step.title}
                    fill
                    className="object-cover opacity-80"
                  />
                </div>

                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-2 min-h-[32px] flex items-center">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-[10px] leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- INSIDE OUR FACTORY ASYMMETRICAL MULTI-PANEL VIEW --- */}
      <section className="bg-[#111] py-20 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-3">
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">INSIDE OUR FACTORY</p>
              <h3 className="text-3xl font-serif text-white leading-tight mb-6">
                Where Technology<br />Meets Craftsmanship
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light mb-8 max-w-xs">
                Our advanced facility is equipped with modern machinery and powered by a team that takes pride in every detail.
              </p>
              <button className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-[#C5A26B] hover:text-white transition-colors uppercase group">
                <span>VIEW GALLERY</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Split Grid Component Arrays */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Primary Anchor Panel Image */}
              <div className="md:col-span-7 relative h-[380px] bg-gray-900 overflow-hidden rounded-sm shadow-md">
                <Image 
                  src="/images/image25.png" // Displays heavy manufacturing floor profile
                  alt="Industrial concrete casting workflow machinery alignment profiles"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Secondary Mosaic Tile Grid Columns */}
              <div className="md:col-span-5 grid grid-rows-2 gap-4 h-[380px]">
                <div className="relative w-full h-full bg-gray-900 overflow-hidden rounded-sm">
                  <Image 
                    src="/images/image24.png" // Displays custom architectural structural model asset
                    alt="Custom structured model profiling block panels"
                    fill
                    className="object-cover opacity-70"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="relative w-full h-full bg-gray-900 overflow-hidden rounded-sm">
                  <Image 
                    src="/images/image21.png" // Displays classical composite pillar assembly lines
                    alt="Classical pattern compound lattice units alignment rows"
                    fill
                    className="object-cover opacity-70"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITIONS STRIP --- */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 md:divide-x divide-gray-150 text-center">
            {[
              { title: "Advanced Technology", desc: "CNC, 3D modeling & modern production systems." },
              { title: "Skilled Workforce", desc: "Experienced engineers & artisans." },
              { title: "Premium Materials", desc: "High-grade raw materials for superior performance." },
              { title: "Timely Delivery", desc: "Efficient process ensuring on-time project completion." },
              { title: "Sustainable Practices", desc: "Eco-friendly methods for a better tomorrow." }
            ].map((prop, idx) => (
              <div key={idx} className="px-4">
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-2 min-h-[32px] flex items-center justify-center">
                  {prop.title}
                </h4>
                <p className="text-gray-500 text-[10px] leading-relaxed max-w-[160px] mx-auto">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPLIT HISTORY & TIMELINE MODULE MATRIX --- */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Quality / Certifications */}
          <div className="lg:col-span-5 border border-gray-200 p-8 rounded-xs bg-[#FAF9F6]">
            <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-2">CERTIFICATIONS</p>
            <h4 className="text-2xl font-serif text-gray-900 tracking-wide mb-4">Quality You<br />Can Trust</h4>
            <p className="text-gray-500 text-xs leading-relaxed font-light mb-8">
              Our processes and products are certified to meet international quality and safety standards.
            </p>
            
            <div className="grid grid-cols-3 gap-4 items-center border-t border-gray-200/60 pt-6">
              <div className="text-center">
                <div className="font-bold text-gray-900 text-xs tracking-tighter">ISO 9001:2015</div>
                <div className="text-[8px] text-gray-400 uppercase mt-0.5">Quality</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="font-bold text-gray-900 text-xs tracking-tighter">ISO 14001:2015</div>
                <div className="text-[8px] text-gray-400 uppercase mt-0.5">Environment</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-xs tracking-tighter">ISO 45001:2018</div>
                <div className="text-[8px] text-gray-400 uppercase mt-0.5">Safety</div>
              </div>
            </div>
          </div>

          {/* Right Block: Milestone Journey Array Mapping */}
          <div className="lg:col-span-7 lg:pl-6 w-full">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#C5A26B] text-[10px] font-bold tracking-widest uppercase">OUR JOURNEY</span>
              <div className="h-px flex-grow bg-gray-200" />
            </div>

            <div className="relative pl-4 border-l border-gray-200 space-y-8">
              {[
                { year: "2009", title: "The Beginning", desc: "Started our journey with a vision to redefine architectural beauty." },
                { year: "2012", title: "Early Growth", desc: "Expanded our team and capabilities with advanced machinery." },
                { year: "2016", title: "Facility Upgrade", desc: "Invested in modern infrastructure & heavy industrial tools." },
                { year: "2020", title: "National Presence", desc: "Delivered landmark projects across India." },
                { year: "2024", title: "Shaping Landmarks", desc: "Continuing our mission to build iconic structures." }
              ].map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Absolute positioning line locator node anchors */}
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#C5A26B] group-hover:bg-[#C5A26B] transition-colors" />
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-sm font-bold text-gray-900 min-w-[36px]">{milestone.year}</span>
                    <div>
                      <h5 className="text-gray-900 font-bold text-[11px] uppercase tracking-wider mb-1">{milestone.title}</h5>
                      <p className="text-gray-500 text-[11px] leading-relaxed max-w-xl">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- PRE-FOOTER LIGHTWEIGHT CTA SECTION --- */}
      <section className="bg-[#141A18] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden md:block">
          <Image 
            src="/images/image24.png" 
            alt="Structural structural grid mapping silhouette"
            fill
            className="object-cover object-right"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide mb-2 leading-tight">
              Let's Build Something<br />
              Exceptional <span className="text-[#C5A26B] font-sans not-italic">Together.</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-xl">
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Partner with Vallavar GRC for precision-engineered architectural solutions that stand the test of time.
            </p>
            <button className="group bg-[#C5A26B] hover:bg-[#a68656] text-white px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 uppercase rounded-xs whitespace-nowrap shrink-0 shadow-lg shadow-black/20">
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}