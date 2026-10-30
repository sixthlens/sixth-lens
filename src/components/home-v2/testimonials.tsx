"use client";
import { useState } from "react";
import { testimonials, img } from "@/data/home-v2";

export function Testimonials() {
  const [i, setI] = useState(0);
  const max = testimonials.length - 1;
  const prev = () => setI((v) => Math.max(0, v - 1));
  const next = () => setI((v) => Math.min(max, v + 1));
  return (
    <section className="sec"><div className="wrap">
      <span className="pill">Testimonials</span>
      <h2 className="giant" style={{ marginTop: 16 }}>What others say</h2>
      <div className="carousel" style={{ marginTop: 40 }}>
        <div className="ctrack" style={{ transform: `translateX(calc(-${i} * (100% + 24px) / 3))` }}>
          {testimonials.map((t) => (
            <div className="quote-card" key={t.role + t.org}>
              <span className="stars" aria-label="5 out of 5">★★★★★</span>
              <p>“{t.quote}”</p>
              <div className="who">
                <img src={img(t.avatar)} alt="" />
                <div><b>{t.role}</b><span>{t.org} · sample</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-nav">
        <button className="navy" type="button" aria-label="Previous" onClick={prev} disabled={i === 0}>←</button>
        <button type="button" aria-label="Next" onClick={next} disabled={i === max}>→</button>
      </div>
    </div></section>
  );
}
