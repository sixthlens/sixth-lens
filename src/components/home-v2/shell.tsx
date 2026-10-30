import type { ReactNode } from "react";
import { Bricolage_Grotesque, IBM_Plex_Sans_Arabic } from "next/font/google";
import "@/styles/home-v2.css";
import { SiteHeaderV2 } from "@/components/home-v2/site-header-v2";
import { SiteFooterV2 } from "@/components/home-v2/site-footer-v2";
import { siteConfig } from "@/config/site";

const brick = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-brick", display: "swap" });
const plexAr = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], variable: "--font-ar", display: "swap" });

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/sixth-lens-logo.svg`,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  sameAs: [siteConfig.linkedinUrl],
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
};

export function Shell({ language = "en", children }: { language?: "en" | "ar"; children: ReactNode }) {
  const isAr = language === "ar";
  return (
    <div className={`slx ${brick.variable} ${plexAr.variable}`} dir={isAr ? "rtl" : "ltr"} lang={isAr ? "ar" : "en"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <SiteHeaderV2 language={language} />
      <main>{children}</main>
      <SiteFooterV2 language={language} />
    </div>
  );
}
