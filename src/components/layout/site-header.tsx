import Image from "next/image";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return <header className="site-header"><a className="brand" href="#top" aria-label="Sixth Lens home"><Image className="brand-logo" src="/images/sixth-lens-logo.svg" alt="Sixth Lens" width={178} height={40} priority /></a><nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#work">Selected work</a><a href="#qatar">Markets</a><a href="#insights">Insights</a><a href="#contact">Contact</a></nav><div className="header-actions"><a className="button button-small" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a meeting ↗</a></div></header>;
}
