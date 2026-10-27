import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";

export const metadata: Metadata = {
  title: { absolute: "Startup Product Development & Technology Partner | Sixth Lens" },
  description: "A technology partner for startups in Qatar, the GCC and international markets. Validate ideas, shape a product roadmap and build a scalable digital foundation.",
  keywords: ["startup technology partner Qatar", "startup software development GCC", "startup product development", "startup app development", "technology partner for startups", "startup MVP Qatar"],
  alternates: { canonical: "/startups/" },
  openGraph: { title: "Startup Product Development | Sixth Lens", description: "Validate, plan and build digital products with a startup technology partner serving Qatar, the GCC and international markets.", url: "/startups/", type: "website" },
};

export default function StartupsPage() {
  return <ContentPage kicker="For startups · Qatar, GCC & international" title="Build the right" accent="thing, at the right time." lead="From early idea to growing product, Sixth Lens helps startup teams make clear product and technology decisions, test assumptions and build a foundation that can evolve with the business." serviceName="Startup product strategy and development" path="/startups/" sections={[
    { title: "Get from idea to a useful first release", body: "Clarify the problem, target users and commercial assumptions before committing to a large build. We help founders define the smallest useful product and what evidence will guide the next investment.", points: ["Product discovery and validation planning", "Customer journeys and feature prioritization", "Prototype and MVP scope"] },
    { title: "Build a foundation that can grow", body: "Choose a practical architecture and delivery approach for the product stage you are in. Ship the core experience, learn from usage and extend it as customers and operations develop.", points: ["Web and mobile product development", "Cloud, integrations and analytics", "Security, privacy and release planning"] },
    { title: "Work with one connected team", body: "Bring product thinking, design and engineering into the same conversation. We can work alongside founders, internal teams and specialist partners across Qatar, the GCC and international markets." },
    { title: "Keep decisions tied to outcomes", body: "Agree on the user problem and business signals first, then use them to guide scope, milestones and future improvements. This helps teams focus effort on adoption and value rather than feature count." },
  ]} />;
}
