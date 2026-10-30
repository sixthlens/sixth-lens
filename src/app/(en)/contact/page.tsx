import type { Metadata } from "next";
import { Shell } from "@/components/home-v2/shell";
import { ContactFormV2 } from "@/components/home-v2/contact-form-v2";
import { pageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Talk to Sixth Lens about your web, mobile, CRM, cloud, data or AI project. Based in Doha, serving Qatar, the GCC and beyond. We reply within one business day.",
  "/contact/",
);

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sixth Lens",
  url: `${siteConfig.url}/contact/`,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.legalName,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    url: siteConfig.url,
    address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  },
};

export default function Page() {
  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>Contact</span></nav>
          <span className="pill">Start a conversation</span>
          <h1>Let&apos;s bring your business <em>into focus.</em></h1>
          <p className="lead">Tell us what you are building, fixing or growing. A founder, not a sales rep, replies within one business day with a useful next step.</p>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <a href={`mailto:${siteConfig.email}`}><span className="ci-label">Email</span><span className="ci-value">{siteConfig.email}</span></a>
            <a href={`tel:${siteConfig.phoneHref}`}><span className="ci-label">Phone</span><span className="ci-value">{siteConfig.phoneDisplay}</span></a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><span className="ci-label">WhatsApp</span><span className="ci-value">Message us directly ↗</span></a>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer"><span className="ci-label">Book a call</span><span className="ci-value">30-min call on Calendly ↗</span></a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"><span className="ci-label">LinkedIn</span><span className="ci-value">Follow Sixth Lens ↗</span></a>
            <a href={siteConfig.googleBusinessUrl} target="_blank" rel="noreferrer"><span className="ci-label">Google</span><span className="ci-value">Find us on Google Maps ↗</span></a>
            <div><span className="ci-label">Studio</span><span className="ci-value">Doha, Qatar</span><span style={{ color: "var(--grey)", fontWeight: 400, fontSize: 15 }}>Serving the GCC and clients worldwide</span></div>
          </div>
          <ContactFormV2 language="en" />
        </div>
      </div></section>
    </Shell>
  );
}
