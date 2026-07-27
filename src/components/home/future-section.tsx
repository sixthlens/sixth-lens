import { Check } from "lucide-react";

import { GradientButton } from "@/components/ui/gradient-button";

const outcomes = ["Clear product direction", "An experienced, senior team", "Designed to evolve, not expire"];

export function FutureSection() {
  return (
    <section className="future-section section-pad" id="careers">
      <div className="future-section__glow" aria-hidden="true" />
      <div className="container future-section__inner">
        <div><p className="eyebrow">A better next step</p><h2>Build the future<br />you can already feel.</h2><p>Whether you&apos;re starting a category-defining company or reimagining an established one, we bring the energy and expertise to make it real.</p></div>
        <div className="future-section__offer"><p>What to expect</p><ul>{outcomes.map((outcome) => <li key={outcome}><Check size={15} />{outcome}</li>)}</ul><GradientButton href="mailto:hello@nexora.studio">Tell us your idea</GradientButton></div>
      </div>
    </section>
  );
}
