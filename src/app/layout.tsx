import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Sixth Lens | Web, Mobile, CRM and Cloud Technology in Qatar", template: "%s | Sixth Lens" },
  description: siteConfig.description,
  keywords: ["technology company Qatar", "web development Qatar", "mobile app development Qatar", "CRM implementation Qatar", "digital marketing Qatar", "cloud solutions Qatar", "Doha software company"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_QA", url: "/", siteName: siteConfig.name, title: "Sixth Lens | Your business, brought into focus", description: siteConfig.description, images: [{ url: "/images/sixth-lens-hero.png", width: 1536, height: 1024, alt: "The Sixth Lens connected technology system" }] },
  twitter: { card: "summary_large_image", title: "Sixth Lens | Your business, brought into focus", description: siteConfig.description, images: ["/images/sixth-lens-hero.png"] },
};

export const viewport: Viewport = { themeColor: "#0a0b0b", colorScheme: "dark", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
