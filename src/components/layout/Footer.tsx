import React, { memo } from "react";
import { MapPin, Phone, Mail, Download, ExternalLink } from "lucide-react";

const QUICK_LINKS = [
  "Home",
  "About Us",
  "Services",
  "Projects",
  "Industries",
  "Our Process",
  "Blog",
  "Contact",
] as const;

// Custom route mapping for special URLs
const ROUTE_MAP: Record<string, string> = {
  Home: "/",
  "About Us": "/about",
  "Our Process": "/manufacturing",
};

const MAP_URL =
  "https://www.google.com/maps/place/12%C2%B050'55.2%22N+80%C2%B004'37.5%22E/@12.8486777,80.0745025,17z/";
const EMBED_MAP_URL =
  "https://maps.google.com/maps?q=12.8486667,80.0770833&z=15&output=embed";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getHref = (link: string): string => {
    if (ROUTE_MAP[link]) {
      return ROUTE_MAP[link];
    }
    return `/${link.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <footer className="bg-black pt-16 sm:pt-20 pb-8 px-4 sm:px-6 md:px-12 text-white/70 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-16">
        {/* Column 1: Brand Profile & Map Preview */}
        <div className="space-y-4 sm:space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-serif text-white tracking-widest flex items-center justify-center md:justify-start">
            <span className="text-[#C5A26B] text-3xl mr-1">V</span>
            VALLALAR
            <span className="text-xs ml-2 text-[#C5A26B] font-sans mt-2">
              GRC
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm text-white/60">
            Crafting landmark architecture with premium GRC & GRP solutions.
            Timeless beauty. Engineered to last.
          </p>

          {/* Embedded Mini Map Widget */}
          <div className="w-full max-w-sm mt-2 rounded-lg overflow-hidden border border-white/10 relative group bg-neutral-900 shadow-md">
            <iframe
              title="Vallalar GRC Location"
              src={EMBED_MAP_URL}
              className="w-full h-32 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-black/80 hover:bg-[#C5A26B] text-white text-[10px] px-2.5 py-1 rounded flex items-center gap-1 transition-colors duration-300 backdrop-blur-sm border border-white/10">
              <span>View Location</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-6 border-b border-white/10 md:border-0 pb-2 md:pb-0 w-full max-w-xs md:max-w-none">
            QUICK LINKS
          </h4>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 w-full max-w-xs md:max-w-none text-xs">
            {QUICK_LINKS.map((link) => (
              <li key={link} className="text-left md:text-left">
                <a
                  href={getHref(link)}
                  className="hover:text-[#C5A26B] transition-colors duration-300 block py-0.5">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact & CTA Info */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start md:col-span-2 lg:col-span-1">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4 sm:mb-6 border-b border-white/10 md:border-0 pb-2 md:pb-0 w-full max-w-xs md:max-w-none">
            CONTACT
          </h4>
          <ul className="space-y-4 text-xs mb-6 w-full max-w-xs md:max-w-none text-left">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3">
              <MapPin size={16} className="text-[#C5A26B] shrink-0 sm:mt-0.5" />
              <span className="leading-relaxed text-center sm:text-left">
                No. 258/18, JEYENDERA SARASWATHI NAGAR,
                <br />
                GUDUVANCHERY,
                <br />
                CHENNAI - 603202, TAMIL NADU, INDIA
                <br />
                <span className="text-white/40 italic text-[11px] block mt-1">
                  (Serving All Over Tamil Nadu, Andhra, Kerala)
                </span>
              </span>
            </li>
            <li className="flex flex-row items-center justify-center md:justify-start gap-3">
              <Phone size={16} className="text-[#C5A26B] shrink-0" />
              <a
                href="tel:+919698216241"
                className="hover:text-[#C5A26B] transition-colors">
                +91 9698216241
              </a>
            </li>
            <li className="flex flex-row items-center justify-center md:justify-start gap-3">
              <Mail size={16} className="text-[#C5A26B] shrink-0" />
              <a
                href="mailto:info@vallalargrc.com"
                className="hover:text-[#C5A26B] transition-colors">
                info@vallalargrc.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] text-white/50 tracking-wider text-center lg:text-left">
        <p className="order-3 lg:order-1">
          © {currentYear} Vallalar GRC. All Rights Reserved.
        </p>

        {/* AGENCY ATTRIBUTION BADGE */}
        <div className="order-1 lg:order-2 flex items-center justify-center w-full lg:w-auto">
          <a
            href="https://vertex-loop.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 border border-[#C5A26B]/30 bg-gradient-to-r from-[#C5A26B]/5 to-transparent rounded-full hover:border-[#C5A26B] hover:bg-[#C5A26B]/10 transition-all duration-500 shadow-[0_0_15px_rgba(197,162,107,0.05)] hover:shadow-[0_0_20px_rgba(197,162,107,0.2)] whitespace-nowrap">
            <span className="text-[11px] text-white/60 group-hover:text-white/80 transition-colors">
              Designed & Developed by
            </span>
            <span className="text-[#C5A26B] text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 group-hover:text-white transition-colors">
              Vertex Loop
              <ExternalLink
                size={12}
                className="text-[#C5A26B] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
              />
            </span>
          </a>
        </div>

        <div className="flex gap-6 order-2 lg:order-3 justify-center">
          <a
            href="#privacy"
            className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
