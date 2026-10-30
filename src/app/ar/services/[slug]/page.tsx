import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/home-v2/shell";
import { siteConfig, serviceAreas } from "@/config/site";
import { arabicMetadata } from "@/config/arabic-seo";
import { arabicServiceDetails } from "@/data/arabic";
import { lenses } from "@/data/home";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return lenses.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const service = arabicServiceDetails[slug];
  return service ? arabicMetadata(`${service.title} في قطر والخليج | سِكْسث لينس`, `${service.description} خدمات تقنية للشركات في قطر ودول الخليج والأسواق العالمية.`, `/services/${slug}/`, [service.title, `${service.title} قطر`, "شركة تقنية قطر", "تطوير البرمجيات الخليج", "digital services Qatar", "software development GCC"]) : {};
}
export default async function ArabicServicePage({ params }: Props) {
  const { slug } = await params; const service = arabicServiceDetails[slug];
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url }, areaServed: serviceAreas, inLanguage: "ar", url: `${siteConfig.url}/ar/services/${slug}/` };
  return (
    <Shell language="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs"><Link href="/ar/">الرئيسية</Link><Link href="/ar/services/">الخدمات</Link><span>{service.title}</span></nav>
          <span className="pill">خدمات سِكْسث لينس · قطر والخليج والعالم</span>
          <h1>{service.title} <em>في قطر والخليج.</em></h1>
          <p className="lead">{service.description}</p>
          <div className="hero-ctas">
            <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">احجز مكالمة ↗</a>
            <Link className="btn outline" href="/ar/#contact">ابدأ مشروعاً</Link>
          </div>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <div className="content-grid">
          <section className="content-sec">
            <h2>حلول تبدأ من هدفك</h2>
            <p>نعمل مع فريقك لفهم رحلة العميل وسياق التشغيل والأنظمة الحالية، ثم نحدد خطة تنفيذ واضحة تناسب احتياجات العمل ومرحلة نموه، لا قالباً جاهزاً.</p>
          </section>
          <section className="content-sec">
            <h2>ما يمكن تنفيذه</h2>
            <p>نغطي نطاقاً عملياً من القدرات ضمن هذه الخدمة، ونربطها بما تحتاجه من خدماتنا الأخرى عند الحاجة.</p>
            <ul>{service.points.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="content-sec">
            <h2>كيف نعمل معك</h2>
            <p>نبدأ بمكالمة قصيرة لفهم هدفك، ثم نتفق على النطاق والمراحل ومؤشرات النجاح، ونسلّم بعروض دورية تبقي التقدم مرئياً حتى الإطلاق وما بعده.</p>
          </section>
        </div>
        <div className="content-cta">
          <a className="btn" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">ناقش احتياجك إلى {service.title} ↗</a>
          <Link className="btn navy" href="/ar/services/">استكشف جميع الخدمات</Link>
        </div>
      </div></section>
    </Shell>
  );
}
