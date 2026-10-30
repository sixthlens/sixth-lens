import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Security & Compliance Readiness", "Security and compliance readiness for digital products: identity, access, data flows, integrations and operational controls, planned early by Sixth Lens.", "/security-compliance/");

export default function SecurityCompliancePage() {
  return <ContentPage kicker="Security · Compliance readiness" title="Build trust into" accent="the whole system." lead="Security and compliance are not a final checklist. They shape architecture, data handling, integrations and daily operations from day one. We help teams build them in early and make the technical requirements visible, so readiness is designed in, not retrofitted under pressure." serviceName="Security and compliance readiness consultation" path="/security-compliance/" sections={[
    { title: "Security-minded architecture", body: "We review system boundaries, dependencies and access patterns while the design is still cheap to change. The goal is simple: the secure path should also be the easy path for your teams.", points: ["Trust boundary and dependency review", "Secure defaults and patterns", "Threats mapped to real user journeys"] },
    { title: "Identity and access", body: "We plan authentication, role-based permissions and the full account lifecycle around the people, partners and systems that need access, and no one else. Clear access control is one of the strongest safeguards a product can have." },
    { title: "Data and integrations", body: "We map where sensitive data lives, how it moves between systems, how long to keep it and which safeguards to discuss with your stakeholders. In a connected GCC operation, the data crossing integrations often matters more than any single app." },
    { title: "Operational readiness", body: "Logging, backups, incident roles, release practices and ongoing maintenance are part of delivery, not an afterthought. A product is only as trustworthy as the way it runs once real users depend on it." },
    { title: "Compliance alignment", body: "We turn technical requirements into concrete product and engineering work, and keep your controls documented and traceable. Formal compliance determinations, certification and legal advice stay with the qualified specialists accountable for your organization. We make their job easier. We do not replace them." },
  ]} />;
}
