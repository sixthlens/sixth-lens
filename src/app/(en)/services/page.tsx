import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/home-v2/shell";
import { img } from "@/data/home-v2";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/seo";
import { lenses } from "@/data/home";

export const metadata: Metadata = pageMetadata(
  "Services | Web, Mobile App, CRM, Cloud & AI Development",
  "Web development, mobile app development, digital marketing, CRM and WhatsApp automation, cloud and AI by Sixth Lens in Doha, for Qatar and the GCC.",
  "/services/",
);

const serviceImage: Record<string, string> = {
  "web-development": "dashboard-screen",
  "digital-marketing": "meeting",
  "mobile-app-development": "mobile-app",
  "crm-automation": "team-working",
  "cloud-solutions": "cloud-server",
  "ai-data-solutions": "ai-abstract",
};

export default function ServicesPage() {
  return (
    <Shell language="en">
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>Services</span>
          </nav>
          <span className="pill">Six connected lenses</span>
          <h1>
            One studio. <em>Six</em> ways to move the business.
          </h1>
          <p className="lead">
            Most teams do not have a website problem or an app problem. They have a connected-system
            problem. Each lens below is a focused service you can start on its own. Each one also plugs
            into the others, so web, marketing, mobile, CRM, cloud and AI give you one picture of your
            business across Qatar, the GCC and international markets.
          </p>
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
          <div className="srv-list">
            {lenses.map((item) => (
              <Link className="srv-row" href={`/services/${item.slug}/`} key={item.slug}>
                <span className="srv-n">{item.number}</span>
                <div>
                  <span className="srv-eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <img src={img(serviceImage[item.slug] ?? "dashboard-screen")} alt={item.title} loading="lazy" />
                <span className="srv-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="cta-band">
            <span className="ring" aria-hidden="true" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
              <span className="pill">Start here</span>
              <h2 className="h2">Not sure which lens you need?</h2>
              <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>
                Bring the outcome you want, not a spec. In a 30-minute call, we map the real problem, name the
                one or two lenses that matter first and give you an honest view of scope. No deck, no
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
              <Link className="slot" href="/startups/">
                <b>For startups</b>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="slot" href="/mvp-development/">
                <b>MVP development</b>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="slot" href="/hire-a-team/">
                <b>Hire a team</b>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="slot" href="/consulting/">
                <b>Book a consultation</b>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
