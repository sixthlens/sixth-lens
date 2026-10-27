import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/home";
import Image from "next/image";

export function generateStaticParams() { return projects.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const title = `${project.name} — Digital Product Case Study`;
  return { title, description: `${project.description} Business use case: ${project.useCase}`, alternates: { canonical: `/work/${slug}/` }, openGraph: { title, description: `${project.description} ${project.useCase}`, url: `/work/${slug}/`, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const data = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: project.description, url: `${siteConfig.url}/work/${slug}/`, about: project.useCase, publisher: { "@type": "Organization", name: siteConfig.legalName } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><SiteHeader/><main className="detail-page work-detail"><p className="kicker">Selected work · {project.category}</p><div className={`project-art project-art-${project.theme}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, 80vw" /></div><h1>{project.name}<br/><em>built for a purpose.</em></h1><p className="detail-lead">{project.description}</p><div className="detail-columns"><section><h2>The product</h2><p>{project.description} Explore the live product to see its customer experience and product direction.</p><a className="text-link" href={project.url} target="_blank" rel="noreferrer">Visit {project.name} <span>↗</span></a></section><section><h2>Business use case</h2><p>{project.useCase}</p></section></div><Link className="button" href="/#contact">Build a product for your business <span>↗</span></Link><p className="detail-back"><Link href="/#work">← Explore selected work</Link></p></main><SiteFooter/></>;
}
