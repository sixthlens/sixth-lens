import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Mobile App & Software Development | Qatar, GCC & Beyond | Sixth Lens", template: "%s | Sixth Lens" },
  description: "Sixth Lens is a Doha-based digital studio serving Qatar, GCC and international clients with mobile app development, web, CRM, e-invoicing, cloud and AI solutions.",
  keywords: ["mobile app development agency Qatar", "mobile application development Qatar", "software development company Qatar", "app development company Doha", "web development agency Qatar", "digital transformation Qatar", "e-invoicing solutions Qatar", "CRM implementation Qatar", "cloud solutions Qatar", "mobile app development GCC", "software development company GCC", "digital agency international", "mobile app development international"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "technology",
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: { canonical: "/", languages: { en: "/", "ar-QA": "/ar/", "x-default": "/" } },
  openGraph: { type: "website", locale: "en_QA", url: "/", siteName: siteConfig.name, title: "Sixth Lens | Your business, brought into focus", description: siteConfig.description, images: [{ url: "/images/v2/doha-west-bay-skyline-qatar.webp", width: 1280, height: 853, alt: "Sixth Lens, technology studio in Doha, Qatar" }] },
  twitter: { card: "summary_large_image", title: "Sixth Lens | Your business, brought into focus", description: siteConfig.description, images: ["/images/v2/doha-west-bay-skyline-qatar.webp"] },
};

export const viewport: Viewport = { themeColor: "#EC3F29", colorScheme: "light", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
