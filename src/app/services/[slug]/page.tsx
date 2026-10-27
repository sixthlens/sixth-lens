import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/config/site";
import { lenses } from "@/data/home";

export function generateStaticParams() { return lenses.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = lenses.find((item) => item.slug === slug);
  if (!service) return {};
  const title = `${service.title} in Qatar`;
  const description = `${service.description} Sixth Lens delivers ${service.title.toLowerCase()} for businesses in Doha and across Qatar.`;
  return { title, description, alternates: { canonical: `/services/${slug}/` }, openGraph: { title, description, url: `/services/${slug}/`, type: "website" } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = lenses.find((item) => item.slug === slug);
  if (!service) notFound();
  const data = { "@context": "https://schema.org", "@type": "Service", name: service.title, serviceType: service.title, description: service.description, provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url }, areaServed: { "@type": "Country", name: "Qatar" }, url: `${siteConfig.url}/services/${slug}/` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><SiteHeader/><main className="detail-page"><p className="kicker">Sixth Lens · Doha, Qatar</p><p className="detail-index">{service.number} / {service.eyebrow}</p><h1>{service.title}<br/><em>in Qatar.</em></h1><p className="detail-lead">{service.description}</p><div className="detail-columns"><section><h2>Built around your outcome</h2><p>We work with your team to understand the customer journey, operating context and existing systems, then shape a delivery plan around measurable business needs.</p></section><section><h2>What we can deliver</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section></div><Link className="button" href="/#contact">Talk about {service.title.toLowerCase()} <span>↗</span></Link><p className="detail-back"><Link href="/#services">← Explore all services</Link></p></main><SiteFooter/></>;
}
