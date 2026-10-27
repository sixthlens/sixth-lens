import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Custom Software & Digital Solutions | Sixth Lens", "Explore custom web, mobile and business systems built around the workflows, customers and integrations that make your organization different.", "/custom-solutions/");

export default function CustomSolutionsPage() {
  return <ContentPage kicker="Custom digital solutions" title="Technology fitted to" accent="your real workflow." lead="When standard tools do not fit the way your business works, a custom product can connect the gaps. We first assess whether to configure, integrate or build, then shape the smallest solution that meets the need." serviceName="Custom software and digital solutions" path="/custom-solutions/" sections={[
    { title: "Customer-facing products", body: "Create the digital services customers use to discover, choose and work with your business.", points: ["Websites, commerce and customer portals", "iOS, Android and cross-platform apps", "Marketplaces, booking and membership products"] },
    { title: "Internal business systems", body: "Give teams clear, reliable ways to complete work and understand what is happening.", points: ["Operations dashboards and internal tools", "Workflow automation and approvals", "Field service, scheduling and dispatch"] },
    { title: "Connected platforms", body: "Make existing software work together through practical integration and shared data flows.", points: ["CRM, ERP, finance and POS integrations", "APIs, cloud services and data pipelines", "AI-assisted workflows where appropriate"] },
    { title: "A fit-for-purpose approach", body: "We compare the operational cost and flexibility of available products with the value of a custom build. The recommendation follows the problem, your constraints and your plans for the system." },
  ]} />;
}
