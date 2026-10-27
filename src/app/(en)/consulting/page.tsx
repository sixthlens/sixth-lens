import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Business & Technical Consultation | Sixth Lens", "Book business or technical consultation with Sixth Lens for product strategy, process improvement, architecture, integrations, cloud and AI decisions.", "/consulting/");

export default function ConsultingPage() {
  return <ContentPage kicker="Consultation · Qatar, GCC & international" title="Make the next technology" accent="decision with clarity." lead="Use a focused consultation to work through a business challenge, test a product direction or get an independent technical view before committing to a larger project." serviceName="Business and technical consultation" path="/consulting/" sections={[
    { title: "Business consultation", body: "Clarify the outcome you need and the process or customer journey that should change.", points: ["Business process and workflow review", "Digital product and service strategy", "Scope, priorities and delivery planning"] },
    { title: "Technical consultation", body: "Get a grounded review of the technology choices and dependencies behind a product or system.", points: ["Solution architecture and platform choices", "API, CRM, ERP and data integrations", "Cloud, performance and scalability planning"] },
    { title: "Security and compliance planning", body: "Identify technical questions, data flows and control requirements to resolve with your security, legal or compliance stakeholders." },
    { title: "A useful next step", body: "A consultation can produce a decision brief, architecture outline, prioritized roadmap or clear recommendation for what to investigate next. We agree the format and scope before work begins." },
  ]} />;
}
