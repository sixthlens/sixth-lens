import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { pageMetadata } from "@/config/seo";
import { lenses } from "@/data/home";

export const metadata: Metadata = pageMetadata("Digital Services | Web, Mobile, CRM, Cloud & AI", "Explore Sixth Lens services for digital strategy, web and mobile product development, marketing, CRM, cloud systems, data and applied AI.", "/services/");

export default function ServicesPage() {
  return <><SiteHeader/><main className="detail-page service-index" id="top"><p className="kicker">Services · Qatar, GCC & international</p><h1>Six lenses.<br/><em>One connected system.</em></h1><p className="detail-lead">Choose a focused service or connect several around a business outcome. We work across product, customer experience and the systems behind them.</p><div className="service-index-list">{lenses.map((item) => <article key={item.slug}><div><p className="service-index-eyebrow">{item.eyebrow}</p><h2><Link href={`/services/${item.slug}/`}>{item.title} <span aria-hidden="true">↗</span></Link></h2><p>{item.description}</p></div><ul>{item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul></article>)}</div><section className="service-pathways" aria-labelledby="pathways-title"><p className="service-index-eyebrow">Product engagements</p><h2 id="pathways-title">A practical way to get moving.</h2><div>{[["For startups", "Validate the opportunity and build a digital foundation that can grow.", "/startups/"], ["MVP development", "Define, design and build the smallest useful product release.", "/mvp-development/"], ["Hire a team", "Add product, design and engineering capacity around your goals.", "/hire-a-team/"]].map(([title, description, href]) => <Link href={href} key={href}><strong>{title}<span aria-hidden="true">↗</span></strong><small>{description}</small></Link>)}</div></section><Link className="button" href="/consulting/">Not sure where to start? Book a consultation <span aria-hidden="true">↗</span></Link></main><SiteFooter/></>;
}
