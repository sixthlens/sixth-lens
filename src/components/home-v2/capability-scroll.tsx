"use client";
import { useEffect, useRef, useState } from "react";
import { capabilityStack, capabilityStackAr, capScrollText, img } from "@/data/home-v2";

export function CapabilityScroll({ language = "en" }: { language?: "en" | "ar" }) {
  const isAr = language === "ar";
  const items = isAr ? capabilityStackAr : capabilityStack;
  const txt = isAr ? capScrollText.ar : capScrollText.en;
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const total = wrap.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-wrap.getBoundingClientRect().top, 0), Math.max(total, 1));
        const p = total > 0 ? scrolled / total : 0;
        const idx = Math.min(items.length - 1, Math.max(0, Math.floor(p * items.length)));
        setActive(idx);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items.length]);

  return (
    <section ref={wrapRef} id="capabilities" className="cap-pin-wrap" style={{ height: `${items.length * 100}vh` }}>
      <div className="cap-pin">
        <div className="wrap">
          <div className="cap-head">
            <span className="kicker">{txt.kicker}</span>
            <h2 className="h2 navy">{txt.title}</h2>
            <p className="body">{txt.sub}</p>
          </div>
          <div className="cap-stage">
            <div className="cap-visual">
              {items.map((c, i) => (
                <img key={c.title} className={i === active ? "on" : ""} src={img(c.image)} alt={c.title} loading="lazy" />
              ))}
              <span className="cap-badge">{items[active].n} · {items[active].title}</span>
            </div>
            <div className="cap-copy">
              {items.map((c, i) => (
                <div key={c.title} className={`cap-panel${i === active ? " on" : ""}`}>
                  <img className="cap-mobile-img" src={img(c.image)} alt={c.title} loading="lazy" />
                  <span className="cap-n">{c.n}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <ul>{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div className="cap-dots" aria-hidden="true">{items.map((_, i) => <i key={i} className={i === active ? "on" : ""} />)}</div>
        </div>
      </div>
    </section>
  );
}
