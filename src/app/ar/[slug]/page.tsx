import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/home-v2/shell";
import { siteConfig } from "@/config/site";
import { arabicMetadata } from "@/config/arabic-seo";
import { arabicPages, arabicProjectDetails } from "@/data/arabic";
import { projects } from "@/data/home";

type Props = { params: Promise<{ slug: string }> };
const pageKeywords: Record<string, string[]> = {
  about: ["شركة تقنية الدوحة", "استوديو تطوير رقمي قطر"],
  industries: ["حلول تقنية الضيافة قطر", "تطبيقات الخدمات اللوجستية الخليج", "تقنية الرعاية الصحية الخليج", "حلول عقارية رقمية", "تطبيقات الفعاليات قطر"],
  process: ["منهجية تطوير البرمجيات", "مراحل تطوير التطبيقات", "إدارة المشاريع التقنية"],
  consulting: ["استشارات تقنية قطر", "استشارات التحول الرقمي", "استشارات تطوير التطبيقات", "استشارات تقنية الخليج"],
  "security-compliance": ["أمن التطبيقات", "استشارات الأمن السيبراني للتطبيقات", "خصوصية البيانات قطر", "الامتثال التقني"],
  "custom-solutions": ["تطوير برمجيات مخصصة قطر", "حلول برمجية للشركات", "تكامل الأنظمة الخليج"],
  startups: ["تطوير الشركات الناشئة قطر", "شريك تقني للشركات الناشئة", "تطوير منتجات رقمية للشركات الناشئة"],
  "mvp-development": ["تطوير MVP قطر", "تطوير منتج أولي", "بناء تطبيق للشركات الناشئة", "تصميم نموذج أولي للتطبيق"],
  "hire-a-team": ["توظيف فريق تطوير برمجيات قطر", "فريق تطوير تطبيقات مخصص", "تعزيز فرق التقنية الخليج"],
  services: ["خدمات تطوير البرمجيات قطر", "تطوير تطبيقات الجوال", "تطوير مواقع الويب", "التسويق الرقمي", "حلول السحابة والذكاء الاصطناعي"],
  "e-invoicing-qatar": ["الفوترة الإلكترونية قطر", "تكامل PEPPOL الخليج", "نظام الفوترة الإلكترونية الإمارات", "تكامل ERP والفواتير", "UBL XML"],
  portfolio: ["أعمال تطوير التطبيقات", "مشاريع المنتجات الرقمية", "دراسات حالات التقنية", "ملف أعمال شركة برمجيات"],
};

export function generateStaticParams() { return Object.keys(arabicPages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = arabicPages[slug];
  if (!page) return {};
  return arabicMetadata(`${page.title} ${page.accent} | سِكْسث لينس`, page.lead, `/${slug}/`, [...(pageKeywords[slug] || []), "خدمات تقنية قطر", "تطوير المنتجات الرقمية الخليج", "digital product development Qatar", "software development GCC"]);
}

export default async function ArabicContentRoute({ params }: Props) {
  const { slug } = await params;
  const page = arabicPages[slug];
  if (!page) notFound();
  const schema = { "@context": "https://schema.org", "@type": slug === "portfolio" ? "CollectionPage" : "WebPage", name: `${page.title} ${page.accent}`, description: page.lead, inLanguage: "ar", url: `${siteConfig.url}/ar/${slug}/`, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url } };

  if (slug === "portfolio") {
    return (
      <Shell language="ar">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="page-hero">
          <span className="ring" aria-hidden="true" />
          <div className="wrap">
            <nav className="crumbs"><Link href="/ar/">الرئيسية</Link><span>الأعمال</span></nav>
            <span className="pill">أعمال مختارة</span>
            <h1>{page.title} <em>{page.accent}</em></h1>
            <p className="lead">{page.lead}</p>
            <div className="hero-ctas">
              <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">احجز مكالمة ↗</a>
              <Link className="btn outline" href="/ar/#contact">أرسل استفسارك</Link>
            </div>
          </div>
        </section>
        <section className="sec"><div className="wrap">
          <div className="pf-grid">
            {projects.map((project) => {
              const detail = arabicProjectDetails[project.slug];
              return (
                <Link className="pf-card" href={`/ar/work/${project.slug}/`} key={project.slug}>
                  <div className="pf-art"><img src={project.image} alt={detail.imageAlt} loading="lazy" /></div>
                  <div className="pf-body">
                    <span className="pf-cat">{detail.category}</span>
                    <h3>{project.name}<span aria-hidden="true">↗</span></h3>
                    <p>{detail.useCase}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div></section>
        <section className="sec tight"><div className="wrap">
          <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
            <span className="ring" aria-hidden="true" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
              <span className="pill">ابدأ من هنا</span>
              <h2 className="h2">لديك منتج بهدف واضح؟</h2>
              <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>أخبرنا بالنتيجة التي تريد تحقيقها، وسنرسم أقصر مسار واقعي من الفكرة إلى منتج يعتمد عليه عملاؤك وفرقك.</p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">احجز مكالمة 30 دقيقة ↗</a>
                <a className="btn outline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">واتساب</a>
              </div>
            </div>
          </div>
        </div></section>
      </Shell>
    );
  }

  const serviceLinks = slug === "services" ? [
    ["web-development", "تطوير المواقع والمنصات"], ["digital-marketing", "التسويق الرقمي"], ["mobile-app-development", "تطبيقات الجوال"], ["crm-automation", "CRM والأتمتة"], ["cloud-solutions", "حلول السحابة"], ["ai-data-solutions", "البيانات والذكاء الاصطناعي"],
  ] as const : [];

  return (
    <Shell language="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs"><Link href="/ar/">الرئيسية</Link><span>{page.title}</span></nav>
          <span className="pill">{page.kicker}</span>
          <h1>{page.title} <em>{page.accent}</em></h1>
          <p className="lead">{page.lead}</p>
          <div className="hero-ctas">
            <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">احجز مكالمة ↗</a>
            <Link className="btn outline" href="/ar/#contact">أرسل استفسارك</Link>
          </div>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <div className="content-grid">
          {page.sections.map((section, index) => (
            <section className="content-sec" id={section.id ?? `section-${index + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
        </div>
        {serviceLinks.length > 0 && (
          <div className="content-cta">
            {serviceLinks.map(([path, label]) => <Link className="btn navy" key={path} href={`/ar/services/${path}/`}>{label} ↗</Link>)}
          </div>
        )}
        <div className="content-cta">
          <a className="btn" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">احجز استشارة ↗</a>
          <Link className="btn navy" href="/ar/services/">استكشف جميع الخدمات</Link>
        </div>
      </div></section>
    </Shell>
  );
}
