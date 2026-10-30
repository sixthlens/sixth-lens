export const lenses = [
  { number: "01", eyebrow: "Presence", title: "Web platforms", slug: "web-development", description: "Fast, bilingual websites and e-commerce built to earn trust and turn visitors into enquiries in Qatar and the GCC.", deliverables: ["Corporate websites", "E-commerce", "Portals and platforms"] },
  { number: "02", eyebrow: "Attention", title: "Digital marketing", slug: "digital-marketing", description: "Search, content and campaign systems shaped around how customers in local, regional and international markets discover, compare and decide.", deliverables: ["SEO and local search", "Paid campaigns", "Content systems"] },
  { number: "03", eyebrow: "Access", title: "Mobile app development", slug: "mobile-app-development", description: "Useful iOS, Android and cross-platform apps designed for customers, field teams and everyday operations.", deliverables: ["Customer apps", "Field operations", "Loyalty experiences"] },
  { number: "04", eyebrow: "Memory", title: "CRM and automation", slug: "crm-automation", description: "A connected customer record that turns enquiries, WhatsApp conversations and follow-ups into a clear sales process.", deliverables: ["CRM implementation", "WhatsApp workflows", "Sales automation"] },
  { number: "05", eyebrow: "Scale", title: "Cloud systems", slug: "cloud-solutions", description: "Secure, observable infrastructure and integrations that give growing teams room to move without adding operational drag.", deliverables: ["Cloud architecture", "DevOps and reliability", "System integration"] },
  { number: "06", eyebrow: "Clarity", title: "Data and applied AI", slug: "ai-data-solutions", description: "Practical intelligence that connects your data, removes repetitive work and gives decision-makers a sharper view.", deliverables: ["Operational dashboards", "AI assistants", "Workflow intelligence"] },
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

export const projects = [
  { name: "Ultrasound.ai", slug: "ultrasound-ai", category: "AI · Healthcare", wordmark: "ultrasound.ai", theme: "coral", image: "/images/projects/ultrasound-ai-workflow.svg", imageAlt: "Concept illustration of an AI-assisted ultrasound image review workflow", url: "https://ultrasound.ai/", description: "An AI-supported ultrasound platform applying machine learning to early pregnancy prediction.", useCase: "Help clinical teams assess scans sooner and support timely care decisions." },
  { name: "Quri", slug: "quri", category: "Hospitality · Commerce", wordmark: "quri", theme: "blue", image: "/images/projects/quri.webp", imageAlt: "Quri digital dining product experience", url: "https://quri.co/", description: "A mobile-friendly dining experience for QR ordering, payment and loyalty, connected to restaurant POS systems.", useCase: "Give guests a faster way to browse and pay while reducing front-of-house friction." },
  { name: "Imateam", slug: "imateam", category: "Mobile · Community", wordmark: "imateam", theme: "pink", image: "/images/projects/imateam.webp", imageAlt: "Imateam sports community product interface", url: "https://imateam.us/", description: "A social platform for players to connect, collaborate and manage their profiles.", useCase: "Make it easier for people to find teammates and build sports communities." },
  { name: "Healing Trauma", slug: "healing-trauma", category: "Healthcare · Research", wordmark: "healing trauma", theme: "mint", image: "/images/projects/healing-trauma.png", imageAlt: "Healing Trauma research platform page visual", url: "https://healingtrauma.co.kr/", description: "A research platform for licensed clinicians and researchers studying trauma.", useCase: "Support specialist knowledge sharing and research workflows in a sensitive field." },
  { name: "MUVN", slug: "muvn", category: "Mobile · Logistics", wordmark: "MUVN", theme: "yellow", image: "/images/projects/muvn.webp", imageAlt: "MUVN bulky-goods delivery service", url: "https://muvn.de/en/app", description: "A two-sided transport marketplace matching people who need bulky goods moved with drivers who have spare capacity on planned trips.", useCase: "Make long-distance delivery more accessible while helping drivers earn from unused vehicle space; includes route matching, tracking and transport protection." },
  { name: "ADGM App", slug: "adgm-app", category: "Mobile · Business District", wordmark: "ADGM", theme: "blue", image: "/images/projects/adgm.webp", imageAlt: "ADGM App screens for business district services and community", url: "https://www.adgm.com/initiatives/adgm-app", description: "A digital companion for businesses, professionals and residents to access Abu Dhabi Global Market district news, services, business tools, networking and lifestyle offers.", useCase: "Bring business services, community connection, events and district life into one accessible mobile experience." },
  { name: "NAREB Realtist Connect", slug: "nareb-realtist-connect", category: "Mobile · Real Estate", wordmark: "NAREB", theme: "coral", image: "/images/projects/nareb.webp", imageAlt: "NAREB Realtist Connect mobile app listing image", url: "https://www.nareb.com/", description: "A member app for the National Association of Real Estate Brokers, supporting professional networking, events, learning resources, referrals and business visibility.", useCase: "Help real estate professionals build connections, manage event participation and discover education and local business opportunities." },
] as const;

export const insights = [
  { category: "Mobile product strategy", title: "When does a business need a mobile app?", summary: "A practical way to compare a native app, a web experience and a focused mobile workflow." },
  { category: "Qatar e-invoicing", title: "Preparing finance workflows for structured e-invoicing", summary: "Map invoice creation, approvals, records and integrations before choosing a technical approach." },
  { category: "Digital operations", title: "Connecting leads from discovery to delivery", summary: "How websites, WhatsApp and CRM can preserve context through the customer journey." },
] as const;

export const faqs = [
  { question: "Does Sixth Lens work with businesses outside Qatar?", answer: "Yes. Qatar is our home market and informs how we design, but our web, mobile, CRM, cloud and marketing services can support regional and international teams." },
  { question: "Can you improve an existing system instead of rebuilding it?", answer: "Yes. We begin with a practical audit, identify the highest-impact gaps and recommend whether to integrate, modernize or rebuild only where it creates clear value." },
  { question: "Will the website support Arabic and English?", answer: "We can design bilingual experiences with right-to-left layouts, Arabic content workflows and language-aware search foundations as part of the project scope." },
  { question: "How do projects start?", answer: "Projects begin with a focused strategy session. We align on the business outcome, users, scope, delivery plan and the measures that will define success." },
] as const;
