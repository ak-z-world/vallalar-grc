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

// 2. Viewport Settings for Mobile & PWA Optimization
export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Maintains accessibility for zooming
};

// 3. AEO, GEO, and SEO Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://vallalargrc.in"), // REPLACE WITH YOUR ACTUAL PRODUCTION URL
  title: {
    default: "Vallalar GRC - Premium GRC & GRP Architectural Solutions in Chennai",
    template: "%s | Vallalar GRC",
  },
  description: "Leading manufacturer of Glass Fiber Reinforced Concrete (GRC) and GRP elements in Chennai. We deliver premium facades, columns, domes, and jaalis across Tamil Nadu and South India.",
  keywords: [
    "chennai grc", 
    "grc in chennai", 
    "best grc in chennai", 
    "best grc in tamil nadu", 
    "grc chennai",
    "grc manufacturer chennai",
    "glass fiber reinforced concrete tamil nadu",
    "architectural grc columns",
    "grc facades india"
  ],
  authors: [{ name: "Vallalar GRC" }],
  creator: "Vallalar GRC",
  publisher: "Vallalar GRC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  // Open Graph for Facebook/LinkedIn and AI Scrapers
  openGraph: {
    title: "Vallalar GRC - Premium Architectural Solutions",
    description: "Transforming visionary concepts into iconic structures with precision-engineered GRC & GRP elements in Chennai and Tamil Nadu.",
    url: "https://vallalargrc.in",
    siteName: "Vallalar GRC",
    images: [
      {
        url: "/og-image.png", // Assuming this is in your public folder
        width: 1200,
        height: 630,
        alt: "Vallalar GRC - Premium Landmark Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Vallalar GRC - Premium Architectural Solutions",
    description: "Transforming visionary concepts into iconic structures with precision-engineered GRC & GRP elements.",
    images: ["/og-image.png"],
  },
  // Geographic targeting for Local SEO
  category: "Manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 4. Structured Data (JSON-LD) for Google AI Overviews and Rich Snippets
  // This explicitly tells search engines exactly who you are, where you are, and what you do.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "name": "Vallalar GRC",
    "image": "https://vallalargrc.in/og-image.png",
    "@id": "https://vallalargrc.in",
    "url": "https://vallalargrc.in",
    "telephone": "+919566665001",
    "email": "info@vallalargrc.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SF No. 259/9B, Chinnavedampatti",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641048",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0500, // Update with exact coordinates if necessary
      "longitude": 76.9800 // Update with exact coordinates if necessary
    },
    "areaServed": ["Chennai", "Chennai", "Tamil Nadu", "South India"],
    "description": "Leading manufacturer of Glass Fiber Reinforced Concrete (GRC) and GRP elements in Chennai and Tamil Nadu.",
    "sameAs": [
      // Add your actual social media links here
      "https://www.facebook.com/vallalargrc",
      "https://www.instagram.com/vallalargrc",
      "https://www.linkedin.com/company/vallalargrc"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "GRC Facades"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "GRC Columns"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "GRC Jaalis"
        }
      }
    ]
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
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}