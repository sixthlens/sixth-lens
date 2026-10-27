import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig, serviceAreas } from "@/config/site";
import { arabicMetadata } from "@/config/arabic-seo";
import { arabicServiceDetails } from "@/data/arabic";
import { lenses } from "@/data/home";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return lenses.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const service = arabicServiceDetails[slug];
  return service ? arabicMetadata(`${service.title} في قطر والخليج | سايكسث لينس`, `${service.description} خدمات تقنية للشركات في قطر ودول الخليج والأسواق العالمية.`, `/services/${slug}/`, [service.title, `${service.title} قطر`, "شركة تقنية قطر", "تطوير البرمجيات الخليج", "digital services Qatar", "software development GCC"]) : {};
}
export default async function ArabicServicePage({ params }: Props) {
  const { slug } = await params; const service = arabicServiceDetails[slug];
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url }, areaServed: serviceAreas, inLanguage: "ar", url: `${siteConfig.url}/ar/services/${slug}/` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><SiteHeader language="ar"/><main className="detail-page"><p className="kicker">خدمات سايكسث لينس · قطر والخليج والأسواق العالمية</p><h1>{service.title}<br/><em>في قطر والخليج.</em></h1><p className="detail-lead">{service.description}</p><div className="detail-columns"><section><h2>حلول تبدأ من هدفك</h2><p>نعمل مع فريقك لفهم رحلة العميل وسياق التشغيل والأنظمة الحالية، ثم نحدد خطة تنفيذ تناسب احتياجات العمل.</p></section><section><h2>ما يمكن تنفيذه</h2><ul>{service.points.map((item) => <li key={item}>{item}</li>)}</ul></section></div><Link className="button" href="/ar/#contact">ناقش احتياجك إلى {service.title} <span>↗</span></Link><p className="detail-back"><Link href="/ar/services/">← استكشف جميع الخدمات</Link></p></main><SiteFooter language="ar"/></>;
}
