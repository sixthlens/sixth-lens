import Link from "next/link";
import { Shell } from "@/components/home-v2/shell";
import { serviceAreas, siteConfig } from "@/config/site";

type ContentSection = { id?: string; title: string; body: string; points?: string[] };
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

  return (
    <Shell>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>{title}</span></nav>
          <span className="pill">{kicker}</span>
          <h1>{title} <em>{accent}</em></h1>
          <p className="lead">{lead}</p>
          <div className="hero-ctas">
            <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a consultation ↗</a>
            <Link className="btn outline" href="/#contact">Send a project enquiry</Link>
          </div>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <div className="content-grid">
          {sections.map((section, index) => (
            <section className="content-sec" id={section.id ?? `section-${index + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
        </div>
        <div className="content-cta">
          <a className="btn" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a consultation ↗</a>
          <Link className="btn navy" href="/services/">Explore all services</Link>
        </div>
      </div></section>
    </Shell>
  );
}
