import { capabilities } from "@/data/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section section-pad" id="capabilities">
      <div className="container">
        <SectionHeading eyebrow="Our craft" title="Every capability you need to move from potential to progress." />
        <div className="capabilities-grid">
          {capabilities.map(({ icon: Icon, ...capability }) => (
            <article className="capability-card" key={capability.title}>
              <div className={`capability-card__icon capability-card__icon--${capability.accent}`}><Icon size={24} strokeWidth={1.5} /></div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
