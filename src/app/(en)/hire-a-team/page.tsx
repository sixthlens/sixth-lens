import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";

export const metadata: Metadata = {
  title: { absolute: "Hire a Dedicated Product & Software Development Team | Sixth Lens" },
  description: "Hire a dedicated product, design and software development team in Qatar. Flexible engagements for businesses across the GCC and international markets.",
  keywords: ["hire software development team Qatar", "dedicated development team GCC", "hire product development team", "software team augmentation", "web and mobile development team", "hire app developers Qatar"],
  alternates: { canonical: "/hire-a-team/" },
  openGraph: { title: "Hire a Product & Software Development Team | Sixth Lens", description: "Add product, design and engineering capacity with a team aligned to your goals and delivery needs.", url: "/hire-a-team/", type: "website" },
};

export default function HireTeamPage() {
  return <ContentPage kicker="Extend your team · Qatar, GCC & international" title="The right people" accent="around your product." lead="Sometimes you don't need another vendor. You need capacity and senior judgment inside your team. We embed a product, design and engineering group around a defined goal. It works in your tools and your way, with clear roles and visible checkpoints." serviceName="Product and software development team engagement" path="/hire-a-team/" sections={[
    { title: "Add a team around a defined outcome", body: "We start from the milestone, capability gap or delivery challenge you need to close. Then we shape the team and working rhythm around it. You get people assembled for a purpose, not a list of billable roles." },
    { title: "Connect product, design and engineering", body: "You get the disciplines your project needs in one delivery conversation, working directly with your stakeholders. Decisions happen in days, not in forwarded email threads.", points: ["Product strategy and delivery lead", "UX/UI design and user research", "Web, mobile and backend engineering", "Cloud, QA and ongoing support"] },
    { title: "Fit into your operating model", body: "We work inside your tools, ceremonies and technical standards instead of imposing ours. Roles, communication, access and decision rights are agreed before work starts. The team is productive from the first sprint, not the third." },
    { title: "Keep scope and progress visible", body: "We set priorities, milestones and review points together and track them in the open. Regular demos and clear ownership make it easy to adjust as requirements or your team's capacity change." },
  ]} />;
}
