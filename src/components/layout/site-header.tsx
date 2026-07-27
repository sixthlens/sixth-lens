import Link from "next/link";

import { GradientButton } from "@/components/ui/gradient-button";

const navigation = ["Home", "About us", "What we do", "Insights", "Careers"];

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="site-header__inner container">
        <Link href="#home" className="brand" aria-label="Nexora home">
          <span className="brand__mark"><i /><i /><i /></span>
          <span>NEXORA</span>
        </Link>
        <div className="site-header__links">
          {navigation.map((item) => (
            <Link href={item === "Home" ? "#home" : `#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
              {item}
            </Link>
          ))}
        </div>
        <GradientButton href="#contact" className="site-header__cta">Let&apos;s talk</GradientButton>
      </nav>
    </header>
  );
}
