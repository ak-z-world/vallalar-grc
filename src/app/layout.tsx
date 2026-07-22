import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// 2. Viewport & Device Metadata (Next.js 16 keeps theme/color-scheme here, separate from Metadata)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Keeps pinch-zoom available for accessibility
};

// -------------------------------------------------------------------------
// 3. SEO / AEO / GEO METADATA
//
// NOTE ON BRAND NAME: your brief refers to the company as "VALLALAR GRC",
// but every existing identifier in this file (title, JSON-LD, email
// info@vallavargrc.com, social handles) uses "Vallavar GRC". I've kept
// "Vallavar GRC" everywhere so nothing breaks — flag it if the correct
// legal/brand spelling is actually "Vallalar", and I'll do a global rename.
// -------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL("https://vallalargrc.in"), // ⚠ REPLACE with your production domain before launch

  title: {
    default: "Vallavar GRC | GRC & GRP Manufacturer, Coimbatore & Chennai",
    template: "%s | Vallavar GRC",
  },

  description:
    "Vallavar GRC manufactures Glass Fibre Reinforced Concrete (GRC) and GRP facades, columns, jaalis, cornices and domes for architects, builders and contractors across Tamil Nadu, Kerala, Karnataka and South India.",

  applicationName: "Vallavar GRC",
  generator: "Next.js",

  // --- KEYWORDS -----------------------------------------------------------
  // Google/Bing no longer use the keywords meta tag as a ranking signal, so
  // this list is kept for (a) internal content-planning reference and (b)
  // the small number of secondary engines/directories that still parse it.
  // Grouped by semantic cluster rather than dumped as one flat list.
  keywords: [
    // Brand / navigational
    "vallavar grc",
    "vallavar grc coimbatore",
    "vallavar grc chennai",

    // Core product / entity terms
    "grc",
    "glass reinforced concrete",
    "glass fiber reinforced concrete",
    "glass reinforced polymer",
    "grp",
    "grc manufacturer",
    "grc company",
    "grc supplier",
    "grc contractor",
    "grc panels",
    "grc facade",
    "architectural grc",
    "decorative grc",
    "grc cladding",
    "grc mouldings",
    "grc cornices",
    "grc columns",
    "grc jali",
    "grc domes",
    "grc pergolas",
    "custom grc",
    "premium grc",
    "grp manufacturer",
    "grp cladding",
    "grp facade",

    // Application / vertical entities
    "architectural facade manufacturer",
    "commercial facade company",
    "luxury facade manufacturer",
    "temple grc architecture",
    "villa facade design",
    "architectural precast concrete",
    "building facade company",
    "decorative facade panels",
    "hospital facade cladding",
    "hotel facade design",
    "mall facade cladding",
    "corporate building facade",
    "airport architecture cladding",
    "landscape grc elements",

    // Location + product matrix (South India)
    "grc in chennai",
    "grc company in chennai",
    "grc manufacturer in chennai",
    "grc in coimbatore",
    "grc manufacturer in coimbatore",
    "grc tamil nadu",
    "grc kerala",
    "grc bangalore",
    "grc karnataka",
    "grc hyderabad",
    "grc andhra pradesh",
    "grc madurai",
    "grc trichy",
    "grc salem",
    "grc erode",
    "grc tiruppur",
    "grc kochi",
    "grc trivandrum",
    "grc supplier south india",

    // Commercial-intent long tail
    "best grc company in chennai",
    "best grc manufacturer in tamil nadu",
    "premium grc company coimbatore",
    "grc facade manufacturer near me",
  ],

  authors: [{ name: "Vallavar GRC", url: "https://vallalargrc.in" }],
  creator: "Vallavar GRC",
  publisher: "Vallavar GRC",

  // Controls how much referrer info is sent when users click outbound links
  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Business/industry classification — used by some directories and by AI
  // crawlers doing entity disambiguation
  category: "Building Materials Manufacturing",
  classification: "Architectural GRC & GRP Manufacturing",

  alternates: {
    canonical: "/",
    languages: {
      // Placeholder for a future Tamil (ta-IN) translation of the site.
      // Remove this block until a /ta version actually exists — an
      // hreflang pointing at a non-existent page is worse than none.
      "en-IN": "/",
    },
  },

  // File-based icons (app/icon.png, app/apple-icon.png, app/favicon.ico) are
  // auto-detected by Next.js without needing this block. It's included
  // explicitly here so paths are guaranteed even if the file-based
  // convention isn't used — delete any line whose file doesn't exist yet.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  // Only include this if a public/manifest.json actually exists — an empty
  // 404'ing manifest link is a Lighthouse/PWA red flag, not a boost.
  manifest: "/manifest.json",

  // Search-console style ownership verification. These do nothing until
  // you paste your real verification codes in — fill in or delete.
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    yandex: "YANDEX_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "BING_WEBMASTER_VERIFICATION_CODE",
    },
  },

  openGraph: {
    title: "Vallavar GRC | Premium Architectural GRC & GRP Solutions",
    description:
      "Precision-engineered GRC & GRP facades, columns, jaalis, cornices and domes — manufactured in Coimbatore, delivered across Chennai, Tamil Nadu and South India.",
    url: "https://vallalargrc.in",
    siteName: "Vallavar GRC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vallavar GRC — Architectural GRC & GRP Facade Manufacturing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vallavar GRC | Premium Architectural GRC & GRP Solutions",
    description:
      "Transforming visionary concepts into iconic structures with precision-engineered GRC & GRP elements.",
    images: ["/og-image.png"],
    site: "@vallavargrc", // ⚠ replace with real handle or remove
    creator: "@vallavargrc", // ⚠ replace with real handle or remove
  },

  // Arbitrary <meta name="..." content="..."> tags. This is the correct,
  // honest place for geo hints — there is no separate official "AI
  // metadata" tag standard that ChatGPT/Gemini/Claude/Perplexity read;
  // what actually influences AI-answer citation is (a) the JSON-LD below,
  // (b) robots.txt allowing their crawlers (see robots.ts), and (c) clean,
  // factual page content. Geo meta tags are semi-standard and still used
  // by some local-search tools, so they're worth keeping.
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0500;76.9800",
    ICBM: "11.0500, 76.9800",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ---------------------------------------------------------------------
  // 4. Structured Data (JSON-LD)
  //
  // This is the highest-leverage part of the whole file for AI Overviews /
  // ChatGPT / Perplexity / Gemini citation — far more than any meta tag —
  // because it gives a machine-readable, unambiguous entity description.
  // Expanded with knowsAbout (topical/entity authority) and an offer
  // catalog. Deliberately NOT adding aggregateRating/review schema: you
  // have no real review data, and fabricated ratings violate Google's
  // structured data guidelines and can trigger a manual action.
  // ---------------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    name: "Vallavar GRC",
    alternateName: "Vallavar Glass Reinforced Concrete",
    image: "https://vallalargrc.in/og-image.png",
    "@id": "https://vallalargrc.in/#organization",
    url: "https://vallalargrc.in",
    telephone: "+919566665001",
    email: "info@vallavargrc.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SF No. 259/9B, Chinnavedampatti",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641048",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.05, // ⚠ update with exact coordinates
      longitude: 76.98, // ⚠ update with exact coordinates
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Coimbatore" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Madurai" },
      "South India",
    ],
    description:
      "Vallavar GRC manufactures Glass Fibre Reinforced Concrete (GRC) and GRP architectural elements — facades, columns, jaalis, cornices and domes — for commercial, residential and institutional projects across South India.",
    knowsAbout: [
      "Glass Reinforced Concrete",
      "Glass Fibre Reinforced Concrete",
      "Glass Reinforced Polymer",
      "Architectural Facade Design",
      "Architectural Cladding",
      "Decorative Concrete Moulding",
      "Temple Architecture",
      "Precast Concrete Manufacturing",
    ],
    sameAs: [
      "https://www.facebook.com/vallavargrc",
      "https://www.instagram.com/vallavargrc",
      "https://www.linkedin.com/company/vallavargrc",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GRC & GRP Architectural Products",
      itemListElement: [
        "GRC Facades",
        "GRC Columns",
        "GRC Jaalis",
        "GRC Cornices & Mouldings",
        "GRC Domes",
        "GRC Pergolas",
        "GRP Cladding",
      ].map((productName) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: productName },
      })),
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Inject JSON-LD Schema into the <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}