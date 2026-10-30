import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";

export const metadata: Metadata = {
  title: { absolute: "MVP Development in Qatar & GCC | Sixth Lens" },
  description: "MVP development in Qatar and the GCC. Product discovery, MVP scope, UX, web and mobile app development, launch and learning for startups and new ventures.",
  keywords: ["MVP development Qatar", "MVP development company GCC", "minimum viable product development", "startup MVP development", "MVP app development", "MVP software development", "product discovery and prototyping"],
  alternates: { canonical: "/mvp-development/" },
  openGraph: { title: "MVP Development in Qatar & GCC | Sixth Lens", description: "Turn a focused product hypothesis into a usable first release, then learn what to build next.", url: "/mvp-development/", type: "website" },
};

export default function MvpDevelopmentPage() {
  return <ContentPage kicker="MVP development · Qatar, GCC & international" title="Prove the product" accent="before you scale it." lead="An MVP exists to answer one important business question. It is not a shrunken version of the full vision. We help you name the riskiest assumption, scope a first release around it and build a focused web or mobile product that real users in Qatar and the GCC can test." serviceName="MVP product development" path="/mvp-development/" sections={[
    { title: "Start with the question", body: "We pin down what you most need to learn about the customer problem, the solution or the business model. That question drives the build. It keeps the first release small, sharp and informative, instead of expensive and incomplete." },
    { title: "Choose the minimum useful scope", body: "We map the core user journey, define the features it needs to work and deliberately park the rest. The line between \"launch\" and \"nice to have\" is where most MVP budgets are won or lost.", points: ["Product discovery and user flows", "Feature priorities and release plan", "Clickable prototype and technical plan"] },
    { title: "Design, build and launch", body: "We design a clear, usable experience and build the core workflows on a stack sized for an MVP and ready to grow. Analytics, feedback capture and operational basics go in before launch, so you start learning on day one.", points: ["UX/UI design, web or mobile build", "Backend, integrations and cloud setup", "QA, deployment and launch support"] },
    { title: "Learn what to do next", body: "We compare real usage and customer feedback against the assumptions we set out to test. Then we help you decide with evidence: refine, extend, pivot or stop. Either way, you know where the next investment should go." },
  ]} />;
}
