import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ArrowRight, Home, Building2, GraduationCap, 
  Stethoscope, Hotel, Landmark, Church, ShoppingBag 
} from 'lucide-react';

export const metadata = {
  title: 'Industries We Serve | Vallavar GRC - Premium Architectural Solutions',
  description: 'Discover how Vallavar GRC delivers engineered Glass Fiber Reinforced Concrete (GRC) and GRP elements across diverse industry sectors in Chennai and Tamil Nadu.',
};

// Data definition for cleaner rendering loops and optimized virtual DOM updates
const INDUSTRIES_DATA = [
  {
    title: "Luxury Villas",
    desc: "Bespoke architectural elements that elevate luxury living with timeless elegance and flawless detailing.",
    icon: <Home size={18} className="text-[#C5A26B]" />,
    img: "/images/ind1.svg" // Reusing available real-world building/interior column asset
  },
  {
    title: "Commercial Buildings",
    desc: "High-performance façade and decorative solutions that create iconic commercial spaces.",
    icon: <Building2 size={18} className="text-[#C5A26B]" />,
    img: "/images/ind2.svg" // Mapping to image_2a8e53.jpg featuring modern commercial screen facade
  },
  {
    title: "Educational Institutions",
    desc: "Durable and elegant architectural elements that inspire learning environments for generations.",
    icon: <GraduationCap size={18} className="text-[#C5A26B]" />,
    img: "/images/ind6.svg"
  },
  {
    title: "Hospitals",
    desc: "Hygienic, durable, and aesthetically pleasing solutions for modern healthcare facilities.",
    icon: <Stethoscope size={18} className="text-[#C5A26B]" />,
    img: "/images/ind4.svg"
  },
  {
    title: "Hotels",
    desc: "Premium architectural designs that create memorable guest experiences and stand out.",
    icon: <Hotel size={18} className="text-[#C5A26B]" />,
    img: "/images/ind5.svg"
  },
  {
    title: "Government Projects",
    desc: "Reliable, long-lasting, and majestic solutions for public infrastructure and civic spaces.",
    icon: <Landmark size={18} className="text-[#C5A26B]" />,
    img: "/images/ind6.svg"
  },
  {
    title: "Religious Buildings",
    desc: "Intricate and spiritual architectural elements crafted with precision and devotion.",
    icon: <Church size={18} className="text-[#C5A26B]" />,
    img: "/images/ind7.svg" // Mapping to intricate screen/jaali asset
  },
  {
    title: "Shopping Complexes",
    desc: "Beautiful, durable, and lightweight solutions that enhance retail and visitor experiences.",
    icon: <ShoppingBag size={18} className="text-[#C5A26B]" />,
    img: "/images/ind8.svg"
  }
];

export default function IndustriesPage() {
  return (
    <main className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen">
      
      {/* --- CRAWLER, SCRAPER, GEO & SEO HIDDEN KEYWORD DICTIONARY --- */}
      <section className="sr-only" aria-hidden="true">
        <h1>Industrial GRC Cladding & Architectural Applications in Tamil Nadu</h1>
        <p>
          Vallavar GRC engineered manufacturing frameworks supply high-durability infrastructure components for corporate, civic, residential, and institutional sites. 
          As the leading benchmark for the best grc in chennai and premium glass fiber reinforced concrete developments, we engineer materials optimized for environmental stress. 
          Our specialized operations cover: chennai grc custom molding projects, grc in chennai commercial builds, local grc chennai distributions, 
          and the absolute best grc in tamil nadu industrial catalog specifications. 
          We serve structural demands across Chennai structural hubs, ECR residential zones, OMR technical corridors, Guindy commercial parks, Coimbatore manufacturing plants, Madurai municipal zones, and specialized infrastructure arrays in South India.
        </p>
      </section>

      <Navbar />

      {/* --- HERO BANNER SECTION --- */}
      <header className="relative w-full h-[65vh] min-h-[550px] flex items-center bg-[#111] overflow-hidden pt-24">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/image24.png" // Utilizing image_2a8e53.jpg showing elite glass-and-GRC modern facade
            alt="Vallavar GRC high-performance modern industrial building exterior with architectural lattice screening"
            fill
            priority
            className="object-cover opacity-45 transform scale-102"
            sizes="100vw"
          />
          {/* Linear gradient mapping ensures clean legibility over complex high-resolution background assets */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-black/40 to-black/70 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.25em] mb-4 uppercase">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6 tracking-wide">
              Building<br />Excellence Across<br />
              <span className="text-[#C5A26B]">Every Industry.</span>
            </h2>
            <div className="w-16 h-px bg-[#C5A26B] mb-6" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md font-light">
              Our customized GRC & GRP architectural solutions cater to diverse industries, delivering timeless beauty, structural durability, and unmatched performance.
            </p>
          </div>
        </div>
      </header>

      {/* --- INDUSTRIES GRID SECTION --- */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {INDUSTRIES_DATA.map((industry, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden transition-all duration-400 flex flex-col h-full"
              >
                {/* Image Container block with optimized scaling constraints */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                  <Image 
                    src={industry.img} 
                    alt={`${industry.title} architectural elements execution`}
                    fill
                    loading="lazy"
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Information Metadata Content Wrapper */}
                <div className="p-6 flex flex-col flex-grow bg-white border-t border-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#FAF9F6] flex items-center justify-center border border-gray-100 group-hover:bg-[#C5A26B]/10 group-hover:border-[#C5A26B]/20 transition-colors duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase font-sans">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                    {industry.desc}
                  </p>

                  <div className="flex items-center justify-end text-gray-400 group-hover:text-[#C5A26B] transition-colors duration-300">
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- ASYMMETRICAL PRE-FOOTER STRIP --- */}
      <section className="bg-[#141414] py-16 border-t border-white/5 relative overflow-hidden">
        {/* Subtle geometric structural mesh outline vector layout */}
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-5 pointer-events-none hidden lg:block">
          <Image 
            src="/images/image21.png" 
            alt="Interior alignment wireframe visual asset" 
            fill 
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
            
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight mb-2">
                Let's create spaces that<br />
                <span className="text-[#C5A26B] font-sans italic font-normal tracking-wide">inspire.</span> Together.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10 xl:pl-8 border-l-0 lg:border-l border-white/10">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Partner with Vallavar GRC for innovative architectural solutions tailored directly to your structural industry demands, zoning laws, and spatial vision.
              </p>
              <button className="group border border-[#C5A26B] hover:bg-[#C5A26B] text-[#C5A26B] hover:text-white px-6 sm:px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 uppercase rounded-xs whitespace-nowrap shrink-0">
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}