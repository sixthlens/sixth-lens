import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="Sixth Lens home"><Image className="brand-logo" src="/images/sixth-lens-logo.svg" alt="Sixth Lens" width={178} height={40} priority /></Link><nav aria-label="Primary navigation"><Link href="/services/">Services</Link><Link href="/portfolio/">Work</Link><Link href="/industries/">Industries</Link><Link href="/about/">About</Link><Link href="/process/">Process</Link><Link href="/consulting/">Consulting</Link><Link href="/security-compliance/">Security</Link></nav><div className="header-actions"><a className="button button-small" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a meeting ↗</a></div></header>;
}
