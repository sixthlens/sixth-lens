"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

type Lang = "en" | "ar";
type Item = [href: string, label: string, desc: string];
const t = (en: string, ar: string, lang: Lang) => (lang === "ar" ? ar : en);

function MegaMenu({ id, label, items, menu, setMenu, closeAll, language }: {
  id: string; label: string; items: Item[]; menu: string | null;
  setMenu: (v: string | null) => void; closeAll: () => void; language: Lang;
}) {
  const isOpen = menu === id;
  const [featHref, featTitle, featBlurb] = items[0];
  const rest = items.slice(1);
  return (
    <div className={`nav-menu${isOpen ? " open" : ""}`}>
      <button type="button" className="nav-trigger" aria-haspopup="true" aria-expanded={isOpen} onClick={(e) => { e.stopPropagation(); setMenu(isOpen ? null : id); }}>{label}<i aria-hidden="true" /></button>
      <div className="nav-mega" role="menu">
        <Link className="nav-feature" href={featHref} role="menuitem" onClick={closeAll}>
          <span className="fk">{label}</span>
          <strong>{featTitle}</strong>
          <span className="fb">{featBlurb}</span>
          <span className="fg">{t("View all ↗", "عرض الكل ↗", language)}</span>
        </Link>
        <div className="nav-items">
          {rest.map(([href, l, d]) => (
            <Link key={href} href={href} role="menuitem" onClick={closeAll}><strong>{l}</strong><span>{d}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeaderV2({ language = "en" }: { language?: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const isAr = language === "ar";
  const r = (p: string) => (isAr ? `/ar${p}` : p);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onDoc = (e: MouseEvent) => { if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenu(null); setOpen(false); } };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  const closeAll = () => { setMenu(null); setOpen(false); };

  const services: Item[] = [
    [r("/services/"), t("All services", "جميع الخدمات", language), t("Six connected lenses", "ستة أبعاد مترابطة", language)],
    [r("/services/web-development/"), t("Web platforms", "المواقع والمنصات", language), t("Sites, commerce & portals", "مواقع ومتاجر ومنصات", language)],
    [r("/services/mobile-app-development/"), t("Mobile apps", "تطبيقات الجوال", language), t("iOS, Android, cross-platform", "iOS وأندرويد ومتعدد المنصات", language)],
    [r("/services/digital-marketing/"), t("Digital marketing", "التسويق الرقمي", language), t("Search, content, campaigns", "بحث ومحتوى وحملات", language)],
    [r("/services/crm-automation/"), t("CRM & automation", "أنظمة العملاء والأتمتة", language), t("WhatsApp-first pipelines", "مسارات عبر واتساب أولاً", language)],
    [r("/services/cloud-solutions/"), t("Cloud solutions", "الحوسبة السحابية", language), t("Infra, DevOps, integration", "بنية وتشغيل وتكامل", language)],
    [r("/services/ai-data-solutions/"), t("Data & applied AI", "البيانات والذكاء الاصطناعي", language), t("Dashboards & assistants", "لوحات ومساعدات ذكية", language)],
    [r("/e-invoicing-qatar/"), t("E-invoicing", "الفوترة الإلكترونية", language), t("Invoice workflows & ERP", "تكامل Peppol وERP", language)],
  ];
  const industries: Item[] = [
    [r("/industries/"), t("All industries", "جميع القطاعات", language), t("Sectors we serve", "القطاعات التي نخدمها", language)],
    [r("/industries/#food-hospitality"), t("Food & hospitality", "الأغذية والضيافة", language), t("Ordering, POS, loyalty", "طلبات ونقاط بيع وولاء", language)],
    [r("/industries/#logistics-mobility"), t("Logistics & mobility", "الخدمات اللوجستية والتنقل", language), t("Dispatch & tracking", "إرسال وتتبع", language)],
    [r("/industries/#healthcare"), t("Healthcare", "الرعاية الصحية", language), t("Patient & clinical tools", "أدوات المرضى والعيادات", language)],
    [r("/industries/#property-facilities"), t("Property & facilities", "العقارات والمرافق", language), t("Portals & operations", "منصات وعمليات", language)],
    [r("/industries/#retail-commerce"), t("Retail & commerce", "التجزئة والتجارة", language), t("Omnichannel selling", "بيع متعدد القنوات", language)],
    [r("/industries/#tourism-events"), t("Tourism & events", "السياحة والفعاليات", language), t("Ticketing & visitor info", "تسجيل ورحلات", language)],
  ];
  const company: Item[] = [
    [r("/about/"), t("About", "من نحن", language), t("Who we are", "من نحن", language)],
    [r("/process/"), t("Our process", "منهجية العمل", language), t("Discovery to launch", "من الاكتشاف إلى الإطلاق", language)],
    [r("/consulting/"), t("Consultation", "الاستشارات", language), t("An independent view", "رؤية مستقلة", language)],
    [r("/security-compliance/"), t("Security & compliance", "الأمن والامتثال", language), t("Safeguards & readiness", "حماية وجاهزية", language)],
    [r("/custom-solutions/"), t("Custom solutions", "حلول مخصصة", language), t("Built around your workflow", "برمجيات تناسبك", language)],
    [r("/mvp-development/"), t("MVP development", "تطوير MVP", language), t("Test an idea fast", "تحقق بسرعة", language)],
    [r("/hire-a-team/"), t("Hire a team", "استعن بفريقنا", language), t("Embedded product teams", "فرق مدمجة", language)],
  ];

  const allMobile: [string, string][] = [
    ...services.map(([h, l]) => [h, l] as [string, string]),
    [r("/portfolio/"), t("Work", "أعمالنا", language)],
    ...industries.map(([h, l]) => [h, l] as [string, string]),
    [r("/startups/"), t("Startups", "الشركات الناشئة", language)],
    ...company.map(([h, l]) => [h, l] as [string, string]),
  ];

  return (
    <header ref={navRef} className={`slx-nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="bar">
        <Link className="brand" href={r("/")} aria-label={t("Sixth Lens home", "الصفحة الرئيسية", language)} onClick={closeAll}>
          <Image src="/images/sixth-lens-logo.svg" alt="Sixth Lens" width={150} height={34} priority />
        </Link>
        <nav className="navlinks" aria-label={t("Primary", "التنقل الرئيسي", language)}>
          <MegaMenu id="services" label={t("Services", "الخدمات", language)} items={services} menu={menu} setMenu={setMenu} closeAll={closeAll} language={language} />
          <Link href={r("/portfolio/")} onClick={closeAll}>{t("Work", "أعمالنا", language)}</Link>
          <MegaMenu id="industries" label={t("Industries", "القطاعات", language)} items={industries} menu={menu} setMenu={setMenu} closeAll={closeAll} language={language} />
          <Link href={r("/startups/")} onClick={closeAll}>{t("Startups", "الشركات الناشئة", language)}</Link>
          <MegaMenu id="company" label={t("Company", "الشركة", language)} items={company} menu={menu} setMenu={setMenu} closeAll={closeAll} language={language} />
          <Link href={r("/e-invoicing-qatar/")} onClick={closeAll}>{t("E-invoicing", "الفوترة", language)}</Link>
        </nav>
        <div className="navactions">
          <Link className="navlang" href={isAr ? "/" : "/ar/"} lang={isAr ? "en" : "ar"} onClick={closeAll}>{isAr ? "EN" : "عربي"}</Link>
          <a className="navphone" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">{t("Book a call ↗", "احجز مكالمة ↗", language)}</a>
        </div>
        <button className="nav-toggle" type="button" aria-label={t("Toggle menu", "القائمة", language)} aria-expanded={open} onClick={() => setOpen((v) => !v)}><span /></button>
        <nav className="nav-drawer" aria-label="Mobile">
          {allMobile.map(([href, l]) => <Link key={href + l} href={href} onClick={closeAll}>{l}</Link>)}
          <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">{t("Book a 30-min call ↗", "احجز مكالمة 30 دقيقة ↗", language)}</a>
          <Link href={isAr ? "/" : "/ar/"} lang={isAr ? "en" : "ar"} onClick={closeAll}>{isAr ? "English" : "عربي"}</Link>
        </nav>
      </div>
    </header>
  );
}
