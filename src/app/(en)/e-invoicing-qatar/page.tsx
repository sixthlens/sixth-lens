import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/home-v2/shell";
import { serviceAreas, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "E-Invoicing & Peppol Integration Qatar | Sixth Lens" },
  description: "E-invoicing in Qatar and the GCC, planned end to end: UBL XML, Peppol BIS Billing, ERP integration, validation, archiving and UAE mandate readiness.",
  keywords: ["e-invoicing Qatar", "Peppol integration Qatar", "Peppol e-invoicing", "Peppol BIS Billing 3.0", "UBL XML invoice integration", "EN 16931 e-invoicing", "e-invoicing UAE mandate readiness", "ERP e-invoice integration", "electronic invoicing GCC", "structured e-invoice workflow"],
  alternates: { canonical: "/e-invoicing-qatar/", languages: { en: "/e-invoicing-qatar/", "ar-QA": "/ar/e-invoicing-qatar/", "x-default": "/e-invoicing-qatar/" } },
  openGraph: { title: "E-Invoicing & Peppol Integration Qatar | Sixth Lens", description: "E-invoicing workflow design, Peppol and ERP integration planning for Qatar, the GCC and international markets.", url: "/e-invoicing-qatar/", type: "website" },
};

const data = { "@context": "https://schema.org", "@type": "Service", name: "E-invoicing and Peppol integration planning", serviceType: "Electronic invoicing workflow and systems integration", description: "Workflow planning for structured electronic invoices, Peppol and ERP connectivity, validation, archiving and finance system integration.", provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url }, areaServed: serviceAreas, url: `${siteConfig.url}/e-invoicing-qatar/`, knowsAbout: ["Peppol e-invoicing", "Peppol BIS Billing 3.0", "UBL XML", "EN 16931", "ERP integration"] };

export default function EInvoicingPage() {
  return (
    <Shell language="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />

      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>E-invoicing</span></nav>
          <span className="pill">Finance systems · Qatar, GCC &amp; international</span>
          <h1>E-invoicing, <em>engineered end to end.</em></h1>
          <p className="lead">A structured e-invoice is never just a document. It moves through sales, procurement, finance and records, and through every system in between. We help you plan that flow so the change lands cleanly across the whole operation.</p>
          <div className="hero-ctas">
            <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a 30-min call ↗</a>
            <Link className="btn outline" href="/#contact">Start a project</Link>
          </div>
        </div>
      </section>

      <section className="sec"><div className="wrap">
        <div className="content-grid">
          <section className="content-sec">
            <h2>Connect the full workflow</h2>
            <p>Most e-invoicing problems live in the handoffs, not the invoice. We map how each invoice is created, validated, approved, archived and reconciled. Then we show where manual steps and disconnected systems slow the cycle down. From there, we plan a staged rollout your finance and technology teams can deliver.</p>
            <ul>
              <li>Map invoice, master-data and approval flows</li>
              <li>Find manual handoffs and exception bottlenecks</li>
              <li>Design approvals and audit-ready records</li>
              <li>Plan a phased rollout your teams own</li>
            </ul>
          </section>
          <section className="content-sec">
            <h2>Prepare with clarity</h2>
            <p>Readiness starts with knowing your own data. Before any provider is involved, we review your invoice and master data, the integration points that matter and the exceptions that need a human. You get a clear brief for any procurement or build decision.</p>
            <ul>
              <li>Review invoice and master-data quality</li>
              <li>Define integration points and exceptions</li>
              <li>Clarify roles, owners and decision points</li>
              <li>Align technical readiness with your provider</li>
            </ul>
          </section>
          <section className="content-sec">
            <h2>Peppol and structured e-invoice integration</h2>
            <p>For cross-border and B2B workflows, we assess whether Peppol e-invoicing fits your markets and trading partners. Then we plan the system connections that carry structured invoice data. That covers UBL XML and Peppol BIS Billing 3.0 / EN 16931 requirements where they apply. It also shows how invoices move between your ERP, accounting platform and chosen service provider.</p>
          </section>
          <section className="content-sec">
            <h2>Regional readiness across the GCC</h2>
            <p>Requirements are changing across Qatar, the GCC and international markets, including the UAE e-invoicing mandate. We document current workflows, surface integration gaps and build a plan that adapts as rules take shape. We coordinate with your tax adviser and chosen provider, so the technical work matches the obligations they confirm.</p>
          </section>
        </div>

        <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
          <span className="ring" aria-hidden="true" />
          <div>
            <p className="kicker" style={{ color: "#fff", opacity: 0.85 }}>Where we fit</p>
            <h2 className="h2">What we plan, and what stays with your provider.</h2>
            <p style={{ maxWidth: "720px", opacity: 0.9, marginTop: "6px" }}>Our role is workflow, software and integration planning. We are not a Peppol service provider, and we do not give tax or legal advice. Network access, accreditation, tax interpretation and formal compliance depend on your chosen provider and the rules that apply to you. We make the technical path clear so those conversations are simple.</p>
            <div className="hero-ctas" style={{ marginTop: "22px" }}>
              <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a 30-min call ↗</a>
              <Link className="btn outline" href="/#einvoicing">Back to overview</Link>
            </div>
          </div>
        </div>
      </div></section>
    </Shell>
  );
}
