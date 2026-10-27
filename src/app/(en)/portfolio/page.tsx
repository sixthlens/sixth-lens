import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { pageMetadata } from "@/config/seo";
import { projects } from "@/data/home";

export const metadata: Metadata = pageMetadata("Selected Work | Digital Products & Business Solutions", "Explore digital products and platforms across healthtech, hospitality, sports communities, research and logistics in the Sixth Lens portfolio.", "/portfolio/");

export default function PortfolioPage() {
  return <><SiteHeader/><main className="portfolio portfolio-index section-pad" id="top"><div className="section-heading"><p className="kicker">Selected work</p><h1 id="portfolio-title">Digital products<br/>with a job to do.</h1><p>Product experiences built around a clear customer need and business use case.</p></div><div className="project-grid">{projects.map((project,index)=><article className={`project-card project-card-${index+1}`} key={project.slug}><Link href={`/work/${project.slug}/`} aria-label={`Read the ${project.name} case study`}><div className={`project-art project-art-${project.theme}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw" /></div><div className="project-info"><div><p className="project-category">{project.category}</p><h2>{project.name}</h2></div><span className="project-arrow" aria-hidden="true">↗</span><p>{project.description}</p><small><strong>Business use case</strong>{project.useCase}</small><span className="case-link">Read case study ↗</span></div></Link></article>)}</div><p className="portfolio-note">These selected examples illustrate different product needs and sectors. Ask us about the right approach for your organization.</p></main><SiteFooter/></>;
}
