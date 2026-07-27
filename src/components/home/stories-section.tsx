import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";

const stories = [
  ["Riwaq", "A smarter path from clinical data to everyday care.", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1500&q=85"],
  ["Kite", "An AI workspace that gives every growing team more room to think.", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=85"],
];

export function StoriesSection() {
  return (
    <section className="stories-section section-pad" id="work">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Built for the moments that change everything." />
        <div className="stories-list">
          {stories.map(([client, title, image], index) => (
            <article className={`story-card story-card--${index + 1}`} key={client}>
              <Image fill src={image} sizes="(max-width: 800px) 100vw, 100vw" alt="Nexora project team collaborating" />
              <div className="story-card__veil" />
              <div className="story-card__content"><p>{client} · {index === 0 ? "Health technology" : "Workplace AI"}</p><h3>{title}</h3><span>View case study ↗</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
