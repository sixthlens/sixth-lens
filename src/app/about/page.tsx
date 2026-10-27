import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("About Sixth Lens | Digital Studio in Qatar, GCC & Beyond", "Meet Sixth Lens, a Doha-based technology studio helping organizations across Qatar, the GCC and international markets connect business goals with digital products.", "/about/");

export default function AboutPage() {
  return <ContentPage kicker="About Sixth Lens · Doha, Qatar" title="A clearer view of" accent="what technology can do." lead="Sixth Lens is an independent technology studio that brings business thinking, design and engineering together to make digital products and operations work better." sections={[
    { title: "What we do", body: "We help teams turn business priorities into useful digital services, internal tools and connected systems. That can mean improving one customer journey or joining up several parts of an operation.", points: ["Digital strategy and consultation", "Web and mobile product development", "CRM, cloud, data and applied AI"] },
    { title: "How we think", body: "Technology should solve a real customer or operating problem. We start with the outcome, understand the people and systems involved, then recommend a practical way to move forward." },
    { title: "Where we work", body: "Our studio is based in Doha. We work with organizations in Qatar, across the GCC and internationally, adapting delivery to the market, team and operating context." },
    { title: "Who we help", body: "We work with founders, growing businesses and established teams that need to launch a digital product, improve an existing system or make an important technology decision." },
  ]} />;
}
