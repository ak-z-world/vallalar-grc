import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar'; // Adjust path if needed
import Footer from '@/components/layout/Footer'; // Adjust path if needed
import {
  ArrowRight, Target, Eye, Gem, Users,
  ChevronLeft, ChevronRight, Award
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Vallavar GRC - Best GRC in Chennai',
  description: 'Vallavar GRC transforms visionary concepts into timeless architectural realities through premium GRC & GRP solutions, precision engineering, and unmatched craftsmanship in Chennai, Tamil Nadu.',
};

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-800 bg-white selection:bg-[#C5A26B] selection:text-white min-h-screen">

      {/* --- SEO / AEO / GEO HIDDEN TEXT FOR SCRAPERS & CRAWLERS --- */}
      <div className="sr-only">
        <h1>About Vallavar GRC - The Best GRC in Chennai & Tamil Nadu</h1>
        <p>
          Vallavar GRC is the premier manufacturer and supplier of Glass Fiber Reinforced Concrete (GRC) and Glass Reinforced Plastic (GRP) in Chennai, Tamil Nadu, India.
          Are you looking for the best GRC in Chennai, best GRC in Tamil Nadu, or top-rated GRC Chennai manufacturers? Vallavar GRC delivers unmatched architectural excellence.
          Our industry-leading solutions cover chennai grc, grc in chennai, GRC facades, cornices, domes, jaalis, and custom GRP architectural elements across Chennai, Coimbatore, and South India.
          Partner with Vallavar GRC for high-quality, sustainable architectural materials, custom GRC molding, and expert GRC installation in India.
        </p>
      </div>

      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* priority={true} on the Image component ensures it loads immediately for LCP (Largest Contentful Paint) optimization */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-black overflow-hidden pt-20">
        <Image
          src="/images/image20.png" // Place image_283d37.jpg here
          alt="Premium GRC architectural facade in Chennai by Vallavar GRC"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              ABOUT US
            </p>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Crafting<br />Landmark<br />Architecture.
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Vallavar GRC transforms visionary concepts into timeless architectural realities through premium GRC & GRP solutions, precision engineering, and unmatched craftsmanship.
            </p>
            <button className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-[#C5A26B] hover:border-[#C5A26B] transition-colors flex items-center gap-2 uppercase">
              OUR STORY <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
          <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">↓</span>
          </div>
          <span className="text-[10px] text-white/70 tracking-widest uppercase">Scroll to explore</span>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] uppercase">OUR STORY</p>
              <div className="h-px w-12 bg-[#C5A26B]/30"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
              More Than<br />Materials.<br />We Build Legacy.
            </h3>
            <div className="space-y-6 text-gray-600 text-sm leading-relaxed mb-10">
              <p>
                Founded with a passion for architectural excellence, Vallavar GRC has grown into one of India's most trusted names in the design, manufacture and installation of premium GRC & GRP architectural elements. Our journey is built on innovation, quality and a relentless commitment to detail.
              </p>
              <p>
                From luxury villas to iconic commercial developments, from educational institutions to government projects, we partner with architects, builders and designers to create spaces that inspire generations.
              </p>
            </div>
            <button className="border border-gray-300 text-gray-900 px-8 py-4 text-xs font-bold tracking-widest hover:bg-[#C5A26B] hover:text-white hover:border-[#C5A26B] transition-all flex items-center gap-2 uppercase">
              OUR JOURNEY <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full shadow-2xl rounded-sm overflow-hidden">
            <Image
              src="/images/image21.png" // Place image_283fe2.jpg here
              alt="Vallavar GRC elegant columns and archways"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* --- CORE VALUES (BLACK BAR) --- */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[
            { icon: <Target size={32} strokeWidth={1} />, title: "OUR MISSION", desc: "To deliver innovative, high-quality GRC & GRP architectural solutions that add lasting value and beauty to every structure." },
            { icon: <Eye size={32} strokeWidth={1} />, title: "OUR VISION", desc: "To be the most preferred partner for architectural solutions, recognized for redefining skylines and elevating built environments." },
            { icon: <Gem size={32} strokeWidth={1} />, title: "OUR VALUES", desc: "• Integrity in Every Action\n• Excellence in Every Detail\n• Innovation in Every Solution\n• Commitment in Every Project" },
            { icon: <Users size={32} strokeWidth={1} />, title: "OUR PROMISE", desc: "We don't just deliver products. We deliver confidence, quality and timeless architectural excellence." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <div className="text-[#C5A26B] mb-6">{item.icon}</div>
              <h4 className="text-[#C5A26B] text-[11px] font-bold tracking-widest uppercase mb-4">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Combined Header and Content into a single grid layout to perfectly fill out horizontal and vertical space */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT & CENTER INTERFACE CONTENT BLOCK (7 Columns) */}
            <div className="col-span-1 lg:col-span-7 space-y-8 order-2 lg:order-1">

              {/* Main Section Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] uppercase">LEADERSHIP</p>
                  <div className="h-px w-12 bg-[#C5A26B]/30"></div>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                  The Minds Behind<br />Our Masterpieces.
                </h3>
              </div>

              {/* Vision Statement Body */}
              <div className="space-y-5 pt-4">
                <div className="w-12 h-px bg-[#C5A26B]" />
                <h4 className="text-xl sm:text-2xl font-serif text-gray-900 leading-snug tracking-wide">
                  Visionary Leadership,<br />
                  Uncompromised Structural Integrity.
                </h4>
                <p className="text-gray-500 text-mm leading-relaxed font-light max-w-2xl">
                  Under singular, focused governance, Vallalar GRC operates with a direct line of quality control and absolute dedication to craftsmanship. We merge international manufacturing specifications with deep structural expertise to deliver India’s finest GRC implementations.
                </p>
              </div>

              {/* Performance Metric Counters */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200/80 max-w-xl">
                <div>
                  <span className="block text-2xl font-serif text-[#C5A26B] font-bold">100%</span>
                  <span className="block text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">Direct Accountability</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif text-[#C5A26B] font-bold">Bespoke</span>
                  <span className="block text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">Casting Control</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR PROFILE CARD BLOCK (5 Columns) */}
            <div className="col-span-1 lg:col-span-5 group cursor-pointer order-1 lg:order-2 w-full max-w-md lg:max-w-none mx-auto lg:mt-6">
              {/* Aspect ratio locked frame to reveal the complete background office wall asset cleanly */}
              <div className="relative aspect-[4/3.8] w-full mb-4 overflow-hidden rounded-xl shadow-sm group-hover:shadow-md transition-all duration-500">
                <Image
                  src="/images/jeeva.png"
                  alt="Jeeva - Proprietor of Vallalar GRC"
                  fill
                  loading="lazy"
                  className="object-cover object-left-top rounded-xl  transition-all duration-700 ease-in-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none" />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-0.5 font-sans">Jeeva</h4>
                <p className="text-[#C5A26B] text-xs font-bold tracking-widest uppercase">Proprietor</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FACILITY SECTION --- */}
      <section className="bg-[#181818] py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-3">
            <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">STATE-OF-THE-ART FACILITY</p>
            <h3 className="text-3xl font-serif text-white leading-tight">
              Where Precision<br />Meets Perfection.
            </h3>
          </div>
          <div className="xl:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Advanced Manufacturing", img: "/api/placeholder/300/300" },
              { title: "Precision Molding", img: "/api/placeholder/300/300" },
              { title: "Quality Control Lab", img: "/api/placeholder/300/300" },
              { title: "Expert Craftsmanship", img: "/api/placeholder/300/300" }
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden bg-gray-800">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-[10px] font-bold tracking-wider uppercase">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS & STATS GRID --- */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* Certifications */}
          <div className="border border-gray-200 p-8">
            <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-8">CERTIFICATIONS</h4>
            <div className="flex flex-wrap gap-8 items-center justify-between">
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900 tracking-tighter">ISO</div>
                <div className="text-[10px] font-bold text-gray-900">9001:2015</div>
                <div className="text-[8px] text-gray-500 mt-1 uppercase">Quality Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900 tracking-tighter">ISO</div>
                <div className="text-[10px] font-bold text-gray-900">14001:2015</div>
                <div className="text-[8px] text-gray-500 mt-1 uppercase">Environmental Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900 tracking-tighter">ISO</div>
                <div className="text-[10px] font-bold text-gray-900">45001:2018</div>
                <div className="text-[8px] text-gray-500 mt-1 uppercase">Occupational Health & Safety</div>
              </div>
              <div className="opacity-50 grayscale hover:grayscale-0 transition-all flex items-center justify-center">
                <Award size={40} className="text-gray-800" />
              </div>
            </div>
          </div>

          {/* By The Numbers */}
          <div className="border border-gray-200 p-8">
            <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-8">BY THE NUMBERS</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
              {[
                { num: "15+", label: "Years of Experience" },
                { num: "500+", label: "Projects Completed" },
                { num: "100+", label: "Expert Professionals" },
                { num: "100%", label: "Quality Commitment" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center">
                  <div className="text-3xl font-serif text-[#C5A26B] mb-2">{stat.num}</div>
                  <div className="text-[9px] font-bold text-gray-600 uppercase max-w-[80px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-[#1C2421] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
              LET'S BUILD<br />SOMETHING <span className="text-[#C5A26B]">ICONIC</span><br />TOGETHER.
            </h3>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right">
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Partner with Vallavar GRC for premium architectural solutions that stand the test of time.
            </p>
            <button className="bg-[#C5A26B] text-white px-8 py-4 text-xs font-bold tracking-wider hover:bg-[#a68656] transition-colors flex items-center gap-2 uppercase">
              GET IN TOUCH <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}