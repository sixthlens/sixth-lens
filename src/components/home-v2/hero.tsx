"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroCounts, heroVideo, heroPoster, img } from "@/data/home-v2";
import { siteConfig } from "@/config/site";

const TEXT = {
  en: {
    eyebrow: "Technology studio · Doha → GCC → Worldwide ·", clock: "Doha",
    h1a: "Your business,", h1b: "brought into", accent: "focus.",
    sub: "We give businesses perspective, then build it: web, mobile, CRM, cloud, data and AI connected into one system that works in Qatar, across the GCC and anywhere your customers are.",
    cta1: "Book a 30-min call ↗", cta2: "WhatsApp us",
    counts: ["Products in market", "Connected service lenses", "Industries served", "Countries with live users"],
    cards: [["Built in Doha", "Sixth Lens · Qatar"], ["Digital Dining", "Quri · Qatar"], ["AI in Healthcare", "Ultrasound.ai · Global"]],
    marquee: ["Web platforms", "Digital marketing", "Mobile apps", "CRM & WhatsApp automation", "Cloud", "Data & AI", "E-invoicing"],
    stack: "Selected work",
  },
  ar: {
    eyebrow: "استوديو تقني · الدوحة ← الخليج ← العالم ·", clock: "الدوحة",
    h1a: "أعمالك،", h1b: "في بؤرة", accent: "أوضح.",
    sub: "نمنح الشركات منظوراً أوضح، ثم نبنيه: الويب والجوال وCRM والسحابة والبيانات والذكاء الاصطناعي، مترابطة في نظام واحد يعمل في قطر وعبر الخليج وأينما كان عملاؤك.",
    cta1: "احجز مكالمة 30 دقيقة ↗", cta2: "راسلنا على واتساب",
    counts: ["منتج حيّ في السوق", "أبعاد خدمية مترابطة", "قطاعات نخدمها", "دول بها مستخدمون"],
    cards: [["صُنع في الدوحة", "سِكْسث لينس · قطر"], ["تجربة مطاعم رقمية", "Quri · قطر"], ["الذكاء الاصطناعي في الصحة", "Ultrasound.ai · عالمي"]],
    marquee: ["منصات الويب", "التسويق الرقمي", "تطبيقات الجوال", "CRM وأتمتة واتساب", "السحابة", "البيانات والذكاء الاصطناعي", "الفوترة الإلكترونية"],
    stack: "أعمال مختارة",
  },
} as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(value); return; }
    let raf = 0; const start = performance.now(); const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <b>{n}{suffix}</b>;
}

function DohaClock({ label }: { label: string }) {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Qatar" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return <span className="hero-clock">{time} {label}</span>;
}

export function Hero({ language = "en" }: { language?: "en" | "ar" }) {
  const t = TEXT[language];
  const r = (p: string) => (language === "ar" ? `/ar${p}` : p);
  return (
    <section className="hero-r" aria-label="Sixth Lens">
      <span className="ring r1" aria-hidden="true" />
      <span className="ring r2" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow"><span className="live-dot" />{t.eyebrow} <DohaClock label={t.clock} /></span>
          <h1 className="h-hero">{t.h1a}<br />{t.h1b} <span className="rot-word">{t.accent}</span></h1>
          <p className="hero-sub">{t.sub}</p>
          <div className="hero-cta">
            <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">{t.cta1}</a>
            <a className="btn outline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">{t.cta2}</a>
          </div>
          <div className="counts">
            {heroCounts.map((c, i) => (
              <div className="count" key={c.label}><Counter value={c.value} suffix={c.suffix} /><span>{t.counts[i]}</span></div>
            ))}
          </div>
        </div>
        <div className="hero-stack" aria-label={t.stack}>
          <svg className="aperture" viewBox="0 0 620 620" aria-hidden="true">
            <circle className="glow" cx="310" cy="310" r="250" />
            <circle cx="310" cy="310" r="286" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" />
            <g className="blade"><path d="M310 60 L470 170 L470 450 L310 560 L150 450 L150 170 Z" /></g>
            <g className="blade b2"><path d="M310 110 L440 200 L440 420 L310 510 L180 420 L180 200 Z" /></g>
            <g className="blade b3"><path d="M310 160 L410 230 L410 390 L310 460 L210 390 L210 230 Z" /></g>
          </svg>
          <span className="orbit" aria-hidden="true" /><span className="orbit o2" aria-hidden="true" />
          <Link className="hero-card c1" href={r("/about/")}>
            <video autoPlay muted loop playsInline poster={heroPoster} aria-hidden="true"><source src={heroVideo} type="video/mp4" /></video>
            <div className="cap"><b>{t.cards[0][0]}</b><span>{t.cards[0][1]}</span></div>
          </Link>
          <Link className="hero-card c2" href={r("/work/quri/")}>
            <img src="/images/projects/quri.webp" alt="Quri digital dining app" />
            <div className="cap"><b>{t.cards[1][0]}</b><span>{t.cards[1][1]}</span></div>
          </Link>
          <Link className="hero-card c3" href={r("/work/ultrasound-ai/")}>
            <img src={img("healthcare-tech")} alt="Clinician using AI-assisted ultrasound review" />
            <div className="cap"><b>{t.cards[2][0]}</b><span>{t.cards[2][1]}</span></div>
          </Link>
        </div>
      </div>
      <div className="marquee on-red hero-marquee" aria-hidden="true">
        <div className="track">{[...t.marquee, ...t.marquee].map((m, i) => <span key={m + i}>{m}</span>)}</div>
      </div>
    </section>
  );
}
