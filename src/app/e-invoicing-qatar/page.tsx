import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "E-Invoicing Solutions in Qatar | Sixth Lens" },
  description: "Plan structured e-invoicing workflows with Sixth Lens. Connect invoice creation, validation, archiving and finance or ERP systems for Qatar and regional requirements.",
  alternates: { canonical: "/e-invoicing-qatar/" },
  openGraph: { title: "E-Invoicing Solutions in Qatar | Sixth Lens", description: "Practical e-invoicing workflow design and integration for growing businesses.", url: "/e-invoicing-qatar/", type: "website" },
};

const data = { "@context": "https://schema.org", "@type": "Service", name: "E-invoicing workflow and integration", serviceType: "Electronic invoicing systems integration", description: "Workflow planning and software integration for structured electronic invoices, validation, archiving and finance system connectivity.", provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url }, areaServed: [{ "@type": "Country", name: "Qatar" }, { "@type": "Country", name: "United Arab Emirates" }], url: `${siteConfig.url}/e-invoicing-qatar/` };

export default function EInvoicingPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><SiteHeader/><main className="detail-page"><p className="kicker">Finance systems · Qatar and the region</p><h1>E-invoicing,<br/><em>ready for the next step.</em></h1><p className="detail-lead">Structured e-invoices affect more than the document. They touch sales, procurement, finance, records and the software that moves information between them.</p><div className="detail-columns"><section><h2>Connect the full workflow</h2><p>Sixth Lens helps map invoice creation, data validation, approval, secure archiving and integration with accounting or ERP systems. We can assess your current tools, identify manual handoffs and plan a staged implementation with your finance and technology teams.</p></section><section><h2>Prepare with clarity</h2><ul><li>Review invoice and master-data flows</li><li>Plan integration points and exception handling</li><li>Design practical approvals and audit records</li><li>Coordinate technical readiness with your chosen provider</li></ul></section></div><p className="detail-lead">Businesses trading across the Gulf may also need to consider evolving frameworks such as the UAE e-invoicing programme. We support workflow and systems readiness; implementation scope should be confirmed against current local rules and your tax adviser.</p><Link className="button" href="/#contact">Discuss your e-invoicing workflow <span>↗</span></Link><p className="detail-back"><Link href="/#einvoicing">← Back to Sixth Lens</Link></p></main><SiteFooter/></>;
}
