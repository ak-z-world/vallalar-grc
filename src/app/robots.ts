import type { MetadataRoute } from "next";

// ⚠ Keep this in sync with metadataBase in layout.tsx (same production domain).
const BASE_URL = "https://vallalargrc.in";

// Paths that shouldn't be crawled/indexed: framework internals, API routes,
// and anything not meant to rank. Adjust if your app has other private
// routes (e.g. /admin, /dashboard).
const DISALLOWED_PATHS = ["/api/", "/_next/", "/admin/", "/*.json$"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for every crawler not listed explicitly below.
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },

      // ---------------- Traditional search engines ----------------
      { userAgent: "Googlebot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "AdsBot-Google", allow: "/" },
      { userAgent: "Bingbot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "DuckDuckBot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "Applebot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "Yandex", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "Baiduspider", allow: "/", disallow: DISALLOWED_PATHS },

      // ---------------- Social preview crawlers ----------------
      { userAgent: "FacebookExternalHit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },

      // ---------------- AI search / answer-engine crawlers ----------------
      // Allowed on purpose: the brief is to be citable in AI Overviews,
      // ChatGPT, Gemini, Claude and Perplexity answers, which requires
      // these to be able to fetch the site. Training-only crawlers are
      // included too — blocking them stops model training, not citation,
      // so there's no visibility upside to disallowing them here.
      { userAgent: "GPTBot", allow: "/", disallow: DISALLOWED_PATHS }, // OpenAI training
      { userAgent: "OAI-SearchBot", allow: "/" }, // OpenAI search/citation
      { userAgent: "ChatGPT-User", allow: "/" }, // OpenAI live user fetch
      { userAgent: "ClaudeBot", allow: "/", disallow: DISALLOWED_PATHS }, // Anthropic training
      { userAgent: "Claude-SearchBot", allow: "/" }, // Anthropic search/citation
      { userAgent: "Claude-User", allow: "/" }, // Anthropic live user fetch
      { userAgent: "PerplexityBot", allow: "/" }, // Perplexity search/citation
      { userAgent: "Perplexity-User", allow: "/" }, // Perplexity live user fetch
      { userAgent: "Google-Extended", allow: "/" }, // Gemini / AI Overviews training opt-in
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence training opt-in
      { userAgent: "Amazonbot", allow: "/", disallow: DISALLOWED_PATHS },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" },
      { userAgent: "CCBot", allow: "/", disallow: DISALLOWED_PATHS }, // Common Crawl (feeds many LLMs)
      { userAgent: "Diffbot", allow: "/" },
      { userAgent: "PetalBot", allow: "/", disallow: DISALLOWED_PATHS },

      // Bytespider has a documented history of ignoring robots.txt directives,
      // so this entry is a formality, not a real control — enforce any
      // actual blocking at the CDN/edge layer if you decide you need it.
      { userAgent: "Bytespider", allow: "/", disallow: DISALLOWED_PATHS },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}