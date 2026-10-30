import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Business & Technical Consulting in Qatar", "Book business or technical consulting with Sixth Lens in Doha: product strategy, process improvement, architecture, integrations, cloud and AI decisions.", "/consulting/");

export default function ConsultingPage() {
  return <ContentPage kicker="Consultation · Qatar, GCC & international" title="Make the next technology" accent="decision with clarity." lead="A focused consultation is the fastest way to pressure-test a business challenge, product direction or architecture choice before you commit budget. You leave with an independent view and a recommendation you can act on." serviceName="Business and technical consultation" path="/consulting/" sections={[
    { title: "Business consultation", body: "We clarify the outcome you want and the process or customer journey that has to change to reach it. The conversation stays tied to commercial value, not technology for its own sake.", points: ["Process and workflow review", "Digital product and service strategy", "Scope, priorities and delivery order"] },
    { title: "Technical consultation", body: "Get an honest review of the technology choices, dependencies and risks behind a product or system. It works whether you are starting fresh or inheriting something that needs to scale.", points: ["Solution architecture and platform choices", "API, CRM, ERP and data integrations", "Cloud, performance and scalability planning"] },
    { title: "Security and compliance planning", body: "We surface technical questions, data flows and control requirements early. Your security, legal and compliance stakeholders can then resolve them before they become late surprises. We frame the engineering. Formal determinations stay with your qualified specialists." },
    { title: "A clear next step", body: "A consultation can produce a decision brief, an architecture outline, a prioritized roadmap or a plain recommendation on what to investigate next. We agree on format, depth and scope up front, so your team can use the output as soon as the session ends." },
  ]} />;
}
