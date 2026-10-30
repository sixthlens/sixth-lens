import Link from "next/link";
import { aiTech, aiEmerging } from "@/data/home-v2";

export function AiTech() {
  return (
    <section className="sec navy-sec" id="ai"><div className="wrap">
      <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 16, maxWidth: 820 }}>
        <span className="kicker">Applied AI</span>
        <h2 className="h2 white">Practical AI, built into real products.</h2>
        <p className="body">We put AI to work inside real products and operations. Assistants that know your data. Automation that takes action. Insights that sharpen decisions. All in Arabic and English, all built for production.</p>
      </div>
      <div className="ai-grid sv-stagger">
        {aiTech.map((a) => (
          <div className="ai-card" key={a.title}>
            <span className="ai-ic" aria-hidden="true">{a.icon}</span>
            <span className="ai-tag">{a.tag}</span>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      <div className="ai-note">
        <p>{aiEmerging}</p>
        <Link className="btn white" href="/services/ai-data-solutions/">Explore Data &amp; applied AI ↗</Link>
      </div>
    </div></section>
  );
}
