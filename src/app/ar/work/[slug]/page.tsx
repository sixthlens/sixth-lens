import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/home-v2/shell";
import { siteConfig } from "@/config/site";
import { arabicMetadata } from "@/config/arabic-seo";
import { arabicProjectDetails } from "@/data/arabic";
import { projects } from "@/data/home";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug); const detail = arabicProjectDetails[slug];
  return project && detail ? arabicMetadata(`${project.name} | مشروع رقمي · سِكْسث لينس`, `${detail.description} الاستخدام التجاري: ${detail.useCase}`, `/work/${slug}/`, [project.name, detail.category, "مشاريع تطبيقات الجوال", "دراسات منتجات رقمية", "digital product case study"]) : {};
}
export default async function ArabicProjectPage({ params }: Props) {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug); const detail = arabicProjectDetails[slug];
  if (!project || !detail) notFound();
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: detail.description, about: detail.useCase, inLanguage: "ar", url: `${siteConfig.url}/ar/work/${slug}/`, publisher: { "@type": "Organization", name: siteConfig.legalName } };
  return (
    <Shell language="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs"><Link href="/ar/">الرئيسية</Link><Link href="/ar/portfolio/">الأعمال</Link><span>{project.name}</span></nav>
          <span className="pill">{detail.category}</span>
          <h1>{project.name}</h1>
          <p className="lead">{detail.description}</p>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <div className="work-figure"><img src={project.image} alt={detail.imageAlt} /></div>
        <div className="content-grid">
          <div className="content-sec">
            <h2 className="h2">المنتج</h2>
            <p className="body">{detail.description}</p>
          </div>
          <div className="content-sec">
            <h2 className="h2">ما بنيناه</h2>
            <p className="body">تجربة منتج مركّزة صُمّمت حول رحلة العميل الحقيقية، مبنية لتعمل بثبات عبر الأجهزة والأسواق التي تخدمها، وتبقى موثوقة مع نمو الفريق الذي يقف خلفها. استكشف المنتج الحي لترى اتجاهه بنفسك.</p>
          </div>
          <div className="content-sec">
            <h2 className="h2">حالة الاستخدام التجاري</h2>
            <p className="body">{detail.useCase}</p>
          </div>
        </div>
        <a className="detail-visit" href={project.url} target="_blank" rel="noreferrer">زيارة {project.name} ↗</a>
      </div></section>
      <section className="sec tight"><div className="wrap">
        <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
          <span className="ring" aria-hidden="true" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
            <span className="pill">ابدأ من هنا</span>
            <h2 className="h2">لديك منتج بهدف واضح؟</h2>
            <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>نعمل مع فرق في قطر ودول الخليج لتحويل هدف عمل واضح إلى منتج يستخدمه الناس فعلاً. دعنا نحدد نطاق مشروعك.</p>
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
