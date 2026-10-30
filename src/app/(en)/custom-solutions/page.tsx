import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Custom Software Development in Qatar", "Custom software development by Sixth Lens in Doha: web, mobile and business systems built around your workflows, customers and existing integrations.", "/custom-solutions/");

export default function CustomSolutionsPage() {
  return <ContentPage kicker="Custom digital solutions" title="Technology fitted to" accent="your real workflow." lead="When off-the-shelf tools fight the way your business works, the workarounds become the cost. We first assess whether to configure, integrate or build. Then we shape the smallest solution that solves the problem and can grow from there." serviceName="Custom software and digital solutions" path="/custom-solutions/" sections={[
    { title: "Customer-facing products", body: "This is the digital front door customers use to find, choose and keep working with you. We design experiences that feel easy and hold up under real traffic, in Arabic and English where the market needs both.", points: ["Websites, commerce and customer portals", "iOS, Android and cross-platform apps", "Marketplaces, booking and membership"] },
    { title: "Internal business systems", body: "These are the tools your teams use to get work done and see what is happening across the operation. We replace spreadsheets and manual chasing with systems that make the next action obvious.", points: ["Operations dashboards and internal tools", "Workflow automation and approvals", "Field service, scheduling and dispatch"] },
    { title: "Connected platforms", body: "Your systems are only as useful as the data moving between them. We connect existing software through practical integrations and reliable data flows. Where it earns its place, we add AI that removes real effort instead of adding noise.", points: ["CRM, ERP, finance and POS integrations", "APIs, cloud services and data pipelines", "AI-assisted workflows where they help"] },
    { title: "A fit-for-purpose approach", body: "We weigh the long-term cost and flexibility of a ready-made product against the value of a tailored build. We give you an honest answer, even when it is \"don't build it.\" The recommendation follows your problem, your constraints and your plans for the system, not a preference for more code." },
  ]} />;
}
