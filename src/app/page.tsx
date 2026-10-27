import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LensScene } from "@/components/three/lens-scene";
import { siteConfig, serviceAreas } from "@/config/site";
import { lenses, projects } from "@/data/home";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  url: siteConfig.url,
  sameAs: [siteConfig.linkedinUrl],
  image: `${siteConfig.url}/images/sixth-lens-hero.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  description: siteConfig.description,
  areaServed: serviceAreas,
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  knowsAbout: ["Web development", "Mobile applications", "CRM", "Cloud computing", "Digital marketing", "Applied AI"],
};

const industries = ["Food & hospitality", "Logistics & mobility", "Healthcare", "Property & facilities", "Retail & commerce", "Tourism & events"];

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <SiteHeader />
    <a className="whatsapp-float" href={`${siteConfig.whatsappUrl}?text=Hello%20Sixth%20Lens%2C%20I%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer" aria-label="Chat with Sixth Lens on WhatsApp"><span aria-hidden="true">WA</span><strong>Let&apos;s talk</strong></a>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art"><Image className="hero-fallback" src="/images/sixth-lens-hero.png" alt="" fill priority sizes="100vw" /><LensScene /></div>
        <div className="hero-copy"><p className="kicker">Independent technology studio · Qatar, GCC & international</p><h1 id="hero-title">Your business,<br /><em>brought into focus.</em></h1><p className="hero-summary">We connect brand, customers, operations and technology for organizations in Qatar, across the GCC and around the world.</p><div className="hero-actions"><a className="button" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a meeting <span aria-hidden="true">↗</span></a><Link className="text-link" href="/services/">Explore our services <span aria-hidden="true">↓</span></Link></div></div>
        <div className="hero-index" aria-label="Core disciplines"><span>WEB</span><span>MARKETING</span><span>MOBILE</span><span>CRM</span><span>CLOUD</span><span>AI</span></div>
      </section>

      <section id="services" className="home-services section-pad" aria-labelledby="services-title"><div className="section-heading"><p className="kicker">What we do</p><h2 id="services-title">One team for the<br/>whole digital picture.</h2><p>Focus on one business need or connect services around a larger outcome.</p></div><div className="home-service-list">{lenses.map((service) => <article key={service.slug}><span>{service.number}</span><div><h3><Link href={`/services/${service.slug}/`}>{service.title} <span aria-hidden="true">↗</span></Link></h3><p>{service.description}</p></div></article>)}</div><Link className="button" href="/services/">Explore all services <span aria-hidden="true">↗</span></Link></section>

      <section id="work" className="home-work section-pad" aria-labelledby="work-title"><div className="section-heading"><p className="kicker">Selected work</p><h2 id="work-title">Products with a<br/>job to do.</h2><p>Digital experiences shaped around real customer and operational needs.</p></div><div className="home-work-grid">{projects.slice(0, 3).map((project) => <Link className="home-work-item" key={project.slug} href={`/work/${project.slug}/`}><div className="home-work-image"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><p>{project.category}</p><h3>{project.name}<span aria-hidden="true">↗</span></h3></Link>)}</div><Link className="text-link home-work-all" href="/portfolio/">View portfolio and business use cases <span aria-hidden="true">↗</span></Link></section>

      <section className="industry-preview section-pad" aria-labelledby="industries-title"><div><p className="kicker">Industries we work with</p><h2 id="industries-title">Built around the realities<br/>of your sector.</h2><p>Local knowledge from Qatar, with solutions designed for teams across the GCC and international markets.</p><Link className="button" href="/industries/">Explore industries <span aria-hidden="true">↗</span></Link></div><ul>{industries.map((industry) => <li key={industry}><Link href="/industries/">{industry}<span aria-hidden="true">↗</span></Link></li>)}</ul></section>

      <section className="home-guides section-pad" aria-label="More ways to work with Sixth Lens"><Link href="/process/"><span>01 / DELIVERY</span><strong>Our process</strong><small>See how we move from discovery to launch and improvement.</small><b aria-hidden="true">↗</b></Link><Link href="/consulting/"><span>02 / ADVICE</span><strong>Business & technical consultation</strong><small>Get an independent view before you commit to a solution.</small><b aria-hidden="true">↗</b></Link><Link href="/security-compliance/"><span>03 / TRUST</span><strong>Security & compliance</strong><small>Plan system safeguards and technical readiness early.</small><b aria-hidden="true">↗</b></Link><Link href="/custom-solutions/"><span>04 / BUILD</span><strong>Custom solutions</strong><small>Explore software shaped to your customers and workflows.</small><b aria-hidden="true">↗</b></Link></section>

      <section className="einvoicing home-einvoicing section-pad" aria-labelledby="einvoicing-title"><div className="einvoicing-copy"><p className="kicker">Qatar, GCC & international</p><h2 id="einvoicing-title">E-invoicing that fits your business systems.</h2><p>Plan structured invoice workflows, finance integrations and readiness for evolving regional requirements.</p><Link className="button" href="/e-invoicing-qatar/">Explore e-invoicing solutions <span aria-hidden="true">↗</span></Link></div><div className="invoice-visual" aria-label="Illustration of a structured digital invoice"><div className="invoice-top"><span>INVOICE / 2026</span><span className="invoice-status">VALIDATED</span></div><div className="invoice-lines"><i/><i/><i/><i/></div><div className="invoice-code"><span>{"{ "}</span>structured data<span>{" }"}</span></div><div className="invoice-total"><span>Ready to route</span><strong>01 / 01</strong></div></div></section>

      <section id="contact" className="contact section-pad" aria-labelledby="contact-title"><div className="contact-intro"><p className="kicker">Start with a conversation</p><h2 id="contact-title">What should we<br />bring into focus?</h2><p>Tell us what you are building, fixing or trying to grow. We will respond with a useful next step.</p><div className="contact-direct"><a className="contact-booking button" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Schedule a meeting <span aria-hidden="true">↗</span></a><a href={`tel:${siteConfig.phoneHref}`}><small>Phone</small>{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`}><small>Email</small>{siteConfig.email}</a><a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"><small>LinkedIn</small>Visit our company page ↗</a><a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><small>WhatsApp</small>Message us directly ↗</a></div></div><ContactForm /></section>
    </main>
    <SiteFooter />
  </>;
}
