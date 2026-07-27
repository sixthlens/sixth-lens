import { GradientButton } from "@/components/ui/gradient-button";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">Independent technology studio · Doha &amp; beyond</p>
        <h1>We build the intelligent<br />companies of tomorrow.</h1>
        <p className="hero__summary">Nexora blends product, AI, and engineering to help ambitious teams turn their biggest opportunities into unforgettable digital experiences.</p>
        <GradientButton href="#what-we-do">Explore what we do</GradientButton>
        <div className="hero__footnote">For founders and established teams ready to move with more imagination.</div>
      </div>
      <div className="hero__scroll"><span>Scroll to explore</span><i /></div>
    </section>
  );
}
