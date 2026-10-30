import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/home-v2/shell";
import { img } from "@/data/home-v2";
import { serviceAreas, siteConfig } from "@/config/site";
import { lenses } from "@/data/home";

export function generateStaticParams() {
  return lenses.map((item) => ({ slug: item.slug }));
}

const serviceImage: Record<string, string> = {
  "web-development": "dashboard-screen",
  "digital-marketing": "meeting",
  "mobile-app-development": "mobile-app",
  "crm-automation": "team-working",
  "cloud-solutions": "cloud-server",
  "ai-data-solutions": "ai-abstract",
};

const serviceDetail: Record<string, { lead: string; approach: string; outcome: string }> = {
  "web-development": {
    lead: "Your website is the first judgement a customer makes about you. We build fast, accessible, bilingual sites and commerce experiences that earn trust in seconds and turn visits into enquiries.",
    approach:
      "We start with the customer journey and the business outcome, never a template. We map how people in Qatar and the GCC find, compare and decide. Then we shape the information architecture, Arabic and English content and strict performance budgets around it. Every build connects to your CRM and finance systems from day one, so the site works as part of the business, not as a brochure.",
    outcome:
      "Pages that load fast on real devices and networks, rank for the searches that matter and work for every visitor. You get a site your own team can run, measured by enquiries and conversions, not vanity metrics.",
  },
  "digital-marketing": {
    lead: "Attention is earned once, then it compounds. We build search, content and campaign systems around how customers in local, regional and international markets discover, compare and decide.",
    approach:
      "We run marketing as one connected system, not a stream of one-off posts. Organic and local search, paid campaigns, landing pages and content all aim at the same goal and feed the same CRM. Every click is accountable, and every lead is traced from first touch to closed deal.",
    outcome:
      "A demand engine you can read: which channels bring qualified enquiries, what each one costs and where the next riyal should go. It runs in Arabic and English by default, tuned for the WhatsApp-first habits that drive decisions in the GCC.",
  },
  "mobile-app-development": {
    lead: "A mobile app should remove friction, not just add an icon to a home screen. We design and build useful iOS, Android and cross-platform apps for customers, field teams and daily operations.",
    approach:
      "Before writing code, we help you decide what needs to be an app and what works better as a focused web workflow. Then we build offline-first flows for patchy connectivity, clean App Store and Google Play launches, and analytics that show how people use the product in the field.",
    outcome:
      "An app people open because it makes something faster: an order, a dispatch, an approval, a loyalty reward. It ships as a lean MVP and grows from real usage data, not guesswork.",
  },
  "crm-automation": {
    lead: "Most deals are not lost on price. They are lost in a thread nobody answered. We build one connected customer record that turns enquiries, WhatsApp conversations and follow-ups into a clear, measurable sales process.",
    approach:
      "We configure the CRM around how your team sells and connect WhatsApp and web forms directly to it. Routing, scoring and follow-up run automatically, so nothing sits unanswered. Sales, operations and finance all see the same customer record.",
    outcome:
      "Enquiries tracked end to end, response times you can measure and a pipeline leadership can trust. The full context travels with each customer, whoever picks up the conversation.",
  },
  "cloud-solutions": {
    lead: "Growth should not slow your operations down. We build secure, observable infrastructure and integrations that give growing teams room to move and show what everything costs.",
    approach:
      "We design cloud architecture for reliability and cost. CI/CD and observability surface issues before customers notice them. We also integrate the systems you already depend on. Security and regional data requirements are part of the plan from the start, not added at the end.",
    outcome:
      "Systems that stay up, deploy safely and cost what they should, with clear visibility into performance and spend. Scaling across the GCC and international markets becomes a planned decision, not a gamble.",
  },
  "ai-data-solutions": {
    lead: "We care about AI that earns its keep, not hype. We connect your data, remove repetitive work and give decision-makers a sharper, real-time view of the business.",
    approach:
      "We start from a specific decision or workflow and work backwards. Dashboards answer the questions you actually ask. AI assistants handle well-defined tasks. Automation clears repetitive work. Everything runs on your own data and is measured against outcomes.",
    outcome:
      "Fewer manual hours, earlier warning on hidden costs and a view of the business leadership can act on today. Applied AI, scoped to pay for itself.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = lenses.find((item) => item.slug === slug);
  if (!service) return {};
  const title = `${service.title} in Qatar, GCC & beyond`;
  const description = `${service.description} Sixth Lens, based in Doha, Qatar.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}/`,
      languages: { en: `/services/${slug}/`, "ar-QA": `/ar/services/${slug}/`, "x-default": `/services/${slug}/` },
    },
    openGraph: { title, description, url: `/services/${slug}/`, type: "website" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = lenses.find((item) => item.slug === slug);
  if (!service) notFound();

  const copy = serviceDetail[service.slug] ?? {
    lead: service.description,
    approach:
      "We learn your customer journey, operating context and existing systems. Then we shape a delivery plan around measurable business needs.",
    outcome:
      "A connected result you can run and measure, built around your outcome, not a fixed template.",
  };
  const photo = img(serviceImage[service.slug] ?? "qatar-business");
  const words = service.title.split(" ");
  const accent = words.length > 1 ? words[words.length - 1] : service.title;
  const head = words.length > 1 ? words.slice(0, -1).join(" ") : "";

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: siteConfig.legalName, url: siteConfig.url },
    areaServed: serviceAreas,
    url: `${siteConfig.url}/services/${slug}/`,
  };

  return (
    <Shell language="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />

      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Link href="/services/">Services</Link>
            <span>{service.title}</span>
          </nav>
          <span className="pill">
            {service.number} · {service.eyebrow}
          </span>
          <h1>
            {head ? `${head} ` : ""}
            <em>{accent}</em>
          </h1>
          <p className="lead">{copy.lead}</p>
          <div className="hero-ctas">
            <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
              Book a 30-min call ↗
            </a>
            <Link className="btn outline" href="/#contact">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="work-figure">
            <img src={photo} alt={`${service.title}, Sixth Lens`} loading="lazy" />
          </div>
          <div className="content-grid">
            <div className="content-sec">
              <h2>How we approach it</h2>
              <p>{copy.approach}</p>
            </div>
            <div className="content-sec">
              <h2>What you can expect</h2>
              <p>{copy.outcome}</p>
            </div>
            <div className="content-sec">
              <h2>What we can deliver</h2>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="content-sec">
              <h2>Built for the region</h2>
              <p>
                We are a Doha-based studio. This work ships in Arabic and English, WhatsApp-first where it
                matters, and ready for compliance and e-invoicing requirements in Qatar and the GCC. It works
                just as well for international teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="cta-band">
            <span className="ring" aria-hidden="true" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
              <span className="pill">Start here</span>
              <h2 className="h2">Let&apos;s scope your project.</h2>
              <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>
                Bring the outcome you want, not a spec. In a 30-minute call, we map the real problem, agree on a
                useful first release and give you an honest view of scope, timeline and cost. No deck, no
                obligation.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
                  Book a 30-min call ↗
                </a>
                <a className="btn outline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </div>
            </div>
            <div className="slots">
              <Link className="slot" href="/services/">
                <b>All services</b>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="slot" href="/portfolio/">
                <b>See our work</b>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="slot" href="/process/">
                <b>How we work</b>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
