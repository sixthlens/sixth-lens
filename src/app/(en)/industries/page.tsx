import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata("Industries | Digital Solutions for Food, Logistics & Healthcare", "Explore how Sixth Lens shapes digital products and business systems for food and hospitality, logistics, healthcare, property, retail, events and other sectors.", "/industries/");

export default function IndustriesPage() {
  return <ContentPage kicker="Industries · Qatar, GCC & international" title="Solutions shaped around" accent="the work you do." lead="Every sector has its own customers, regulations and operating pressures. We combine digital product, data and workflow expertise around the realities of each business." sections={[
    { title: "Food & hospitality", body: "Connect the guest journey from discovery to service, helping hospitality teams make daily operations clearer.", points: ["Restaurant ordering and payment", "Guest, loyalty and reservation experiences", "POS, CRM and operational integrations"] },
    { title: "Logistics & mobility", body: "Give customers, drivers and operations teams a shared view of work as it moves through a network.", points: ["Dispatch and route workflows", "Driver and customer mobile apps", "Tracking, proof of delivery and operations dashboards"] },
    { title: "Healthcare & healthtech", body: "Design secure, accessible digital experiences that support care teams and health service operations.", points: ["Patient access and appointment journeys", "Clinical workflow and health data products", "Integration planning for healthcare systems"] },
    { title: "Property & facilities", body: "Improve how people discover, lease and manage spaces, and how teams handle ongoing service requests.", points: ["Property portals and enquiry management", "Tenant and maintenance workflows", "Field team scheduling and reporting"] },
    { title: "Retail & commerce", body: "Connect product discovery, purchase and after-sales service across digital and in-person channels.", points: ["E-commerce and customer portals", "Payments, loyalty and CRM", "Inventory and fulfilment integrations"] },
    { title: "Tourism, culture & events", body: "Help visitors and organizers move through clear, multilingual digital journeys before and during an experience.", points: ["Registration, ticketing and booking", "Multilingual visitor information", "On-site operations and communication"] },
    { title: "Professional & community services", body: "Make specialist services easier to access and give teams practical tools to coordinate people, information and follow-up.", points: ["Member and community platforms", "Research and knowledge workflows", "Lead management and service delivery"] },
  ]} />;
}
