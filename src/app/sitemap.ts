import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects, lenses } from "@/data/home";

export const dynamic = "force-static";
const contentRoutes = ["about", "industries", "process", "consulting", "security-compliance", "custom-solutions", "portfolio", "services", "startups", "mvp-development", "hire-a-team", "contact", "privacy", "terms"];
const arabicRoutes = ["about", "industries", "process", "consulting", "security-compliance", "custom-solutions", "portfolio", "services", "startups", "mvp-development", "hire-a-team", "e-invoicing-qatar", "contact", "privacy", "terms"];

const altLanguages = (enUrl: string, arUrl: string) => ({ languages: { en: enUrl, "ar-QA": arUrl, "x-default": enUrl } });

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: altLanguages(siteConfig.url, `${siteConfig.url}/ar/`) },
    { url: `${siteConfig.url}/e-invoicing-qatar/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8, alternates: altLanguages(`${siteConfig.url}/e-invoicing-qatar/`, `${siteConfig.url}/ar/e-invoicing-qatar/`) },
    ...contentRoutes.map((route) => ({ url: `${siteConfig.url}/${route}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8, alternates: altLanguages(`${siteConfig.url}/${route}/`, `${siteConfig.url}/ar/${route}/`) })),
    { url: `${siteConfig.url}/ar/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: altLanguages(siteConfig.url, `${siteConfig.url}/ar/`) },
    ...arabicRoutes.map((route) => ({ url: `${siteConfig.url}/ar/${route}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8, alternates: altLanguages(`${siteConfig.url}/${route}/`, `${siteConfig.url}/ar/${route}/`) })),
    ...lenses.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8, alternates: altLanguages(`${siteConfig.url}/services/${service.slug}/`, `${siteConfig.url}/ar/services/${service.slug}/`) })),
    ...lenses.map((service) => ({ url: `${siteConfig.url}/ar/services/${service.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8, alternates: altLanguages(`${siteConfig.url}/services/${service.slug}/`, `${siteConfig.url}/ar/services/${service.slug}/`) })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/work/${project.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7, alternates: altLanguages(`${siteConfig.url}/work/${project.slug}/`, `${siteConfig.url}/ar/work/${project.slug}/`) })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/ar/work/${project.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7, alternates: altLanguages(`${siteConfig.url}/work/${project.slug}/`, `${siteConfig.url}/ar/work/${project.slug}/`) })),
  ];
}
