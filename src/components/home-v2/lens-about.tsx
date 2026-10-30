import Link from "next/link";
import { img } from "@/data/home-v2";

export function LensAbout() {
  return (
    <section className="sec" id="about"><div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="lens-two">
        <div className="about-photo">
          <img src={img("doha-skyline")} alt="Doha skyline, home of Sixth Lens" loading="lazy" />
          <span className="hint"><i />Doha, Qatar</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span className="label">We are</span><span className="pill">A technology studio</span><span className="label">not just an agency</span>
          </div>
          <h2 className="h1">Perspective first. Then the technology.</h2>
          <p className="body-strong">Most businesses don&apos;t have a software problem. They have a focus problem. Customers sit in one tool, operations in another and finance in a third. Nobody sees the whole picture. Sixth Lens gives you that picture first, then builds the connected system that keeps it sharp.</p>
          <p className="body">Six lenses, one team. Web platforms that convert. Marketing that finds the right customers. Mobile apps people use. CRM and WhatsApp automation that turns conversations into revenue. Cloud systems that scale quietly. Practical AI that gives decision-makers a clearer view. Built in Doha, running on three continents.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn sm" href="/about/">How we think</Link>
            <Link className="btn sm navy" href="/process/">Our process</Link>
          </div>
        </div>
      </div>
    </div></section>
  );
}
