import React, { memo } from 'react';
import { 
  MapPin, Phone, Mail, Download, ExternalLink
} from 'lucide-react';

const QUICK_LINKS = [
  'Home', 'About Us', 'Services', 'Projects', 
  'Industries', 'Our Process', 'Blog', 'Contact'
];

const SOLUTIONS_LINKS = [
  'GRC Facades', 'Columns', 'Cornices', 'Domes', 
  'Jaalis', 'Decorative Panels', 'GRP Products', 'Custom Elements'
];

// const SOCIAL_LINKS = [
//   { icon: Facebook, label: 'Facebook', href: '#' },
//   { icon: Instagram, label: 'Instagram', href: '#' },
//   { icon: Linkedin, label: 'Linkedin', href: '#' },
// ];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 sm:pt-20 pb-8 px-4 sm:px-6 text-white/70">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 mb-16">
        
        {/* Column 1: Brand Profile */}
        <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-2xl font-serif text-white tracking-widest flex items-center">
            <span className="text-[#C5A26B] text-3xl mr-1">V</span> 
            VALLALAR 
            <span className="text-xs ml-2 text-[#C5A26B] font-sans mt-2">GRC</span>
          </div>
          <p className="text-xs leading-relaxed max-w-xs text-white/60">
            Crafting landmark architecture with premium GRC & GRP solutions. Timeless beauty. Engineered to last. 
          </p>
          {/* <div className="flex gap-4 pt-2">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a 
                key={label}
                href={href} 
                aria-label={label} 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A26B] hover:text-white transition-colors duration-300 text-[#C5A26B]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div> */}
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-6 border-b border-white/10 sm:border-0 pb-2 sm:pb-0">QUICK LINKS</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:block sm:space-y-3 text-xs">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#C5A26B] transition-colors duration-300 block py-0.5">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Solutions List */}
        <div className="text-center sm:text-left">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-6 border-b border-white/10 sm:border-0 pb-2 sm:pb-0">SOLUTIONS</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:block sm:space-y-3 text-xs">
            {SOLUTIONS_LINKS.map((link) => (
              <li key={link}>
                <a href="#services" className="hover:text-[#C5A26B] transition-colors duration-300 block py-0.5">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & CTA Info */}
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-6 border-b border-white/10 sm:border-0 pb-2 sm:pb-0 w-full">CONTACT</h4>
          <ul className="space-y-4 text-xs mb-6 w-full max-w-sm sm:max-w-none">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3">
              <MapPin size={16} className="text-[#C5A26B] shrink-0 sm:mt-0.5" />
              <span className="leading-relaxed">
                No. 258/18, JEYENDERA SARASWATHI NAGAR,<br/>
                GUDUVANCHERY,<br/>
                CHENNAI - 603202, TAMIL NADU, INDIA<br/>
                <span className="text-white/40 italic text-[11px]">(Serving All Over Tamil Nadu, Andhra, Kerala)</span>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
              <Phone size={16} className="text-[#C5A26B] shrink-0" />
              <a href="tel:+919698216241" className="hover:text-[#C5A26B] transition-colors">+91 9698216241</a>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
              <Mail size={16} className="text-[#C5A26B] shrink-0" />
              <a href="mailto:info@vallalargrc.com" className="hover:text-[#C5A26B] transition-colors">info@vallalargrc.com</a>
            </li>
          </ul>
          <button className="bg-[#C5A26B] text-white px-6 py-3 text-[10px] font-bold tracking-wider hover:bg-[#a68656] transition-colors duration-300 flex items-center gap-2 uppercase w-full justify-center shadow-lg shadow-black/20 rounded-sm">
            DOWNLOAD BROCHURE <Download size={14} />
          </button>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] text-white/50 tracking-wider text-center lg:text-left">
        
        <p className="order-2 lg:order-1">© {currentYear} Vallalar GRC. All Rights Reserved.</p>
        
        {/* REDESIGNED AGENCY ATTRIBUTION BADGE */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <a 
            href="https://vertex-loop.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 px-4 py-2 border border-[#C5A26B]/30 bg-gradient-to-r from-[#C5A26B]/5 to-transparent rounded-full hover:border-[#C5A26B] hover:bg-[#C5A26B]/10 transition-all duration-500 shadow-[0_0_15px_rgba(197,162,107,0.05)] hover:shadow-[0_0_20px_rgba(197,162,107,0.2)]"
          >
            <span className="text-[11px] text-white/60 group-hover:text-white/80 transition-colors">
              Designed & Developed by
            </span>
            <span className="text-[#C5A26B] text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 group-hover:text-white transition-colors">
              Vertex Loop
              <ExternalLink size={12} className="text-[#C5A26B] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </span>
          </a>
        </div>

        <div className="flex gap-6 order-3">
          <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);