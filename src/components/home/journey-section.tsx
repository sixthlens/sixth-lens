import { journey } from "@/data/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function JourneySection() {
  return (
    <section className="journey-section section-pad" id="about-us">
      <div className="container">
        <SectionHeading eyebrow="The journey" title="Ambition is a team sport." description="The best outcomes happen when strategy, creative instinct, and technical excellence pull in the same direction." />
        <ol className="journey-list">
          {journey.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
