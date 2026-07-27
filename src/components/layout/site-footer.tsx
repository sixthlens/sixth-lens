import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

import { GradientButton } from "@/components/ui/gradient-button";

const footerLinks = ["Work", "Capabilities", "About", "Insights", "Contact"];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__top">
        <div>
          <p className="eyebrow">Make the next move</p>
          <h2>Have an ambitious idea?<br />Let&apos;s give it momentum.</h2>
        </div>
        <GradientButton href="mailto:hello@nexora.studio">Start a conversation</GradientButton>
      </div>
      <div className="container site-footer__bottom">
        <div className="brand brand--footer"><span className="brand__mark"><i /><i /><i /></span><span>NEXORA</span></div>
        <div className="site-footer__links">
          {footerLinks.map((item) => <Link href={`#${item.toLowerCase()}`} key={item}>{item}</Link>)}
        </div>
        <div className="site-footer__socials">
          <Link href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={17} /></Link>
          <Link href="https://x.com" aria-label="X / Twitter"><Twitter size={17} /></Link>
          <Link href="https://www.instagram.com" aria-label="Instagram"><Instagram size={17} /></Link>
        </div>
      </div>
      <div className="container site-footer__legal"><span>© 2026 Nexora Studio. All rights reserved.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}
