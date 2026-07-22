import type { MetadataRoute } from "next";

// ⚠ Keep this in sync with metadataBase in layout.tsx (same production domain).
const BASE_URL = "https://vallalargrc.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/manufacturing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // -------------------------------------------------------------------
  // FUTURE EXTENSIBILITY — wire these up once the corresponding dynamic
  // routes/CMS content exist. Left commented rather than faked, since a
  // sitemap entry for a URL that 404s actively hurts crawl trust.
  // -------------------------------------------------------------------

  // Individual blog posts, e.g. app/blog/[slug]/page.tsx
  // const posts = await getAllBlogPosts();
  // const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // }));

  // Individual project case studies, e.g. app/projects/[slug]/page.tsx
  // const projects = await getAllProjects();
  // const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
  //   url: `${BASE_URL}/projects/${project.slug}`,
  //   lastModified: project.updatedAt,
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  // Individual service pages, e.g. app/services/[slug]/page.tsx
  // const services = await getAllServices();
  // const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
  //   url: `${BASE_URL}/services/${service.slug}`,
  //   lastModified: service.updatedAt,
  //   changeFrequency: "monthly",
  //   priority: 0.75,
  // }));

  // Programmatic city landing pages, e.g. app/locations/[city]/page.tsx
  // Only add once each city page has genuinely distinct, non-duplicate
  // content — thin templated "GRC in {city}" pages with the same body
  // text are a doorway-page pattern Google actively demotes.
  // const cities = ["chennai", "coimbatore", "bangalore", "kochi", "hyderabad"];
  // const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
  //   url: `${BASE_URL}/locations/${city}`,
  //   lastModified,
  //   changeFrequency: "monthly",
  //   priority: 0.65,
  // }));

  return [
    ...staticRoutes,
    // ...blogRoutes,
    // ...projectRoutes,
    // ...serviceRoutes,
    // ...cityRoutes,
  ];
}