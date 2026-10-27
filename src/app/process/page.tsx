import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Our Process | From Business Discovery to Digital Delivery", "See how Sixth Lens approaches discovery, planning, design, development, launch and ongoing improvement for digital projects.", "/process/");

export default function ProcessPage() {
  return <ContentPage kicker="How we work" title="A practical route from" accent="problem to progress." lead="A clear process helps everyone understand what is being solved, what is included and how decisions will be made. The exact stages are agreed around each project." sections={[
    { title: "1. Understand the business", body: "We discuss your goals, users, current processes, systems and constraints to establish what needs to change." },
    { title: "2. Map the opportunity", body: "We identify the key journeys, workflows, dependencies and risks, then agree what success should look like." },
    { title: "3. Define a useful scope", body: "We shape the solution, delivery stages and technical approach so the work fits your priorities and resources." },
    { title: "4. Design and build", body: "The team develops and reviews the experience and technology in clear increments, with feedback and decisions visible along the way." },
    { title: "5. Prepare for launch", body: "We plan testing, release, content, integrations and team readiness as part of delivery, rather than leaving them to the final step." },
    { title: "6. Improve with evidence", body: "After launch, we can help review how the product or workflow is performing and prioritize the next improvements." },
  ]} />;
}
