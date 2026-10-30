import type { Metadata } from "next";
import { Shell } from "@/components/home-v2/shell";
import { ContactFormV2 } from "@/components/home-v2/contact-form-v2";
import { arabicMetadata } from "@/config/arabic-seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = arabicMetadata(
  "تواصل معنا",
  "تحدّث مع سِكْسث لينس حول مشروعك في الويب أو الجوال أو CRM أو السحابة أو البيانات والذكاء الاصطناعي. مقرنا الدوحة، ونخدم قطر والخليج والأسواق العالمية.",
  "/contact/",
  ["تواصل سكسث لينس", "وكالة تطوير قطر", "تطوير تطبيقات الدوحة"],
);

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  inLanguage: "ar",
  name: "تواصل مع سِكْسث لينس",
  url: `${siteConfig.url}/ar/contact/`,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.legalName,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    url: siteConfig.url,
    address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  },
};

export default function Page() {
  return (
    <Shell language="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="التنقل"><a href="/ar/">الرئيسية</a><span>تواصل معنا</span></nav>
          <span className="pill">ابدأ محادثة</span>
          <h1>لنُركّز أعمالك <em>بوضوح.</em></h1>
          <p className="lead">أخبرنا بما تبنيه أو تصلحه أو تريد تنميته. سيردّ عليك أحد المؤسسين، لا مندوب مبيعات، خلال يوم عمل واحد بخطوة تالية مفيدة.</p>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <a href={`mailto:${siteConfig.email}`}><span className="ci-label">البريد الإلكتروني</span><span className="ci-value">{siteConfig.email}</span></a>
            <a href={`tel:${siteConfig.phoneHref}`}><span className="ci-label">الهاتف</span><span className="ci-value">{siteConfig.phoneDisplay}</span></a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><span className="ci-label">واتساب</span><span className="ci-value">راسلنا مباشرة ↗</span></a>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer"><span className="ci-label">احجز اجتماعاً</span><span className="ci-value">مكالمة 30 دقيقة عبر Calendly ↗</span></a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"><span className="ci-label">لينكد إن</span><span className="ci-value">تابع سِكْسث لينس ↗</span></a>
            <div><span className="ci-label">المقر</span><span className="ci-value">الدوحة، قطر</span><span style={{ color: "var(--grey)", fontWeight: 400, fontSize: 15 }}>نخدم دول الخليج وعملاء حول العالم</span></div>
          </div>
          <ContactFormV2 language="ar" />
        </div>
      </div></section>
    </Shell>
  );
}
