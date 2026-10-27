import Image from "next/image";

export function SiteHeader() {
  return <header className="site-header"><a className="brand" href="#top" aria-label="Sixth Lens home"><Image className="brand-logo" src="/images/sixth-lens-logo.svg" alt="Sixth Lens" width={178} height={40} priority /></a><nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#work">Selected work</a><a href="#qatar">For Qatar</a><a href="#insights">Insights</a><a href="#contact">Contact</a></nav><div className="header-actions"><a className="button button-small" href="#contact">Book a strategy call</a></div></header>;
}
