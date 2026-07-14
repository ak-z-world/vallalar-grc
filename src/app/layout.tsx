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
  metadataBase: new URL("https://vallalar-grc.vercel.app"), // REPLACE WITH YOUR ACTUAL PRODUCTION URL
  title: {
    default: "Vallavar GRC - Premium GRC & GRP Architectural Solutions in Chennai",
    template: "%s | Vallavar GRC",
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
  authors: [{ name: "Vallavar GRC" }],
  creator: "Vallavar GRC",
  publisher: "Vallavar GRC",
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
    title: "Vallavar GRC - Premium Architectural Solutions",
    description: "Transforming visionary concepts into iconic structures with precision-engineered GRC & GRP elements in Chennai and Tamil Nadu.",
    url: "https://vallalar-grc.vercel.app",
    siteName: "Vallavar GRC",
    images: [
      {
        url: "/og-image.png", // Assuming this is in your public folder
        width: 1200,
        height: 630,
        alt: "Vallavar GRC - Premium Landmark Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Vallavar GRC - Premium Architectural Solutions",
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
    "name": "Vallavar GRC",
    "image": "https://vallalar-grc.vercel.app/og-image.png",
    "@id": "https://vallalar-grc.vercel.app",
    "url": "https://vallalar-grc.vercel.app",
    "telephone": "+919566665001",
    "email": "info@vallavargrc.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SF No. 259/9B, Chinnavedampatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641048",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0500, // Update with exact coordinates if necessary
      "longitude": 76.9800 // Update with exact coordinates if necessary
    },
    "areaServed": ["Chennai", "Coimbatore", "Tamil Nadu", "South India"],
    "description": "Leading manufacturer of Glass Fiber Reinforced Concrete (GRC) and GRP elements in Chennai and Tamil Nadu.",
    "sameAs": [
      // Add your actual social media links here
      "https://www.facebook.com/vallavargrc",
      "https://www.instagram.com/vallavargrc",
      "https://www.linkedin.com/company/vallavargrc"
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