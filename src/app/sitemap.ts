import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects, lenses } from "@/data/home";

export const dynamic = "force-static";
const contentRoutes = ["about", "industries", "process", "consulting", "security-compliance", "custom-solutions", "portfolio", "services", "startups", "mvp-development", "hire-a-team"];
const arabicRoutes = ["about", "industries", "process", "consulting", "security-compliance", "custom-solutions", "portfolio", "services", "startups", "mvp-development", "hire-a-team", "e-invoicing-qatar"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/e-invoicing-qatar/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...contentRoutes.map((route) => ({ url: `${siteConfig.url}/${route}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${siteConfig.url}/ar/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...arabicRoutes.map((route) => ({ url: `${siteConfig.url}/ar/${route}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...lenses.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...lenses.map((service) => ({ url: `${siteConfig.url}/ar/services/${service.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/work/${project.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/ar/work/${project.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
