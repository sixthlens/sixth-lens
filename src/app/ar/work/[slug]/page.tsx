import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/config/site";
import { arabicMetadata } from "@/config/arabic-seo";
import { arabicProjectDetails } from "@/data/arabic";
import { projects } from "@/data/home";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug); const detail = arabicProjectDetails[slug];
  return project && detail ? arabicMetadata(`${project.name} | مشروع رقمي · سايكسث لينس`, `${detail.description} الاستخدام التجاري: ${detail.useCase}`, `/work/${slug}/`, [project.name, detail.category, "مشاريع تطبيقات الجوال", "دراسات منتجات رقمية", "digital product case study"]) : {};
}
export default async function ArabicProjectPage({ params }: Props) {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug); const detail = arabicProjectDetails[slug];
  if (!project || !detail) notFound();
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: detail.description, about: detail.useCase, inLanguage: "ar", url: `${siteConfig.url}/ar/work/${slug}/`, publisher: { "@type": "Organization", name: siteConfig.legalName } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><SiteHeader language="ar"/><main className="detail-page work-detail"><p className="kicker">أعمال مختارة · {detail.category}</p><div className={`project-art project-art-${project.theme}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, 80vw"/></div><h1>{project.name}<br/><em>حل رقمي لهدف واضح.</em></h1><p className="detail-lead">{detail.description}</p><div className="detail-columns"><section><h2>المنتج</h2><p>{detail.description} استكشف المنتج لمعرفة تجربته واتجاهه الرقمي.</p><a className="text-link" href={project.url} target="_blank" rel="noreferrer">زيارة {project.name} <span>↗</span></a></section><section><h2>حالة الاستخدام التجاري</h2><p>{detail.useCase}</p></section></div><Link className="button" href="/ar/#contact">طوّر منتجاً لأعمالك <span>↗</span></Link><p className="detail-back"><Link href="/ar/portfolio/">← استكشف أعمالنا</Link></p></main><SiteFooter language="ar"/></>;
}
