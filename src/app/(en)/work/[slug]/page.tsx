import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/home-v2/shell";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/home";

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const title = `${project.name} Case Study | Digital Product`;
  return {
    title,
    description: `${project.description} ${project.useCase}`,
    alternates: {
      canonical: `/work/${slug}/`,
      languages: { en: `/work/${slug}/`, "ar-QA": `/ar/work/${slug}/`, "x-default": `/work/${slug}/` },
    },
    openGraph: { title, description: `${project.description} ${project.useCase}`, url: `/work/${slug}/`, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${siteConfig.url}/work/${slug}/`,
    about: project.useCase,
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };

  return (
    <Shell language="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />

      <section className="page-hero">
        <span className="ring" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <Link href="/portfolio/">Work</Link>
            <span>{project.name}</span>
          </nav>
          <span className="pill">{project.category}</span>
          <h1>{project.name}</h1>
          <p className="lead">{project.description}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="work-figure">
            <img src={project.image} alt={project.imageAlt} />
          </div>

          <div className="content-grid">
            <div className="content-sec">
              <h2 className="h2">The brief</h2>
              <p className="body">{project.description}</p>
            </div>
            <div className="content-sec">
              <h2 className="h2">What we built</h2>
              <p className="body">
                A focused product shaped around the real customer journey. It is built to perform
                across the devices and markets it serves, and to stay dependable as the team behind
                it grows. Visit the live product to see it in action.
              </p>
            </div>
            <div className="content-sec">
              <h2 className="h2">Business use case</h2>
              <p className="body">{project.useCase}</p>
            </div>
          </div>

          <a className="detail-visit" href={project.url} target="_blank" rel="noreferrer">
            Visit {project.name} ↗
          </a>
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
                We work with teams across Qatar, the GCC and beyond to turn a clear business goal
                into a product people use. Let&apos;s scope yours.
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
