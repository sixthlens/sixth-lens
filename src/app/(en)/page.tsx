import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/home-v2.css";
import { SiteHeaderV2 } from "@/components/home-v2/site-header-v2";
import { Hero } from "@/components/home-v2/hero";
import { LensAbout } from "@/components/home-v2/lens-about";
import { ServicesBento } from "@/components/home-v2/services-bento";
import { Capabilities } from "@/components/home-v2/capabilities";
import { AiTech } from "@/components/home-v2/ai-tech";
import { CapabilityScroll } from "@/components/home-v2/capability-scroll";
import { SiteFooterV2 } from "@/components/home-v2/site-footer-v2";
import { siteConfig, serviceAreas } from "@/config/site";
import { clientLogos, facts, workTiles, faqs, bookingSlots, img } from "@/data/home-v2";

const brick = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-brick", display: "swap" });


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  url: siteConfig.url,
  sameAs: [siteConfig.linkedinUrl, siteConfig.googleKnowledgeUrl],
  image: `${siteConfig.url}/images/sixth-lens-hero.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  description: siteConfig.description,
  areaServed: serviceAreas,
  address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
  knowsAbout: ["Web development", "Mobile applications", "CRM", "Cloud computing", "Digital marketing", "Applied AI"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <div className={`slx ${brick.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeaderV2 language="en" />
      <main>
        <Hero />


        {/* client logos */}
        <section className="sec tight"><div className="wrap">
          <p className="center muted" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 20 }}>Products shipped for teams in Qatar, the UAE, Germany, Korea and the US</p>
          <div className="logo-rows">
            <div className="logo-row">{[...clientLogos, ...clientLogos].map((l, idx) => <div key={l + idx}>{l}</div>)}</div>
            <div className="logo-row rev">{[...clientLogos, ...clientLogos].reverse().map((l, idx) => <div key={l + idx}>{l}</div>)}</div>
          </div>
        </div></section>

        <LensAbout />

        {/* stats */}
        <section className="sec tight"><div className="wrap">
          <div className="stats sv-stagger">
            <div className="stat"><b>7+</b><span>Products live in market</span></div>
            <div className="stat"><b>6</b><span>Connected service lenses</span></div>
            <div className="stat"><b>7</b><span>Industries served</span></div>
            <div className="stat"><b>5</b><span>Countries with live users</span></div>
            <div className="stat"><b>&lt;24h</b><span>Reply on business days</span></div>
            <div className="stat"><b>2</b><span>Languages: Arabic and English</span></div>
          </div>
        </div></section>

        <ServicesBento />

        {/* photo band, Qatar */}
        <section className="sec tight"><div className="wrap">
          <div className="band">
            <img src={img("doha-skyline-2")} alt="Doha skyline" loading="lazy" />
            <div className="band-float"><b>QA</b><p>Based in Doha. We deliver for clients in Qatar, the GCC and worldwide, with the local knowledge to build bilingual, regulation-aware products.</p></div>
          </div>
        </div></section>

        <Capabilities />

        <AiTech />

        <CapabilityScroll />

        {/* why now, facts */}
        <section className="sec white-sec"><div className="wrap">
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 14, maxWidth: 820 }}>
            <span className="kicker">Why now</span>
            <h2 className="h2 navy">Qatar is investing heavily in AI and digital.</h2>
            <p className="body">The businesses that connect their data, customers and operations first will set the pace. Now is the time to start.</p>
          </div>
          <div className="facts sv-stagger">
            {facts.map((f) => (
              <div className={`fact${f.navy ? " navy" : ""}`} key={f.value + f.src}>
                <b>{f.value}</b><p>{f.text}</p><small>{f.src}</small>
              </div>
            ))}
          </div>
        </div></section>

        {/* selected work */}
        <section className="sec navy-sec" id="work"><div className="wrap">
          <span className="pill">Selected work</span>
          <h2 className="giant white" style={{ marginTop: 16 }}>Our work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start", margin: "24px 0 48px" }} className="work-head">
            <p style={{ fontSize: 22, fontWeight: 600, color: "#fff" }}>Products with a job to do, in Qatar, the UAE, Germany, Korea and the US.</p>
            <p className="body">Healthcare AI, digital dining, sports communities, logistics marketplaces, business-district services and member platforms. Each one is built around a real customer need.</p>
          </div>
          <div className="work-grid sv-stagger">
            {workTiles.map((w) => (
              <Link className={`work-tile ${w.theme}`} key={w.name} href={w.href}>
                <b>{w.name}</b><span>{w.meta}</span>
                <img src={img(w.image)} alt={w.name} loading="lazy" />
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 40 }}><Link className="btn white" href="/portfolio/">View all projects ↗</Link></div>
        </div></section>


        {/* FAQ */}
        <section className="sec"><div className="wrap">
          <div className="center" style={{ maxWidth: 900, margin: "0 auto 48px" }}>
            <span className="kicker">FAQs</span>
            <h2 className="h1" style={{ marginTop: 10 }}>Your questions, answered plainly.</h2>
          </div>
          <div className="faq">
            {faqs.map((f, idx) => (
              <details key={f.q} open={idx === 0}>
                <summary><span className="i">{String(idx + 1).padStart(3, "0")}</span><span>{f.q}</span><span className="plus">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}><Link className="btn" href="/services/">See all services</Link></div>
        </div></section>

        {/* CTA band */}
        <section className="sec tight"><div className="wrap">
          <div className="cta-band">
            <span className="ring" aria-hidden="true" />
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
              <span className="pill">Book in 30 seconds</span>
              <h2 className="h2">Pick a time. We&apos;ll bring the perspective.</h2>
              <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>A 30-minute call with a founder, not a sales rep. We&apos;ll ask about your customers, operations and systems. Then we&apos;ll tell you honestly where to start.</p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">Book a 30-min call ↗</a>
                <a className="btn outline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a>
              </div>
            </div>
            <div className="slots">
              <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".08em", opacity: .8 }}>Next available · Doha time</span>
              {bookingSlots.map((s) => (
                <a className="slot" key={s.day + s.time} href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer"><b>{s.day}</b><span>{s.time}</span></a>
              ))}
            </div>
          </div>
        </div></section>
      </main>
      <SiteFooterV2 />
    </div>
  );
}
