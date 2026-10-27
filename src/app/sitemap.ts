import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects, lenses } from "@/data/home";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/e-invoicing-qatar/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...lenses.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
