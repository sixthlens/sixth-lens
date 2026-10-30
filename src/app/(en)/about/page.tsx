import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("About Us | Technology Studio in Doha, Qatar", "Meet Sixth Lens, a Doha technology studio building web platforms, mobile apps, CRM, cloud and AI systems for businesses in Qatar, the GCC and beyond.", "/about/");

export default function AboutPage() {
  return <ContentPage kicker="About Sixth Lens · Doha, Qatar" title="A clearer view of" accent="what technology can do." lead="Sixth Lens is an independent technology studio in Doha. We put business thinking, design and engineering in one room. Your products, platforms and daily operations then work the way a modern business in Qatar and the GCC needs them to." sections={[
    { title: "What we do", body: "We turn business priorities into digital services, internal tools and connected systems that teams use every day. Some projects sharpen a single customer journey. Others connect web, mobile, CRM, cloud and data across a whole operation. Either way, the work holds up in production, not just in a demo.", points: ["Digital strategy, consulting and roadmaps", "Web and mobile design and engineering", "CRM, cloud, data and applied AI", "E-invoicing and finance-system integration"] },
    { title: "How we think", body: "Technology earns its place only when it solves a real customer or operating problem. We start from the outcome you need and map the people and systems involved. Then we recommend the most direct route: configure a tool you already have, integrate what you run, or build something custom." },
    { title: "Where we work", body: "Our studio is in Doha, and we work in Arabic and English. We serve organizations across Qatar and the GCC, plus international teams operating in the region. We adapt delivery to each market, its regulations and each client's way of working." },
    { title: "Who we partner with", body: "Founders testing a first product. Growing businesses modernizing their operations. Established teams making a decision they can't afford to get wrong. In every case, we work as one team accountable for the outcome, not a set of disconnected vendors." },
  ]} />;
}
