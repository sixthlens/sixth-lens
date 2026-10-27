import type { Metadata } from "next";

export function arabicMetadata(title: string, description: string, path: string, keywords: string[]): Metadata {
  const canonical = `/ar${path === "/" ? "/" : path}`;
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical, languages: { "ar-QA": canonical, "en": path, "x-default": path } },
    openGraph: { title, description, url: canonical, locale: "ar_QA", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: ["/images/sixth-lens-hero.png"] },
  };
}
