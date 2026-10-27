import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";

export const metadata: Metadata = {
  title: { absolute: "Hire a Dedicated Product & Software Development Team | Sixth Lens" },
  description: "Add a connected product, design and software engineering team to your project. Flexible team engagement for businesses in Qatar, the GCC and international markets.",
  keywords: ["hire software development team Qatar", "dedicated development team GCC", "hire product development team", "software team augmentation", "web and mobile development team", "hire app developers Qatar"],
  alternates: { canonical: "/hire-a-team/" },
  openGraph: { title: "Hire a Product & Software Development Team | Sixth Lens", description: "Add product, design and engineering capacity with a team aligned to your goals and delivery needs.", url: "/hire-a-team/", type: "website" },
};

export default function HireTeamPage() {
  return <ContentPage kicker="Extend your team · Qatar, GCC & international" title="The right people" accent="around your product." lead="Bring in a connected product, design and engineering team to move an initiative forward. Align the engagement to your goals, existing people and technical environment, with clear roles and delivery checkpoints." serviceName="Product and software development team engagement" path="/hire-a-team/" sections={[
    { title: "Add a team around a defined outcome", body: "Start with the product milestone, capability gap or delivery challenge you need to address. We shape the team and working rhythm around that goal instead of adding roles without a clear purpose." },
    { title: "Connect product, design and engineering", body: "Bring the needed disciplines into one delivery conversation, with collaboration across your internal stakeholders.", points: ["Product strategy and delivery leadership", "UX/UI design and research", "Web, mobile and backend engineering", "Cloud, QA and technical support"] },
    { title: "Fit into your operating model", body: "Work with your current tools, ceremonies and technical standards. Agree on responsibilities, communication, access and decision-making before delivery begins." },
    { title: "Keep scope and progress visible", body: "Set priorities, milestones and review points together. Regular demos and clear ownership make it easier to adapt as requirements or team capacity change." },
  ]} />;
}
