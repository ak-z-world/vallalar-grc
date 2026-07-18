import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import { 
  Home, 
  LayoutGrid, 
  Building2, 
  Columns, 
  Ruler, 
  Compass, 
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Page Not Found | Vallalar GRC',
  description: "Looks like this page wasn't built. The page you're looking for may have been moved, renamed, or never existed.",
};

export default function NotFound() {
  return (
    <div className="font-sans text-gray-800 bg-[#FAF9F6] selection:bg-[#C5A26B] selection:text-white min-h-screen flex flex-col justify-between overflow-x-hidden relative">
      
      <Navbar />

      {/* --- MAIN DISPLAY CONTAINER --- */}
      <div className="relative flex-grow flex items-center pt-28 lg:pt-20 pb-16">
        {/* Asymmetrical Background Layout */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-12 pointer-events-none">
          <div className="hidden lg:block lg:col-span-4 bg-[#FAF9F6] z-10" />
          <div className="col-span-1 lg:col-span-8 relative h-full w-full opacity-15 lg:opacity-100">
            <Image 
              src="/images/image25.png" // Save your image_2b0df5.jpg background asset inside public/images/
              alt="Vallalar GRC premier architectural majestic structure layout backdrop" 
              fill
              priority
              className="object-cover object-right-bottom mix-blend-multiply lg:mix-blend-normal"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            {/* Smooth Vignette Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent hidden lg:block z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent lg:hidden z-10" />
          </div>
        </div>

        {/* Content Interface Overlay */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column Block */}
          <div className="lg:col-span-6 max-w-xl lg:max-w-2xl">
            
            {/* Elegant Superimposed 404 Numerical Header */}
            <div className="relative mb-2 select-none">
              <h1 className="text-[7rem] sm:text-[10rem] lg:text-[13rem] font-serif font-normal leading-none tracking-tighter text-gray-900 flex items-center">
                4
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#C5A26B] to-[#AA7C11] font-light px-1">0</span>
                4
              </h1>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4 tracking-wide">
              Looks like this page<br />wasn’t built.
            </h2>
            <div className="w-12 h-px bg-[#C5A26B] mb-6" />
            
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-2 max-w-md font-light">
              The page you’re looking for may have been moved, renamed, or never existed.
            </p>
            <p className="text-gray-900 text-xs sm:text-sm font-bold tracking-wide uppercase mb-8">
              Let’s build something amazing together.
            </p>

            {/* CTA Control Array */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2.5 bg-[#C5A26B] hover:bg-[#a68656] text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xs shadow-md shadow-black/5"
              >
                <Home size={14} />
                <span>RETURN HOME</span>
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-xs shadow-xs"
              >
                <LayoutGrid size={14} className="text-[#C5A26B]" />
                <span>EXPLORE PROJECTS</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Feature Cards Column Matrix */}
          <div className="lg:col-span-6 lg:mt-32 w-full flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md lg:max-w-lg">
              {[
                { title: "Premium GRC Solutions", icon: <Building2 size={20} strokeWidth={1.5} /> },
                { title: "Timeless Design", icon: <Columns size={20} strokeWidth={1.5} /> },
                { title: "Engineered Excellence", icon: <Ruler size={20} strokeWidth={1.5} /> },
                { title: "Built to Inspire", icon: <Compass size={20} strokeWidth={1.5} /> }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/80 backdrop-blur-md border border-gray-150/60 p-5 sm:p-6 rounded-md hover:border-[#C5A26B]/40 hover:bg-white transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.02)] group flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#C5A26B] group-hover:border-[#C5A26B]/20 transition-all duration-300 mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[11px] sm:text-xs tracking-wider uppercase leading-snug max-w-[120px] lg:max-w-none">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM UNIFIED FOOTER UTILITY STRIP --- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 relative z-20">
        <div className="bg-white border border-gray-150/80 p-6 sm:p-8 rounded-sm shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          {/* Quote Block */}
          <div className="flex items-start gap-3 max-w-md text-center lg:text-left">
            <span className="text-[#C5A26B] font-serif text-4xl leading-none select-none">“</span>
            <p className="text-gray-800 text-sm font-serif italic leading-relaxed pt-1">
              Great architecture happens when vision meets craftsmanship.
            </p>
          </div>

          {/* Help Line Module */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-150 pt-6 lg:pt-0 lg:pl-10 text-center sm:text-left">
            <div>
              <h4 className="text-gray-900 font-serif font-medium text-base mb-0.5">Need help?</h4>
              <p className="text-gray-400 text-xs font-light">We’re just a click away.</p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#C5A26B] hover:bg-[#a68656] text-white text-[10px] font-bold tracking-widest px-5 py-3 rounded-xs uppercase transition-colors whitespace-nowrap shrink-0"
            >
              <span>CONTACT US</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Social Network Array */}
          <div className="flex flex-col items-center lg:items-end gap-2 shrink-0">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Follow Us</span>
            <div className="flex gap-2">
              {[
                { label: "Linkedin" },
                { label: "Instagram" },
                { label: "Facebook" },
                { label: "Youtube" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  aria-label={social.label}
                  className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#C5A26B] hover:border-[#C5A26B]/30 hover:bg-white transition-all duration-300"
                >
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}