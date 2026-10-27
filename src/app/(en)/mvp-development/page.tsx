import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";

export const metadata: Metadata = {
  title: { absolute: "MVP Development in Qatar & GCC | Sixth Lens" },
  description: "Plan and build a minimum viable product with Sixth Lens. Product discovery, MVP scope, UX, web and mobile development, launch and learning for Qatar, GCC and global startups.",
  keywords: ["MVP development Qatar", "MVP development company GCC", "minimum viable product development", "startup MVP development", "MVP app development", "MVP software development", "product discovery and prototyping"],
  alternates: { canonical: "/mvp-development/" },
  openGraph: { title: "MVP Development in Qatar & GCC | Sixth Lens", description: "Turn a focused product hypothesis into a usable first release, then learn what to build next.", url: "/mvp-development/", type: "website" },
};

export default function MvpDevelopmentPage() {
  return <ContentPage kicker="MVP development · Qatar, GCC & international" title="Prove the product" accent="before you scale it." lead="A minimum viable product should answer an important question for your business. We help define the riskiest assumptions, prioritize the first release and build a focused web or mobile product that can be tested with real users." serviceName="MVP product development" path="/mvp-development/" sections={[
    { title: "Start with the question", body: "Identify what must be learned about the customer problem, the solution or the business model. Use that question to shape the first version, rather than treating an MVP as a smaller copy of a full product." },
    { title: "Choose the minimum useful scope", body: "Map the main user journey, define essential features and separate launch requirements from ideas that can wait.", points: ["Product discovery and user flows", "Feature prioritization and release planning", "Clickable prototype and technical plan"] },
    { title: "Design, build and launch", body: "Create a clear, usable experience and implement the core workflows with an appropriate technology stack. Prepare analytics, feedback capture and operational basics before release.", points: ["UX/UI design and web or mobile development", "Backend, integrations and cloud setup", "QA, deployment and launch support"] },
    { title: "Learn what to do next", body: "Review real usage and customer feedback against the original assumptions. Use the findings to refine, extend, pivot or stop with a clearer view of the next investment." },
  ]} />;
}
