import Image from "next/image";

import { solutions } from "@/data/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function SolutionsSection() {
  return (
    <section className="solutions-section section-pad" id="what-we-do">
      <div className="container">
        <SectionHeading eyebrow="The opportunity layer" title="Complex ideas, made beautifully useful." description="We partner with forward-thinking organisations at the moment they decide to build differently." />
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-card__image"><Image fill sizes="(max-width: 800px) 100vw, 33vw" src={solution.image} alt={solution.imageAlt} priority={index === 0} /></div>
              <span className="solution-card__number">0{index + 1}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <span className="solution-card__link">Discover more <b>↗</b></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
