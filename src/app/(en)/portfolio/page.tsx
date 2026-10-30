import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/home-v2/shell";
import { pageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/home";

export const metadata: Metadata = pageMetadata(
  "Our Work | Mobile Apps, Web Platforms & Digital Products",
  "Selected Sixth Lens work: mobile apps, web platforms and digital products across healthtech, hospitality, sports communities, research and logistics.",
  "/portfolio/",
);

export default function PortfolioPage() {
  return (
    <Shell language="en">
      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <span>Work</span>
          </nav>
          <span className="pill">Selected work</span>
          <h1>
            Products with a <em>job to do.</em>
          </h1>
          <p className="lead">
            From Doha to the GCC and international markets, we build digital products around a
            clear customer need and a measurable business outcome. Here is a selection across
            healthtech, hospitality, sports communities, research and logistics.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="pf-grid">
            {projects.map((project) => (
              <Link className="pf-card" href={`/work/${project.slug}/`} key={project.slug}>
                <div className="pf-art">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="pf-body">
                  <span className="pf-cat">{project.category}</span>
                  <h3>
                    {project.name}
                    <span aria-hidden="true">↗</span>
                  </h3>
                  <p>{project.useCase}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="cta-band" style={{ gridTemplateColumns: "1fr" }}>
            <span className="ring" aria-hidden="true" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
              <span className="pill">Start here</span>
              <h2 className="h2">Have a product with a job to do?</h2>
              <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>
                Tell us the outcome you want. We will map the shortest credible path from idea
                to a working product your customers and teams can rely on.
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
          </div>
        </div>
      </section>
    </Shell>
  );
}
