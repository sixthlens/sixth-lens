import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";

export const metadata: Metadata = {
  title: { absolute: "Startup Product Development & Technology Partner | Sixth Lens" },
  description: "Startup technology partner in Qatar and the GCC. Validate ideas, plan your product roadmap and build web and mobile software that grows with your business.",
  keywords: ["startup technology partner Qatar", "startup software development GCC", "startup product development", "startup app development", "technology partner for startups", "startup MVP Qatar"],
  alternates: { canonical: "/startups/" },
  openGraph: { title: "Startup Product Development | Sixth Lens", description: "Validate, plan and build digital products with a startup technology partner in Qatar, the GCC and international markets.", url: "/startups/", type: "website" },
};

export default function StartupsPage() {
  return <ContentPage kicker="For startups · Qatar, GCC & international" title="Build the right" accent="thing, at the right time." lead="Early products fail more often from building the wrong thing well than from building the right thing badly. Sixth Lens helps founders in Qatar and the GCC make clear product and technology calls, test assumptions cheaply and build a foundation that grows with the business." serviceName="Startup product strategy and development" path="/startups/" sections={[
    { title: "Get from idea to a useful first release", body: "We clarify the problem, the target users and the commercial assumptions before a big build eats your runway. Together we define the smallest useful product. We also agree what evidence will tell you to keep going.", points: ["Discovery and validation planning", "Customer journeys and feature priorities", "Prototype and MVP scope"] },
    { title: "Build a foundation that can grow", body: "We match the architecture and delivery approach to your stage: lean enough to ship now, solid enough to survive your first wave of traction. You launch the core experience, learn from real usage and extend as customers arrive.", points: ["Web and mobile product development", "Cloud, integrations and analytics", "Security, privacy and release planning"] },
    { title: "Work with one connected team", body: "Product, design and engineering sit in the same conversation. You don't have to stitch freelancers together or translate between them. We work alongside founders, in-house teams and specialist partners in Qatar, the GCC and international markets." },
    { title: "Keep decisions tied to outcomes", body: "First we agree on the user problem and the business signals that matter. Those signals then drive scope, milestones and every later improvement. The team stays focused on adoption and value, not on feature count." },
  ]} />;
}
