import Link from "next/link";
import { siteConfig } from "@/config/site";

type Lang = "en" | "ar";
const t = (en: string, ar: string, lang: Lang) => (lang === "ar" ? ar : en);

export function SiteFooterV2({ language = "en" }: { language?: Lang }) {
  const isAr = language === "ar";
  const r = (p: string) => (isAr ? `/ar${p}` : p);
  return (
    <footer className="slx-footer"><div className="wrap">
      <div className="cols">
        <div>
          <div className="lets">
            <h3>{t("Let's bring your business into focus.", "لنُركّز أعمالك بوضوح.", language)}<a className="circle" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer" aria-label={t("Book a call", "احجز مكالمة", language)}>→</a></h3>
            <p>{t("Book a 30-minute call, no deck, no pitch.", "احجز مكالمة 30 دقيقة, بلا عروض.", language)}</p>
          </div>
          <div className="socials">
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
          </div>
        </div>
        <div>
          <h4>{t("Services", "الخدمات", language)}</h4>
          <ul>
            <li><Link href={r("/services/web-development/")}>{t("Web Platforms", "المواقع والمنصات", language)}</Link></li>
            <li><Link href={r("/services/mobile-app-development/")}>{t("Mobile Applications", "تطبيقات الجوال", language)}</Link></li>
            <li><Link href={r("/services/digital-marketing/")}>{t("Digital Marketing", "التسويق الرقمي", language)}</Link></li>
            <li><Link href={r("/services/crm-automation/")}>{t("CRM & Automation", "أنظمة العملاء والأتمتة", language)}</Link></li>
            <li><Link href={r("/services/cloud-solutions/")}>{t("Cloud Solutions", "الحوسبة السحابية", language)}</Link></li>
            <li><Link href={r("/services/ai-data-solutions/")}>{t("Data & Applied AI", "البيانات والذكاء الاصطناعي", language)}</Link></li>
            <li><Link href={r("/e-invoicing-qatar/")}>{t("E-Invoicing & Peppol", "الفوترة الإلكترونية", language)}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t("Company", "الشركة", language)}</h4>
          <ul>
            <li><Link href={r("/")}>{t("Home", "الرئيسية", language)}</Link></li>
            <li><Link href={r("/about/")}>{t("About", "من نحن", language)}</Link></li>
            <li><Link href={r("/portfolio/")}>{t("Work", "أعمالنا", language)}</Link></li>
            <li><Link href={r("/industries/")}>{t("Industries", "القطاعات", language)}</Link></li>
            <li><Link href={r("/startups/")}>{t("Startups", "الشركات الناشئة", language)}</Link></li>
            <li><Link href={r("/process/")}>{t("Our Process", "منهجية العمل", language)}</Link></li>
            <li><Link href={r("/contact/")}>{t("Contact", "تواصل معنا", language)}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t("Contact", "تواصل", language)}</h4>
          <ul>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a></li>
            <li>{t("Doha, Qatar · Serving the GCC & worldwide", "الدوحة، قطر · نخدم الخليج والعالم", language)}</li>
            <li><a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">{t("Calendly · Book a meeting ↗", "كاليندلي · احجز اجتماعاً ↗", language)}</a></li>
            <li><a href={siteConfig.googleBusinessUrl} target="_blank" rel="noreferrer">{t("Google Maps · Find us ↗", "خرائط جوجل · اعثر علينا ↗", language)}</a></li>
          </ul>
        </div>
      </div>
      <div className="base">
        <span>© {new Date().getFullYear()} {t("Sixth Lens Technology", "سيكث لينس للتقنية", language)}</span>
        <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <Link href={r("/privacy/")}>{t("Privacy", "الخصوصية", language)}</Link>
          <Link href={r("/terms/")}>{t("Terms", "الشروط", language)}</Link>
          <Link href={r("/contact/")}>{t("Contact", "تواصل", language)}</Link>
        </span>
        <span>{t("Designed and engineered in Qatar", "صُمم وطُوّر في قطر", language)}</span>
      </div>
    </div></footer>
  );
}
