import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
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
  return arabicMetadata(`${page.title} ${page.accent} | سايكسث لينس`, page.lead, `/${slug}/`, [...(pageKeywords[slug] || []), "خدمات تقنية قطر", "تطوير المنتجات الرقمية الخليج", "digital product development Qatar", "software development GCC"]);
}

export default async function ArabicContentRoute({ params }: Props) {
  const { slug } = await params;
  const page = arabicPages[slug];
  if (!page) notFound();
  const schema = { "@context": "https://schema.org", "@type": slug === "portfolio" ? "CollectionPage" : "WebPage", name: `${page.title} ${page.accent}`, description: page.lead, inLanguage: "ar", url: `${siteConfig.url}/ar/${slug}/`, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url } };

  if (slug === "portfolio") return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><SiteHeader language="ar"/><main className="portfolio portfolio-index section-pad" id="top"><div className="section-heading"><p className="kicker">أعمال مختارة</p><h1 id="portfolio-title">منتجات رقمية<br/>لها هدف واضح.</h1><p>تجارب رقمية مصممة لتلبية احتياجات العملاء والأعمال.</p></div><div className="project-grid">{projects.map((project,index) => { const detail=arabicProjectDetails[project.slug]; return <article className={`project-card project-card-${index+1}`} key={project.slug}><Link href={`/ar/work/${project.slug}/`} aria-label={`دراسة مشروع ${project.name}`}><div className={`project-art project-art-${project.theme}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw"/></div><div className="project-info"><div><p className="project-category">{detail.category}</p><h2>{project.name}</h2></div><span className="project-arrow" aria-hidden="true">↗</span><p>{detail.description}</p><small><strong>حالة الاستخدام</strong>{detail.useCase}</small><span className="case-link">اقرأ عن المشروع ↗</span></div></Link></article>; })}</div><p className="portfolio-note">أمثلة لمنتجات رقمية في قطاعات واحتياجات مختلفة. تواصل معنا لمناقشة الحل المناسب لمؤسستك.</p></main><SiteFooter language="ar"/></>;

  const serviceLinks = slug === "services" ? [
    ["web-development", "تطوير المواقع والمنصات"], ["digital-marketing", "التسويق الرقمي"], ["mobile-app-development", "تطبيقات الجوال"], ["crm-automation", "CRM والأتمتة"], ["cloud-solutions", "حلول السحابة"], ["ai-data-solutions", "البيانات والذكاء الاصطناعي"],
  ] : [];

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><SiteHeader language="ar"/><main className="detail-page content-page" id="top"><p className="kicker">{page.kicker}</p><h1>{page.title}<br/><em>{page.accent}</em></h1><p className="detail-lead">{page.lead}</p><div className="content-page-grid">{page.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}</div>{serviceLinks.length > 0 && <nav className="arabic-service-links" aria-label="الخدمات التفصيلية">{serviceLinks.map(([path,label]) => <Link key={path} href={`/ar/services/${path}/`}>{label} ↗</Link>)}</nav>}<div className="content-page-cta"><a className="button" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">احجز استشارة <span aria-hidden="true">↗</span></a><Link className="text-link" href="/ar/#contact">أرسل استفسارك <span aria-hidden="true">↗</span></Link></div></main><SiteFooter language="ar"/></>;
}
