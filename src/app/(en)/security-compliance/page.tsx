import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Security & Compliance Readiness | Sixth Lens", "Plan security-minded digital products and compliance readiness with Sixth Lens, from identity and data flows to integrations and operational controls.", "/security-compliance/");

export default function SecurityCompliancePage() {
  return <ContentPage kicker="Security · Compliance readiness" title="Build trust into" accent="the whole system." lead="Security and compliance affect architecture, data handling, integrations and daily operations. We help teams include these concerns early and make technical requirements visible." serviceName="Security and compliance readiness consultation" path="/security-compliance/" sections={[
    { title: "Security-minded architecture", body: "Review system boundaries, dependencies and access patterns while shaping the solution." },
    { title: "Identity and access", body: "Plan authentication, role-based permissions and account lifecycle around the people and systems that need access." },
    { title: "Data and integrations", body: "Map sensitive information, movement between systems, retention needs and the safeguards to discuss with your stakeholders." },
    { title: "Operational readiness", body: "Consider logging, backups, incident responsibilities, release practices and ongoing maintenance as part of delivery." },
    { title: "Compliance alignment", body: "We can help translate technical requirements into product and engineering work. Formal compliance determinations, certification and legal advice should be handled with the qualified specialists responsible for your organization." },
  ]} />;
}
