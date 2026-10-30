import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Our Process | From Discovery to Delivery", "How Sixth Lens runs software development projects: discovery, planning, design, development, launch and ongoing improvement, with clear scope at every stage.", "/process/");

export default function ProcessPage() {
  return <ContentPage kicker="How we work · Discovery to delivery" title="A practical route from" accent="problem to progress." lead="A clear process keeps everyone aligned on what we are solving, what is in scope and how decisions get made. The stages below are our default rhythm. We adapt the exact plan to each project, team and market." sections={[
    { title: "1. Understand the business", body: "We start with your goals, your users and the commercial pressure behind the project. We review current processes, systems and constraints, so we solve the real problem, not the first symptom described.", points: ["Stakeholder and user conversations", "Current systems and workflow review", "What must change, and why"] },
    { title: "2. Map the opportunity", body: "We chart the key journeys, workflows, dependencies and risks. Then we agree on what success looks like in numbers and behaviour. Assumptions get tested here, before they become expensive." },
    { title: "3. Define a useful scope", body: "We shape the solution, delivery stages and technical approach to fit your priorities, budget and timeline. The scope is honest about trade-offs and sequenced to deliver value early, not all at the end." },
    { title: "4. Design and build", body: "Product, design and engineering work in clear increments, reviewing the experience and the technology as they take shape. Decisions and progress stay visible, so milestones bring no surprises.", points: ["Interface and workflow design", "Engineering in reviewable increments", "Regular demos and open decisions"] },
    { title: "5. Prepare for launch", body: "Testing, release, content, integrations and team readiness are planned as part of delivery, not added at the end. We rehearse the launch so the day itself is calm and the handover to your team is clean." },
    { title: "6. Improve with evidence", body: "After go-live, we can review performance against the goals we set, gather real usage and feedback, and prioritize the next round of improvements. Good software keeps earning its keep." },
  ]} />;
}
