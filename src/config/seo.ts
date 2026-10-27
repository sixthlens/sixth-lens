import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: path, "ar-QA": `/ar${path}`, "x-default": path } },
    openGraph: { title, description, url: path, type: "website" },
  };
}
