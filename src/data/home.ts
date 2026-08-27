export const lenses = [
  { number: "01", eyebrow: "Presence", title: "Web platforms", description: "Fast, accessible websites and commerce experiences built to earn trust in Qatar and convert attention into action.", deliverables: ["Corporate websites", "E-commerce", "Portals and platforms"] },
  { number: "02", eyebrow: "Attention", title: "Digital marketing", description: "Search, content and campaign systems shaped around how customers in Qatar discover, compare and decide.", deliverables: ["SEO and local search", "Paid campaigns", "Content systems"] },
  { number: "03", eyebrow: "Access", title: "Mobile products", description: "Useful iOS, Android and cross-platform apps designed for customers, field teams and everyday operations.", deliverables: ["Customer apps", "Field operations", "Loyalty experiences"] },
  { number: "04", eyebrow: "Memory", title: "CRM and automation", description: "A connected customer record that turns enquiries, WhatsApp conversations and follow-ups into a clear sales process.", deliverables: ["CRM implementation", "WhatsApp workflows", "Sales automation"] },
  { number: "05", eyebrow: "Scale", title: "Cloud systems", description: "Secure, observable infrastructure and integrations that give growing teams room to move without adding operational drag.", deliverables: ["Cloud architecture", "DevOps and reliability", "System integration"] },
  { number: "06", eyebrow: "Clarity", title: "Data and applied AI", description: "Practical intelligence that connects your data, removes repetitive work and gives decision-makers a sharper view.", deliverables: ["Operational dashboards", "AI assistants", "Workflow intelligence"] },
] as const;

export const qatarOffers = [
  { code: "LAUNCH", title: "Qatar digital launch", description: "A credible brand, high-performance website and local discovery foundation for a new or repositioned business.", audience: "For new ventures and market entrants" },
  { code: "GROW", title: "Demand-to-deal engine", description: "Campaigns, landing pages, WhatsApp, CRM and follow-up automation working as one measurable journey.", audience: "For service, property and B2B teams" },
  { code: "OPERATE", title: "Smart field operations", description: "Mobile workflows, dispatch, approvals and dashboards for teams delivering work away from a desk.", audience: "For logistics, facilities and field services" },
  { code: "EXPERIENCE", title: "Visitor and event systems", description: "Registration, ticketing, multilingual journeys and real-time operations for high-volume experiences.", audience: "For tourism, culture and events" },
] as const;

export const journeySteps = [
  ["01", "A customer discovers your campaign or local search result"],
  ["02", "A focused landing page turns interest into an enquiry"],
  ["03", "WhatsApp or a form captures the conversation without friction"],
  ["04", "CRM routes the lead, triggers follow-up and preserves context"],
  ["05", "A live dashboard shows what is working and where to act next"],
] as const;

export const faqs = [
  { question: "Does Sixth Lens work with businesses outside Qatar?", answer: "Yes. Qatar is our home market and informs how we design, but our web, mobile, CRM, cloud and marketing services can support regional and international teams." },
  { question: "Can you improve an existing system instead of rebuilding it?", answer: "Yes. We begin with a practical audit, identify the highest-impact gaps and recommend whether to integrate, modernize or rebuild only where it creates clear value." },
  { question: "Will the website support Arabic and English?", answer: "We can design bilingual experiences with right-to-left layouts, Arabic content workflows and language-aware search foundations as part of the project scope." },
  { question: "How do projects start?", answer: "Projects begin with a focused strategy session. We align on the business outcome, users, scope, delivery plan and the measures that will define success." },
] as const;
