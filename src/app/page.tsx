import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactForm } from "@/components/contact/contact-form";
import { LensScene } from "@/components/three/lens-scene";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import { faqs, journeySteps, lenses, qatarOffers, projects, insights } from "@/data/home";
import Image from "next/image";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/sixth-lens-hero.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  description: siteConfig.description,
  areaServed: { "@type": "Country", name: "Qatar" },
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  knowsAbout: ["Web development", "Mobile applications", "CRM", "Cloud computing", "Digital marketing", "Applied AI"],
};

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <SiteHeader />
    <a className="whatsapp-float" href={`${siteConfig.whatsappUrl}?text=Hello%20Sixth%20Lens%2C%20I%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer" aria-label="Chat with Sixth Lens on WhatsApp"><span aria-hidden="true">WA</span><strong>Let&apos;s talk</strong></a>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art"><Image className="hero-fallback" src="/images/sixth-lens-hero.png" alt="" fill priority sizes="100vw" /><LensScene /></div>
        <div className="hero-copy"><p className="kicker">Independent technology studio · Doha, Qatar</p><h1 id="hero-title">Your business,<br /><em>brought into focus.</em></h1><p className="hero-summary">Sixth Lens connects brand, customers, operations and technology for businesses growing in Qatar.</p><div className="hero-actions"><a className="button" href="#contact">Book a strategy call <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">Explore the six lenses <span aria-hidden="true">↓</span></a></div></div>
        <div className="hero-index" aria-label="Core disciplines"><span>WEB</span><span>MARKETING</span><span>MOBILE</span><span>CRM</span><span>CLOUD</span><span>AI</span></div>
      </section>

      <section className="statement section-pad"><Reveal><p className="kicker">A wider field of view</p><h2>Technology works harder when every part of the business can see the same picture.</h2><p>We design the customer experience and the system behind it, so growth does not create more disconnected tools, missed enquiries or manual work.</p></Reveal></section>

      <section id="work" className="portfolio section-pad" aria-labelledby="work-title"><div className="section-heading"><p className="kicker">Selected work</p><h2 id="work-title">Digital products<br/>with a job to do.</h2><p>Platforms shaped around the people using them and the business outcomes they need to deliver.</p></div><div className="project-grid">{projects.map((project,index)=><Reveal key={project.name} className={`project-card project-card-${index+1}`}><a href={`/work/${project.slug}/`} aria-label={`Read the ${project.name} case study`}><div className={`project-art project-art-${project.theme}`}><span className="project-art-label">{project.wordmark}</span><span className="project-art-orbit" aria-hidden="true"/></div><div className="project-info"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div><span className="project-arrow" aria-hidden="true">↗</span><p>{project.description}</p><small><strong>Business use case</strong>{project.useCase}</small><span className="case-link">Read case study ↗</span></div></a></Reveal>)}</div></section>

      <section id="services" className="lenses section-pad" aria-labelledby="services-title"><div className="section-heading"><p className="kicker">The six lenses</p><h2 id="services-title">Six perspectives.<br />One connected system.</h2><p>Choose one focused engagement or bring the lenses together around a larger business outcome.</p></div><div className="lens-list">{lenses.map((lens) => <Reveal key={lens.number} className="lens-row"><article><div className="lens-number">{lens.number}<span>{lens.eyebrow}</span></div><div className="lens-content"><h3><a href={`/services/${lens.slug}/`}>{lens.title}</a></h3><p>{lens.description}</p><a className="service-detail-link" href={`/services/${lens.slug}/`}>Explore service <span aria-hidden="true">↗</span></a></div><ul>{lens.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article></Reveal>)}</div></section>

      <section id="qatar" className="qatar section-pad" aria-labelledby="qatar-title"><Reveal className="qatar-intro"><p className="kicker">Built around Qatar</p><h2 id="qatar-title">Local context is not a translation layer.</h2><p>It shapes the product from the first decision: Arabic and English journeys, WhatsApp-led conversations, local search behaviour, mobile-first customers and the operational reality of teams on the ground.</p></Reveal><div className="offer-grid">{qatarOffers.map((offer, index) => <Reveal key={offer.code} className={`offer offer-${index + 1}`}><article><span className="offer-code">{offer.code}</span><h3>{offer.title}</h3><p>{offer.description}</p><small>{offer.audience}</small></article></Reveal>)}</div><div className="sector-line"><span>Tourism & events</span><span>Logistics & facilities</span><span>Property</span><span>Retail & hospitality</span><span>Healthcare & education</span></div></section>

      <section id="einvoicing" className="einvoicing section-pad" aria-labelledby="einvoicing-title"><div className="einvoicing-copy"><p className="kicker">Ready for digital tax workflows</p><h2 id="einvoicing-title">E-invoicing that fits your business systems.</h2><p>We help businesses prepare for structured electronic invoicing with practical workflows for invoice creation, validation, archiving and integration with finance or ERP platforms.</p><a className="text-link" href="/e-invoicing-qatar/">Explore e-invoicing solutions <span aria-hidden="true">↗</span></a></div><div className="invoice-visual" aria-label="Illustration of a structured digital invoice"><div className="invoice-top"><span>INVOICE / 2026</span><span className="invoice-status">VALIDATED</span></div><div className="invoice-lines"><i/><i/><i/><i/></div><div className="invoice-code"><span>{"{ "}</span>structured data<span>{" }"}</span></div><div className="invoice-total"><span>Ready to route</span><strong>01 / 01</strong></div></div></section>

      <section id="approach" className="journey section-pad" aria-labelledby="journey-title"><div className="journey-head"><p className="kicker">One continuous journey</p><h2 id="journey-title">From first signal<br />to clear action.</h2><p>A campaign should not end at a lead form. We connect the path from discovery to follow-up, delivery and insight.</p></div><ol>{journeySteps.map(([number, label]) => <li key={number}><span>{number}</span><p>{label}</p></li>)}</ol></section>

      <section className="principles section-pad" aria-labelledby="principles-title"><p className="kicker">How we work</p><h2 id="principles-title">Built for the real world.</h2><div className="principle-grid"><article><span>01</span><h3>Start with the outcome</h3><p>We define the business change before selecting tools or writing code.</p></article><article><span>02</span><h3>Ship in clear stages</h3><p>Useful releases, visible progress and early feedback keep risk under control.</p></article><article><span>03</span><h3>Design the whole system</h3><p>Experience, operations, data and infrastructure are considered together.</p></article></div></section>

      <section id="insights" className="insights section-pad" aria-labelledby="insights-title"><div className="section-heading"><p className="kicker">Useful perspectives</p><h2 id="insights-title">A clearer view<br/>of digital change.</h2><p>Practical notes for teams planning their next digital product or operational upgrade.</p></div><div className="insight-list">{insights.map((item,index)=><article key={item.title}><span>0{index+1}</span><div><p className="project-category">{item.category}</p><h3>{item.title}</h3><p>{item.summary}</p></div><a href="#contact" aria-label={`Ask us about ${item.title}`}>↗</a></article>)}</div></section>

      <section className="faq section-pad" aria-labelledby="faq-title"><div><p className="kicker">Common questions</p><h2 id="faq-title">A clearer starting point.</h2></div><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>

      <section id="contact" className="contact section-pad" aria-labelledby="contact-title"><div className="contact-intro"><p className="kicker">Start with a conversation</p><h2 id="contact-title">What should we<br />bring into focus?</h2><p>Tell us what you are building, fixing or trying to grow. We will respond with a useful next step, even if that is not a project with us.</p><div className="contact-direct"><a href={`tel:${siteConfig.phoneHref}`}><small>Call</small>{siteConfig.phoneDisplay}</a><a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><small>WhatsApp</small>Message us directly</a></div></div><ContactForm /></section>
    </main>
    <SiteFooter />
  </>;
}
