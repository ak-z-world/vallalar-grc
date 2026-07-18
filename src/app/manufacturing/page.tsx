import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Play,
  Cpu,
  Hammer,
  Layers,
  HardHat,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Manufacturing Process | Vallalar GRC - Precision Engineering",
  description:
    "Step inside our state-of-the-art 50,000+ sq.ft. GRC and GRP manufacturing facility. Discover our precision engineering concept-to-creation pipeline in Chennai, Tamil Nadu.",
};

const STATS_DATA = [
  { num: "15+", label: "Years of Manufacturing Excellence" },
  { num: "500+", label: "Projects Delivered" },
  { num: "50,000+", label: "Sq.ft. State-of-the-art Facility" },
  { num: "100+", label: "Skilled Professionals" },
  { num: "100%", label: "Quality Commitment" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Design & Engineering",
    desc: "Conceptualization, 3D modeling & shop drawings with precision engineering.",
    icon: <Cpu size={16} />,
    image: "/images/man1.svg",
  },
  {
    num: "02",
    title: "CNC Process",
    desc: "High-precision CNC machining ensures accuracy and consistency in every detail.",
    icon: <Layers size={16} />,
    image: "/images/man2.svg",
  },
  {
    num: "03",
    title: "Mold Creation",
    desc: "Custom molds are crafted with precision to achieve perfect dimensions.",
    icon: <Hammer size={16} />,
    image: "/images/man3.svg",
  },
  {
    num: "04",
    title: "Casting",
    desc: "Premium raw materials are used to cast high-performance GRC & GRP elements.",
    icon: <HardHat size={16} />,
    image: "/images/man4.svg",
  },
  {
    num: "05",
    title: "Finishing",
    desc: "Skilled artisans hand-finish each element to achieve flawless surfaces.",
    icon: <Sparkles size={16} />,
    image: "/images/man5.svg",
  },
  {
    num: "06",
    title: "Quality Inspection",
    desc: "Rigorous quality checks at every stage to ensure strength and durability.",
    icon: <ShieldCheck size={16} />,
    image: "/images/man6.svg",
  },
  {
    num: "07",
    title: "Installation",
    desc: "Safe packaging and expert installation for seamless project execution.",
    icon: <Truck size={16} />,
    image: "/images/man7.svg",
  },
];

export default function ManufacturingPage() {
  return (
    <main className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen">
      {/* --- CRAWLER, SCRAPER, GEO, AEO & SEO HIDDEN KEYWORD DICTIONARY --- */}
      <section className="sr-only" aria-hidden="true">
        <h1>
          Glass Fiber Reinforced Concrete Manufacturing Plant Chennai - Vallalar
          GRC
        </h1>
        <p>
          Step inside our industrial glass reinforced concrete industrial
          casting workshop. As providers of the absolute best grc in chennai and
          custom casting systems across the best grc in tamil nadu sector, we
          coordinate state-of-the-art automation. Our localized industrial
          service matrix covers: chennai grc industrial compounds, custom grc in
          chennai mold frameworks, localized grc chennai shipping lines,
          structural mold optimization, and precise glass reinforced concrete
          panel treatment. We process custom glass reinforced concrete orders
          for delivery across central Chennai commercial districts, ECR luxury
          developments, OMR technology parks, industrial complexes in
          Sriperumbudur, Ambattur automotive casting bays, and structural
          development grids throughout South India. Search terms logged: GRC
          architectural component casting factory India, precision engineering
          CNC stone molds, architectural design engineering Tamil Nadu, premium
          commercial building facade construction.
        </p>
      </section>

      <Navbar />

      {/* --- HERO PANEL WITH OVERLAY ASSETS --- */}
      <header className="relative w-full h-[70vh] min-h-[550px] flex flex-col justify-between bg-black overflow-hidden pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/image26.png" // Maps to image_2a9cde.jpg featuring the heavy factory floor setup
            alt="Vallalar GRC heavy state-of-the-art concrete casting and CNC molding facility asset floor"
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
              Precision Engineered.
              <br />
              <span className="text-[#C5A26B]">Perfectly Crafted.</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md font-light mb-8">
              At Vallalar GRC, we combine advanced technology, skilled
              craftsmanship, and strict quality control to deliver architectural
              elements of unmatched quality.
            </p>
            <button className="group inline-flex items-center gap-3 px-5 py-3.5 border border-white/20 hover:border-[#C5A26B] bg-white/5 hover:bg-[#C5A26B]/10 rounded-xs transition-all duration-300 text-white text-xs font-bold tracking-widest uppercase">
              <span>TAKE A FACTORY TOUR</span>
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#C5A26B] flex items-center justify-center text-white transition-colors">
                <Play
                  size={10}
                  fill="currentColor"
                  className="translate-x-0.5"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Floating Metrics Row Counter Horizontal Band */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-5 gap-4 text-center">
            {STATS_DATA.map((stat, idx) => (
              <div
                key={idx}
                className="border-r border-white/10 last:border-0 px-2">
                <div className="text-2xl font-serif text-[#C5A26B] mb-0.5">
                  {stat.num}
                </div>
                <div className="text-[10px] font-bold text-white/70 tracking-wider uppercase leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* --- TIMELINE PROCESS FLOW SECTION --- */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[#C5A26B] text-[10px] sm:text-xs font-bold tracking-[0.25em] mb-4 uppercase">
              OUR MANUFACTURING PROCESS
            </p>
            <h3 className="text-3xl sm:text-4xl font-serif text-gray-900 tracking-wide">
              From Concept to Creation
            </h3>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 items-stretch relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-gray-100 p-5 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                {/* Header inside the Step Card */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-sm text-[#C5A26B] font-bold">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#C5A26B] group-hover:border-[#C5A26B]/30 transition-all duration-300 shadow-xs">
                    {step.icon}
                  </div>
                </div>

                {/* Responsive Image Wrapper */}
                <div className="relative aspect-[4/3] w-full bg-gray-100 mb-4 overflow-hidden rounded-xs">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 14vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={idx < 4} // Priorities first few images for faster LCP scores
                  />
                </div>

                {/* Title & Description */}
                <h4 className="text-gray-900 text-[11px] font-bold tracking-wider uppercase mb-2 min-h-[32px] flex items-center group-hover:text-[#C5A26B] transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INSIDE OUR FACTORY ASYMMETRICAL MULTI-PANEL VIEW --- */}
      <section className="bg-[#111111] py-20 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                INSIDE OUR FACTORY
              </p>
              <h3 className="text-3xl sm:text-4xl font-serif text-white leading-tight mb-5 tracking-wide">
                Where Technology
                <br />
                Meets Craftsmanship
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light mb-8 max-w-sm lg:max-w-xs">
                Our advanced facility is equipped with modern machinery and
                powered by a team that takes pride in every detail.
              </p>
              <div>
                <button className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-[#C5A26B] hover:text-white transition-colors uppercase group cursor-pointer">
                  <span>VIEW GALLERY</span>
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>

            {/* Right Gallery Mosaic Layout Block */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Primary Highlight Anchor Panel (Left side of the gallery) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs bg-neutral-900 group">
                <Image
                  src="/images/image26.png"
                  alt="Industrial concrete casting workflow machinery alignment profiles"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
                />
              </div>

              {/* Secondary 2x2 Grid Panel Matrix (Right side of the gallery) */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left Mini Tile */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs bg-neutral-900 group">
                  <Image
                    src="/images/man9.svg"
                    alt="Custom structured model profiling block panels"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>

                {/* Top Right Mini Tile */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs bg-neutral-900 group">
                  <Image
                    src="/images/man8.svg"
                    alt="Classical pattern compound lattice units alignment rows"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>

                {/* Bottom Left Mini Tile */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs bg-neutral-900 group">
                  <Image
                    src="/images/man10.svg"
                    alt="Custom structural GRC dome assembly layout"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>

                {/* Bottom Right Mini Tile */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs bg-neutral-900 group">
                  <Image
                    src="/images/man11.svg"
                    alt="Finished architectural classical structural casting blocks"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 50vw, 20vw"
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
              {
                title: "Advanced Technology",
                desc: "CNC, 3D modeling & modern production systems.",
              },
              {
                title: "Skilled Workforce",
                desc: "Experienced engineers & artisans.",
              },
              {
                title: "Premium Materials",
                desc: "High-grade raw materials for superior performance.",
              },
              {
                title: "Timely Delivery",
                desc: "Efficient process ensuring on-time project completion.",
              },
              {
                title: "Sustainable Practices",
                desc: "Eco-friendly methods for a better tomorrow.",
              },
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
              Let's Build Something
              <br />
              Exceptional{" "}
              <span className="text-[#C5A26B] font-sans not-italic">
                Together.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-xl">
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Partner with Vallalar GRC for precision-engineered architectural
              solutions that stand the test of time.
            </p>
            <button className="group bg-[#C5A26B] hover:bg-[#a68656] text-white px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 uppercase rounded-xs whitespace-nowrap shrink-0 shadow-lg shadow-black/20">
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
