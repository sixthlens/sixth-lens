// Homepage v2 content model. Images are optimized WebP with SEO-descriptive
// filenames; `img(key)` maps a stable key to its file so call sites stay simple.
const IMAGE_FILES: Record<string, string> = {
  "doha-skyline": "doha-skyline-qatar-technology-studio",
  "doha-skyline-2": "doha-west-bay-skyline-qatar",
  "qatar-business": "msheireb-downtown-doha-business-district",
  "team-working": "software-development-team-qatar",
  "dashboard-screen": "analytics-dashboard-web-platform",
  "mobile-app": "mobile-app-development-qatar",
  "cloud-server": "cloud-solutions-data-center",
  "ai-abstract": "ai-data-solutions-technology",
  "food-hospitality": "restaurant-hospitality-technology",
  "logistics": "logistics-delivery-app-development",
  "healthcare-tech": "healthcare-technology-doha",
  "meeting": "digital-strategy-consultation-qatar",
};
export const img = (key: string) => `/images/v2/${IMAGE_FILES[key] ?? key}.webp`;
export const heroVideo = "/images/v2/doha-qatar-skyline-hero.mp4";
export const heroPoster = img("doha-skyline");

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "/portfolio/" },
  { label: "Industries", href: "/industries/" },
  { label: "E-invoicing", href: "/e-invoicing-qatar/" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroCounts = [
  { value: 7, suffix: "+", label: "Products in market" },
  { value: 6, suffix: "", label: "Connected service lenses" },
  { value: 7, suffix: "", label: "Industries served" },
  { value: 5, suffix: "", label: "Countries with live users" },
] as const;

export const clientLogos = ["Ultrasound.ai", "Quri", "Imateam", "Healing Trauma", "MUVN", "ADGM App", "NAREB"];

// SERVICES ACCORDION, exact aioapp "one platform to run your whole restaurant":
// flex row of image cards; hover expands a card + reveals a glass panel with features.
export const bentoServices = [
  { title: "Web platforms", href: "/services/web-development/", image: "dashboard-screen", features: ["Corporate websites", "E-commerce & portals", "Arabic and English", "CRM & finance integration", "SEO foundations", "Performance & accessibility"] },
  { title: "Mobile apps", href: "/services/mobile-app-development/", image: "mobile-app", features: ["iOS & Android", "Cross-platform builds", "Customer & field-team apps", "Offline-first workflows", "App Store launch", "Push & analytics"] },
  { title: "Digital marketing", href: "/services/digital-marketing/", image: "meeting", features: ["SEO & local search", "Paid campaigns", "Content systems", "Landing pages", "WhatsApp funnels", "Reporting dashboards"] },
  { title: "CRM & WhatsApp", href: "/services/crm-automation/", image: "team-working", features: ["CRM implementation", "WhatsApp automation", "Lead routing & scoring", "Follow-up sequences", "Sales pipeline", "Unified customer record"] },
  { title: "Cloud solutions", href: "/services/cloud-solutions/", image: "cloud-server", features: ["Cloud architecture", "DevOps & CI/CD", "Observability & reliability", "System integration", "Security hardening", "Cost optimization"] },
  { title: "Data & applied AI", href: "/services/ai-data-solutions/", image: "ai-abstract", features: ["Operational dashboards", "AI assistants", "Workflow automation", "Forecasting & insights", "Data pipelines", "Anomaly detection"] },
] as const;

// CAPABILITIES DASHBOARD (aioapp "one dashboard" pattern, adapted).
export const dashboard = {
  kicker: "One connected system",
  title: "See your whole business in one place.",
  body: "Customers, operations, finance and analytics usually live in separate tools. We connect them into one system. Decision-makers see the whole business in real time, in Arabic and English.",
  image: "dashboard-screen",
  chips: [
    { value: "1", label: "Source of truth" },
    { value: "24/7", label: "Live monitoring" },
  ],
  features: [
    { icon: "◳", title: "Unified data layer", desc: "Web, mobile, CRM and finance feed one live data model." },
    { icon: "◉", title: "Role-based dashboards", desc: "The right view for founders, operations and finance." },
    { icon: "✦", title: "Automation & AI assistants", desc: "Repetitive work runs itself. Anomalies surface before they cost you." },
    { icon: "⇄", title: "Bilingual, region-aware", desc: "RTL-ready and WhatsApp-first, built for how the GCC works." },
  ],
} as const;

// Capability stack: pinned scroll-swap section (sticky visual cross-fades as steps scroll).
export const capabilityStack = [
  { n: "01", title: "Strategy & UX", image: "meeting", desc: "We start from the business outcome. Then we shape product strategy, user flows and interface design around it.", points: ["Discovery & product strategy", "User flows & wireframes", "Bilingual UI design systems"] },
  { n: "02", title: "Web & mobile engineering", image: "mobile-app", desc: "Fast, scalable web platforms and iOS, Android and cross-platform apps. Built to convert and built to last.", points: ["Next.js, React, Flutter, native", "Commerce, portals & dashboards", "Arabic, English and RTL by default"] },
  { n: "03", title: "Cloud & DevOps", image: "cloud-server", desc: "Secure, observable infrastructure with automated delivery. Your team ships with confidence.", points: ["Cloud architecture on AWS & more", "CI/CD, monitoring & observability", "Reliability, security & cost control"] },
  { n: "04", title: "Data & applied AI", image: "ai-abstract", desc: "Dashboards, assistants and automation that turn your data into decisions people act on.", points: ["Operational dashboards", "LLM assistants & RAG on your data", "Workflow automation & forecasting"] },
  { n: "05", title: "Quality & ongoing support", image: "dashboard-screen", desc: "Testing, monitoring and iteration after launch. Launch is a stage, not the finish line.", points: ["Automated & manual QA", "Performance & security hardening", "Improvements from real usage"] },
] as const;

export const capScrollText = {
  en: { kicker: "One team, every layer", title: "Everything your build needs, in one team.", sub: "Each capability works on its own. Together they compound: you ship a product, not a pile of handoffs between vendors." },
  ar: { kicker: "فريق واحد، كل طبقة", title: "كل ما يحتاجه مشروعك، في فريق واحد.", sub: "كل قدرة تقف وحدها. ومجتمعةً، تتضاعف قيمتها، لتحصل على منتج متكامل لا على سلسلة تسليمات بين موردين." },
};
export const capabilityStackAr = [
  { n: "01", title: "الاستراتيجية وتجربة المستخدم", image: "meeting", desc: "نبدأ من نتيجة العمل، ثم نصمّم استراتيجية المنتج وتدفقات المستخدم والواجهات حولها.", points: ["اكتشاف واستراتيجية المنتج", "تدفقات المستخدم والنماذج الأولية", "أنظمة تصميم جاهزة لثنائية اللغة"] },
  { n: "02", title: "هندسة الويب والجوال", image: "mobile-app", desc: "منصات ويب سريعة وقابلة للتوسّع وتطبيقات iOS وأندرويد ومتعددة المنصات تُبنى للتحويل والبقاء.", points: ["Next.js وReact وFlutter والأصيل", "متاجر ومنصات ولوحات تحكم", "عربي وإنجليزي وRTL افتراضياً"] },
  { n: "03", title: "السحابة وDevOps", image: "cloud-server", desc: "بنية تحتية آمنة وقابلة للمراقبة مع تسليم آلي، ليشحن فريقك بثقة.", points: ["بنية سحابية على AWS وغيرها", "CI/CD ومراقبة وقابلية رصد", "موثوقية وأمن وضبط التكلفة"] },
  { n: "04", title: "البيانات والذكاء الاصطناعي", image: "ai-abstract", desc: "لوحات ومساعدات وأتمتة تحوّل بياناتك إلى قرارات ينفّذها الناس.", points: ["لوحات تشغيلية", "مساعدات LLM وRAG على بياناتك", "أتمتة وتنبؤ"] },
  { n: "05", title: "الجودة والدعم المستمر", image: "dashboard-screen", desc: "اختبار ومراقبة وتحسين بعد الإطلاق، لأن الإطلاق مرحلة لا خط النهاية.", points: ["اختبار آلي ويدوي", "أداء وأمن", "تحسين مستمر من الاستخدام الفعلي"] },
] as const;

// AI & next-generation technology section
export const aiTech = [
  { icon: "✦", tag: "GenAI", title: "Applied AI & LLM assistants", desc: "Chat assistants and copilots grounded in your own data (RAG), scoped to real tasks." },
  { icon: "◉", tag: "Vision", title: "Computer vision", desc: "Image and video analysis, OCR and automated quality checks for operations." },
  { icon: "⟳", tag: "Agents", title: "AI agents & automation", desc: "Agents that act across your tools and workflows, not just answer questions." },
  { icon: "▤", tag: "ML", title: "Predictive analytics", desc: "Forecasting, churn and anomaly detection that turn raw data into timely decisions." },
  { icon: "◇", tag: "NLP", title: "Conversational & voice", desc: "Arabic and English language AI for WhatsApp, chat and voice." },
  { icon: "⬡", tag: "Platform", title: "Data engineering & MLOps", desc: "Pipelines, feature stores and model monitoring that keep AI reliable in production." },
] as const;
export const aiEmerging = "We also assess IoT, AR/VR, edge computing and blockchain. We adopt them only where they create measurable value.";

export const facts = [
  { value: "$11bn", text: "AI is forecast to add US$11 billion to Qatar's economy by 2030.", src: "Invest Qatar & Accenture, 2024", navy: false },
  { value: "90%", text: "of CEOs in Qatar adopted generative AI in the past year, ahead of the 83% global average.", src: "PwC 28th CEO Survey, 2025", navy: true },
  { value: "$5.7bn", text: "Qatar's digital investments projected by 2026, up from US$1.65bn in 2022.", src: "PwC Qatar, 2025", navy: false },
  { value: "26,000", text: "new ICT jobs targeted by Qatar's Digital Agenda 2030.", src: "Digital Agenda 2030", navy: false },
] as const;

export const workTiles = [
  { name: "Imateam", meta: "Mobile · Community · US", href: "/work/imateam/", theme: "t-green", image: "team-working" },
  { name: "Quri", meta: "Hospitality · Commerce · Qatar", href: "/work/quri/", theme: "t-pink", image: "food-hospitality" },
  { name: "MUVN", meta: "Mobile · Logistics · Germany", href: "/work/muvn/", theme: "t-blue", image: "logistics" },
  { name: "ADGM App", meta: "Mobile · Business District · UAE", href: "/work/adgm-app/", theme: "t-teal", image: "qatar-business" },
  { name: "Ultrasound.ai", meta: "AI · Healthcare · Global", href: "/work/ultrasound-ai/", theme: "t-lime", image: "healthcare-tech" },
  { name: "NAREB", meta: "Mobile · Real Estate · US", href: "/work/nareb-realtist-connect/", theme: "t-red", image: "meeting" },
] as const;

// PRICING, engagement models for a studio (not SaaS seats).
export const pricingNote = "Clear engagement models. Every project starts with a free 30-minute scoping call. No deck, no obligation.";
export const pricingPlans = [
  {
    name: "Sprint", for: "Validate or fix one focused thing", price: "From $4k", unit: "/ 2–3 weeks", popular: false,
    features: ["One clear outcome: MVP, audit or fix", "Senior product lead and engineer", "Working software, not slides", "Clear scope, fixed timeline", "Handover docs + next-step plan"],
    cta: "Book a 30-min call",
  },
  {
    name: "Build", for: "Ship a real product to market", price: "From $18k", unit: "/ project", popular: true,
    features: ["Full product team: design and engineering", "Web, mobile, CRM, cloud or AI, connected", "Arabic and English by default", "Weekly demos, honest scoping", "Launch and 30-day post-launch review", "E-invoicing and compliance planning"],
    cta: "Start a project",
  },
  {
    name: "Scale", for: "Grow a live system over time", price: "Retainer", unit: "/ monthly", popular: false,
    features: ["Dedicated squad, your roadmap", "Continuous delivery & reliability", "Data, dashboards & AI improvements", "Priority support with agreed SLAs", "Growth across GCC & international markets"],
    cta: "Book a call",
  },
] as const;

export const testimonials = [
  { quote: "We came with a restaurant ordering idea and a POS we couldn't change. Sixth Lens mapped the whole guest journey first, then built around our constraints. Orders went live in three branches within ten weeks.", role: "Operations Director", org: "Restaurant group, Doha", avatar: "food-hospitality" },
  { quote: "The difference was perspective. They showed us our 'app problem' was a CRM and WhatsApp problem. Enquiries are now tracked end to end and our response time dropped from days to hours.", role: "Co-founder", org: "Property services startup, GCC", avatar: "meeting" },
  { quote: "A technical partner with business judgment is rare. Weekly demos, honest scoping, and a launch that actually happened on the date we agreed.", role: "Product Lead", org: "Logistics marketplace, Europe", avatar: "logistics" },
  { quote: "Our e-invoicing readiness went from a spreadsheet of worries to a mapped workflow between our ERP, accountant and provider in two weeks.", role: "Finance Manager", org: "Trading company, Qatar", avatar: "qatar-business" },
  { quote: "They built our member app and then kept improving it from real usage data. The post-launch reviews are the part most agencies skip.", role: "Executive Director", org: "Professional association, US", avatar: "team-working" },
] as const;

export const faqs = [
  { q: "Do you build websites and web platforms?", a: "Yes. We build fast, accessible websites, e-commerce stores and portals in Arabic and English. Each one connects to your CRM and finance systems from day one." },
  { q: "Do you offer mobile app development in Qatar?", a: "Yes. We build iOS, Android and cross-platform apps for customers, field teams and daily operations, from MVP to scale." },
  { q: "What does your digital marketing cover?", a: "SEO and local search, paid campaigns and content systems. Each is shaped around how customers in Qatar, the GCC and international markets discover and decide." },
  { q: "Can you set up CRM and WhatsApp automation?", a: "Yes. We implement CRMs, build WhatsApp workflows and automate sales follow-up. Every enquiry lands in one clear, measurable pipeline." },
  { q: "What cloud services do you provide?", a: "Cloud architecture, DevOps, reliability and system integration. Growing teams get room to scale without operational drag." },
  { q: "How do you use data and applied AI?", a: "We build operational dashboards, AI assistants and workflow automation. Each use case is scoped to a real task and measured against outcomes." },
  { q: "Can you help with e-invoicing and Peppol?", a: "Yes. We design structured e-invoice workflows (UBL XML, Peppol BIS Billing 3.0) and connect them to your ERP and accounting platform. Network access and tax advice stay with your chosen provider and adviser." },
  { q: "Do you work outside Qatar?", a: "Yes. Our products run in Qatar, the UAE, Germany, Korea and the US. We work remotely with teams worldwide and on-site across the GCC." },
] as const;

export const bookingSlots = [
  { day: "Tomorrow", time: "10:00 – 10:30" },
  { day: "Tomorrow", time: "14:00 – 14:30" },
  { day: "Thursday", time: "11:30 – 12:00" },
  { day: "More times", time: "→" },
] as const;
