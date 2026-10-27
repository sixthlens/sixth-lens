import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "سايكسث لينس | تطوير التطبيقات والحلول الرقمية في قطر والخليج", template: "%s | سايكسث لينس" },
  description: "سايكسث لينس استوديو تقني في الدوحة يقدم تطوير تطبيقات الجوال والمواقع والأنظمة الرقمية في قطر ودول الخليج والأسواق العالمية.",
  applicationName: siteConfig.name,
  openGraph: { type: "website", locale: "ar_QA", siteName: siteConfig.name },
};

export const viewport: Viewport = { themeColor: "#0a0b0b", width: "device-width", initialScale: 1 };

export default function ArabicRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body><div className="arabic-site" lang="ar" dir="rtl">{children}</div></body></html>;
}
