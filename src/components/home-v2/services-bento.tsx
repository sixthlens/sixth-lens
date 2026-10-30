import Link from "next/link";
import { bentoServices, img } from "@/data/home-v2";

export function ServicesBento() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 44px", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <span className="kicker">Six lenses, one team</span>
          <h2 className="h2 navy">One team for your whole digital stack.</h2>
          <p className="body">Most agencies leave you stitching vendors together. Sixth Lens is one team for web, mobile, marketing, CRM, cloud, data and AI. Hover a lens to see what it covers.</p>
        </div>
        <div className="bento">
          {bentoServices.map((s) => (
            <Link key={s.title} className="bento-item" href={s.href}>
              <img src={img(s.image)} alt={s.title} loading="lazy" />
              <h3 className="acc-title">{s.title}</h3>
              <div className="acc-panel">
                <div className="acc-panel-head">
                  <h3>{s.title}</h3>
                  <span className="acc-arrow" aria-hidden="true">↗</span>
                </div>
                <ul>{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link className="btn" href="/services/">See all services ↗</Link>
        </div>
      </div>
    </section>
  );
}
