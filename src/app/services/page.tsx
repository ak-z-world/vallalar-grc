import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ArrowRight, Building2, Columns, Landmark, Box, 
  Grid3X3, Shapes, Hexagon, PenTool, 
  Gem, ShieldCheck, CloudRain, Settings, Leaf,
  MessageSquare, LayoutTemplate, Factory, ClipboardCheck, Truck, Building
} from 'lucide-react';

export const metadata = {
  title: 'Our Services & Products | Vallalar GRC - Chennai',
  description: 'Explore our premium GRC and GRP architectural solutions including facades, columns, cornices, domes, and jaalis in Chennai and Tamil Nadu.',
};

export default function ServicesPage() {
  return (
    <main className="font-sans text-gray-800 bg-[#F9F9F9] selection:bg-[#C5A26B] selection:text-white min-h-screen">
      
      {/* --- SEO / AEO / GEO HIDDEN TEXT FOR SCRAPERS & CRAWLERS --- */}
      <div className="sr-only">
        <h1>Premium GRC Services & Architectural Elements in Chennai</h1>
        <p>
          Discover the finest Glass Fiber Reinforced Concrete (GRC) and Glass Reinforced Plastic (GRP) solutions at Vallalar GRC. 
          We are recognized as the best GRC in Chennai and a leading manufacturer in Tamil Nadu. Our services include manufacturing and installing 
          chennai grc facades, GRC columns, elegant cornices, lightweight domes, intricate GRC jaalis, and custom decorative panels. 
          If you are searching for 'grc in chennai', 'grc chennai', or 'best grc in tamil nadu', Vallalar GRC is your ultimate destination 
          for high-performance, weather-resistant, and aesthetically superior architectural elements. Serving Chennai, Chennai, and all of South India.
        </p>
      </div>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-black overflow-hidden pt-20">
        <Image 
          src="/images/image21.png" // Using your image_299cff.jpg
          alt="Premium GRC architectural interior"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
              ARCHITECTURAL<br />ELEMENTS.<br />
              <span className="text-[#C5A26B]">CRAFTED TO INSPIRE.</span>
            </h2>
            <div className="w-16 h-px bg-[#C5A26B] mb-6"></div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Premium GRC & GRP architectural solutions that combine design freedom, structural performance and timeless beauty.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID SECTION --- */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C5A26B] text-xs font-bold tracking-[0.2em] mb-4 uppercase flex items-center justify-center gap-4 before:h-px before:w-8 before:bg-[#C5A26B]/50 after:h-px after:w-8 after:bg-[#C5A26B]/50">
              OUR SERVICES
            </p>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-wide">
              PREMIUM ARCHITECTURAL ELEMENTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'GRC FACADES', 
                desc: 'High-performance facades that elevate aesthetics and deliver long-lasting durability.', 
                icon: <Building2 size={20} strokeWidth={1.5} />,
                img: '/images/image29.png' 
              },
              { 
                title: 'COLUMNS', 
                desc: 'Elegant GRC columns that add grandeur and strength to every architectural style.', 
                icon: <Columns size={20} strokeWidth={1.5} />,
                img: '/images/image30.png' 
              },
              { 
                title: 'CORNICES', 
                desc: 'Precision-crafted cornices that bring refinement and character to structures.', 
                icon: <Landmark size={20} strokeWidth={1.5} />,
                img: '/images/image31.png' 
              },
              { 
                title: 'DOMES', 
                desc: 'Lightweight yet strong domes that create iconic silhouettes and timeless appeal.', 
                icon: <Box size={20} strokeWidth={1.5} />,
                img: '/images/image15.png' 
              },
              { 
                title: 'JAALIS', 
                desc: 'Intricate GRC jaalis that blend traditional craftsmanship with modern precision.', 
                icon: <Grid3X3 size={20} strokeWidth={1.5} />,
                img: '/images/image14.png' // Using your image_299d5a.jpg
              },
              { 
                title: 'DECORATIVE PANELS', 
                desc: 'Custom decorative panels that transform ordinary spaces into architectural masterpieces.', 
                icon: <Shapes size={20} strokeWidth={1.5} />,
                img: '/images/image13.png' 
              },
              { 
                title: 'GRP PRODUCTS', 
                desc: 'Advanced GRP solutions for lightweight, corrosion-resistant and high-performance needs.', 
                icon: <Hexagon size={20} strokeWidth={1.5} />,
                img: '/images/image18.png' 
              },
              { 
                title: 'CUSTOM ARCHITECTURAL ELEMENTS', 
                desc: 'Bespoke GRC & GRP elements designed to bring your unique vision to life.', 
                icon: <PenTool size={20} strokeWidth={1.5} />,
                img: '/images/image32.png' 
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden w-full">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark Icon Box */}
                  <div className="absolute top-0 left-0 bg-[#181818] text-white p-3">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-[13px] font-bold tracking-wider text-gray-900 mb-3 uppercase">{service.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  <div className="flex items-center justify-between text-[#C5A26B] font-bold text-[10px] tracking-widest uppercase">
                    <span>EXPLORE</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (DARK SECTION) --- */}
      <section className="bg-[#111111] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-6 items-center gap-10">
          
          <div className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-serif text-white leading-snug">
              WHY CHOOSE<br />VALLAVAR GRC?
            </h3>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x divide-white/10">
            {[
              { icon: <Gem size={24} />, title: "DESIGN FREEDOM", desc: "Endless design possibilities with custom-made architectural elements." },
              { icon: <ShieldCheck size={24} />, title: "LIGHTWEIGHT & STRONG", desc: "High strength-to-weight ratio for safer and more efficient construction." },
              { icon: <CloudRain size={24} />, title: "DURABLE & WEATHER RESISTANT", desc: "Engineered to withstand harsh weather and time." },
              { icon: <Settings size={24} />, title: "LOW MAINTENANCE", desc: "Long-lasting beauty with minimal upkeep and lower life-cycle cost." },
              { icon: <Leaf size={24} />, title: "SUSTAINABLE SOLUTION", desc: "Eco-friendly materials and processes for a better tomorrow." },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="text-[#C5A26B] mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-white text-[9px] font-bold tracking-wider uppercase mb-3 leading-tight min-h-[24px]">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-[10px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- OUR PROCESS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C5A26B] text-[10px] font-bold tracking-[0.2em] mb-4 uppercase flex items-center justify-center gap-4 before:h-px before:w-8 before:bg-[#C5A26B]/50 after:h-px after:w-8 after:bg-[#C5A26B]/50">
              OUR PROCESS
            </p>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900">
              FROM CONCEPT TO CREATION
            </h3>
          </div>

          <div className="relative mt-20">
            {/* Connecting line (Desktop) */}
            <div className="absolute top-[40px] left-[8%] right-[8%] h-[2px] bg-[#C5A26B]/20 hidden md:block z-0">
               {/* Small arrowheads on the line */}
               <div className="absolute left-[16.6%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#C5A26B]/50"><ArrowRight size={14}/></div>
               <div className="absolute left-[33.3%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#C5A26B]/50"><ArrowRight size={14}/></div>
               <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#C5A26B]/50"><ArrowRight size={14}/></div>
               <div className="absolute left-[66.6%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#C5A26B]/50"><ArrowRight size={14}/></div>
               <div className="absolute left-[83.3%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#C5A26B]/50"><ArrowRight size={14}/></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 md:gap-y-0 relative z-10">
              {[
                { num: '01', title: 'CONSULTATION', desc: 'Understanding your vision, requirements and site conditions.', icon: <MessageSquare size={24} strokeWidth={1.5} /> },
                { num: '02', title: 'DESIGN & ENGINEERING', desc: 'Creating detailed drawings and 3D models with precision.', icon: <LayoutTemplate size={24} strokeWidth={1.5} /> },
                { num: '03', title: 'MANUFACTURING', desc: 'Advanced molding and casting using premium materials.', icon: <Factory size={24} strokeWidth={1.5} /> },
                { num: '04', title: 'QUALITY CHECK', desc: 'Rigorous inspection to ensure flawless finish and strength.', icon: <ClipboardCheck size={24} strokeWidth={1.5} /> },
                { num: '05', title: 'DELIVERY & INSTALLATION', desc: 'Safe delivery and expert installation for a perfect finish.', icon: <Truck size={24} strokeWidth={1.5} /> },
                { num: '06', title: 'PROJECT COMPLETION', desc: 'On-time completion with a commitment to excellence.', icon: <Building size={24} strokeWidth={1.5} /> },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2 group">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 mb-4 group-hover:border-[#C5A26B] group-hover:text-[#C5A26B] transition-colors relative z-10">
                    {step.icon}
                    {/* Number Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#C5A26B] flex items-center justify-center text-white text-[9px] font-bold ring-4 ring-white">
                      {step.num}
                    </div>
                  </div>
                  <h4 className="text-gray-900 text-[10px] font-bold tracking-wider mb-3 uppercase mt-4">{step.title}</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed max-w-[140px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-[#111111] py-20 relative overflow-hidden">
        {/* Subtle background image overlay for the right side */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden md:block">
           <Image 
            src="/images/image21.png" 
            alt="Background pattern" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
              LET'S BUILD SOMETHING<br />
              <span className="text-[#C5A26B]">ICONIC</span> TOGETHER.
            </h3>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right border-l-0 md:border-l border-white/10 pl-0 md:pl-10">
             <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Partner with Vallalar GRC for premium architectural solutions that stand the test of time.
            </p>
            <button className="bg-[#C5A26B] text-white px-8 py-4 text-[10px] font-bold tracking-widest hover:bg-[#a68656] transition-colors flex items-center gap-2 uppercase">
              GET IN TOUCH <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}