import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { serviceAreas, siteConfig } from "@/config/site";

type ContentSection = { title: string; body: string; points?: string[] };
type ContentPageProps = { kicker: string; title: string; accent: string; lead: string; sections: ContentSection[]; serviceName?: string; path?: string };

export function ContentPage({ kicker, title, accent, lead, sections, serviceName, path }: ContentPageProps) {
  const schema = serviceName && path ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url },
    areaServed: serviceAreas,
    url: `${siteConfig.url}${path}`,
  } : null;

  return <>
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
    <SiteHeader />
    <main className="detail-page content-page" id="top">
      <p className="kicker">{kicker}</p>
      <h1>{title}<br/><em>{accent}</em></h1>
      <p className="detail-lead">{lead}</p>
      <div className="content-page-grid">
        {sections.map((section) => <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
        </section>)}
      </div>
      <div className="content-page-cta">
        <a className="button" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a consultation <span aria-hidden="true">↗</span></a>
        <Link className="text-link" href="/#contact">Send us a project enquiry <span aria-hidden="true">↗</span></Link>
      </div>
    </main>
    <SiteFooter />
  </>;
}
