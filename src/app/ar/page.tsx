import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/home-v2/shell";
import { siteConfig, serviceAreas } from "@/config/site";
import { arabicMetadata } from "@/config/arabic-seo";
import { lenses, projects } from "@/data/home";
import { arabicProjectDetails, arabicServiceDetails } from "@/data/arabic";
import { img } from "@/data/home-v2";
import { CapabilityScroll } from "@/components/home-v2/capability-scroll";
import { Hero } from "@/components/home-v2/hero";

export const metadata: Metadata = {
  ...arabicMetadata("تطوير تطبيقات الجوال والحلول الرقمية في قطر والخليج | سِكْسث لينس", "سِكْسث لينس استوديو تقني في الدوحة لتطوير تطبيقات الجوال والمواقع والمنتجات الرقمية وأنظمة CRM والسحابة والذكاء الاصطناعي للشركات في قطر والخليج والعالم.", "/", ["شركة تطوير تطبيقات قطر", "تطوير تطبيقات الجوال قطر", "شركة برمجيات الدوحة", "تطوير مواقع قطر", "تطوير MVP قطر", "تطوير برمجيات الخليج", "تطبيقات الجوال بالعربية", "digital product development Qatar", "mobile app development GCC"]),
  openGraph: { title: "سِكْسث لينس | أعمالك في بؤرة أوضح", description: "تطوير التطبيقات والأنظمة الرقمية للشركات في قطر ودول الخليج والأسواق العالمية.", url: "/ar/", locale: "ar_QA", type: "website" },
};

const serviceImage: Record<string, string> = {
  "web-development": "dashboard-screen",
  "digital-marketing": "meeting",
  "mobile-app-development": "mobile-app",
  "crm-automation": "team-working",
  "cloud-solutions": "cloud-server",
  "ai-data-solutions": "ai-abstract",
};


const stats = [
  { value: "+7", label: "منتجات حية في السوق" },
  { value: "6", label: "أبعاد خدمية مترابطة" },
  { value: "7", label: "قطاعات نخدمها" },
  { value: "5", label: "دول بها مستخدمون فعليون" },
  { value: "٢٤س", label: "رد على كل استفسار" },
  { value: "2", label: "لغتان جاهزتان لليمين لليسار" },
];

const arWork = [
  { name: "Imateam", slug: "imateam", theme: "t-green", image: "team-working" },
  { name: "Quri", slug: "quri", theme: "t-pink", image: "food-hospitality" },
  { name: "MUVN", slug: "muvn", theme: "t-blue", image: "logistics" },
  { name: "ADGM App", slug: "adgm-app", theme: "t-teal", image: "qatar-business" },
  { name: "Ultrasound.ai", slug: "ultrasound-ai", theme: "t-lime", image: "healthcare-tech" },
  { name: "NAREB", slug: "nareb-realtist-connect", theme: "t-red", image: "meeting" },
];

const faqs = [
  { q: "تطوير المواقع والمنصات", a: "مواقع وتجارب تجارة إلكترونية وبوابات سريعة وسهلة الوصول، ثنائية اللغة بالعربية والإنجليزية افتراضياً، ومتصلة بأنظمة CRM والمالية منذ اليوم الأول." },
  { q: "تطوير تطبيقات الجوال", a: "تطبيقات iOS وAndroid وعبر المنصات للعملاء والفرق الميدانية والعمليات اليومية، من MVP إلى التوسع." },
  { q: "التسويق الرقمي", a: "تحسين محركات البحث والبحث المحلي والحملات المدفوعة وأنظمة المحتوى، مبنية حول طريقة اكتشاف عملائك في قطر والخليج والأسواق الدولية." },
  { q: "أنظمة CRM والأتمتة", a: "تنفيذ CRM وسير عمل واتساب وأتمتة المبيعات تحوّل الاستفسارات إلى مسار واضح وقابل للقياس." },
  { q: "حلول السحابة", a: "هندسة سحابية وDevOps وموثوقية وتكامل أنظمة تمنح الفرق النامية مساحة للحركة دون تعقيد تشغيلي." },
  { q: "البيانات والذكاء الاصطناعي", a: "لوحات تشغيل ومساعدات ذكاء اصطناعي وذكاء في سير العمل، حلول عملية بلا مبالغة." },
  { q: "الفوترة الإلكترونية وتكامل PEPPOL", a: "سير فواتير منظمة بصيغ UBL XML وPeppol BIS Billing 3.0 متصلة بنظام ERP والمحاسبة لديك، مع تخطيط الجاهزية الإقليمية." },
  { q: "هل تعملون خارج قطر؟", a: "نعم. منتجاتنا تعمل في قطر والإمارات وألمانيا وكوريا والولايات المتحدة. نعمل عن بُعد مع فرق حول العالم وميدانياً في دول الخليج." },
];

export default function ArabicHome() {
  const jsonLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.legalName, url: `${siteConfig.url}/ar/`, description: "استوديو تقني في الدوحة لتطوير تطبيقات الجوال والويب والأنظمة الرقمية للشركات في قطر والخليج والأسواق العالمية.", inLanguage: "ar", areaServed: serviceAreas, knowsAbout: ["تطوير تطبيقات الجوال", "تطوير البرمجيات", "تطوير MVP", "التجارة الإلكترونية", "PEPPOL والفوترة الإلكترونية", "أنظمة CRM", "الحوسبة السحابية", "الذكاء الاصطناعي"] };
  return (
    <Shell language="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero language="ar" />

      {/* stats */}
      <section className="sec tight"><div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
      </div></section>

      {/* services bento */}
      <section className="sec" id="services"><div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 44px", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <span className="kicker">ستة أبعاد، فريق واحد</span>
          <h2 className="h2 navy">منصة واحدة لإدارة أعمالك كاملة.</h2>
          <p className="body">تجمعك الوكالات الأخرى بين موردين متفرقين. سِكْسث لينس فريق واحد مترابط: الويب والجوال وCRM والسحابة والبيانات والذكاء الاصطناعي، مبنية كوحدة واحدة.</p>
        </div>
        <div className="bento">
          {lenses.map((lens) => {
            const detail = arabicServiceDetails[lens.slug];
            if (!detail) return null;
            return (
              <Link key={lens.slug} className="bento-item" href={`/ar/services/${lens.slug}/`}>
                <img src={img(serviceImage[lens.slug] ?? "dashboard-screen")} alt={detail.title} loading="lazy" />
                <h3 className="acc-title">{detail.title}</h3>
                <div className="acc-panel">
                  <div className="acc-panel-head">
                    <h3>{detail.title}</h3>
                    <span className="acc-arrow" aria-hidden="true">↗</span>
                  </div>
                  <ul>{detail.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Link>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}><Link className="btn" href="/ar/services/">استكشف جميع الخدمات ↗</Link></div>
      </div></section>

      {/* Qatar photo band */}
      <section className="sec tight"><div className="wrap">
        <div className="band">
          <img src={img("doha-skyline")} alt="أفق الدوحة" loading="lazy" />
          <div className="band-float"><b>قطر</b><p>مقرنا في الدوحة، ونسلّم لعملاء في قطر ودول الخليج والعالم، بمعرفة محلية تجعل المنتجات ثنائية اللغة والمراعية للوائح تعمل فعلاً.</p></div>
        </div>
      </div></section>

      {/* AI & next-gen tech */}
      <section className="sec navy-sec" id="ai"><div className="wrap">
        <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 16, maxWidth: 820 }}>
          <span className="kicker">تقنيات الجيل القادم</span>
          <h2 className="h2 white">مبنية على الذكاء الاصطناعي، وجاهزة لما هو قادم.</h2>
          <p className="body">نوظّف الذكاء الاصطناعي العملي داخل منتجات وعمليات حقيقية: مساعدون يعرفون بياناتك، وأتمتة تنفّذ المهام، وذكاء يصقل القرارات، ثنائي اللغة وجاهز للإنتاج.</p>
        </div>
        <div className="ai-grid sv-stagger">
          {[
            { icon: "✦", tag: "GenAI", title: "مساعدو الذكاء الاصطناعي", desc: "مساعدون ومساعدات مبنية على بياناتك عبر الاسترجاع (RAG) لمهام واقعية." },
            { icon: "◉", tag: "Vision", title: "الرؤية الحاسوبية", desc: "فهم الصور والفيديو، التعرّف الضوئي على النصوص، وفحص الجودة الآلي." },
            { icon: "⟳", tag: "Agents", title: "الأتمتة والوكلاء الأذكياء", desc: "وكلاء ذكاء اصطناعي ينفّذون المهام عبر أدواتك، لا يجيبون فقط." },
            { icon: "▤", tag: "ML", title: "التحليلات التنبؤية", desc: "التنبؤ واكتشاف الشذوذ لتحويل البيانات إلى قرارات في وقتها." },
            { icon: "◇", tag: "NLP", title: "المحادثة والصوت", desc: "معالجة لغة عربية وإنجليزية لواتساب والدردشة والصوت، ثنائية اللغة افتراضياً." },
            { icon: "⬡", tag: "Platform", title: "هندسة البيانات وMLOps", desc: "مسارات بيانات ومراقبة نماذج تُبقي الذكاء الاصطناعي موثوقاً في الإنتاج." },
          ].map((a) => (
            <div className="ai-card" key={a.title}>
              <span className="ai-ic" aria-hidden="true">{a.icon}</span>
              <span className="ai-tag">{a.tag}</span>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="ai-note">
          <p>نستكشف أيضاً إنترنت الأشياء والواقع المعزّز/الافتراضي والحوسبة الطرفية والبلوك تشين، نعتمدها فقط حيث تصنع قيمة حقيقية وقابلة للقياس، لا لمجرد المواكبة.</p>
          <Link className="btn white" href="/ar/services/ai-data-solutions/">البيانات والذكاء الاصطناعي ↗</Link>
        </div>
      </div></section>

      <CapabilityScroll language="ar" />

      {/* selected work */}
      <section className="sec navy-sec" id="work"><div className="wrap">
        <span className="pill">أعمال مختارة</span>
        <h2 className="giant white" style={{ marginTop: 16 }}>اعرف أكثر</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start", margin: "24px 0 48px" }} className="work-head">
          <p style={{ fontSize: 22, fontWeight: 600, color: "#fff" }}>منتجات لها هدف واضح، في قطر والإمارات وألمانيا وكوريا والولايات المتحدة.</p>
          <p className="body">ذكاء اصطناعي في الرعاية الصحية، وتجربة طعام رقمية، ومجتمعات رياضية، وأسواق لوجستية، وخدمات مناطق الأعمال، ومنصات للأعضاء، كلٌّ منها مصمم حول حاجة عميل حقيقية.</p>
        </div>
        <div className="work-grid">
          {arWork.map((w) => (
            <Link className={`work-tile ${w.theme}`} key={w.slug} href={`/ar/work/${w.slug}/`}>
              <b>{w.name}</b><span>{arabicProjectDetails[w.slug]?.category}</span>
              <img src={img(w.image)} alt={w.name} loading="lazy" />
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 40 }}><Link className="btn white" href="/ar/portfolio/">عرض جميع المشاريع ↗</Link></div>
      </div></section>

      {/* FAQ */}
      <section className="sec"><div className="wrap">
        <div className="center" style={{ maxWidth: 900, margin: "0 auto 48px" }}>
          <span className="kicker">الأسئلة الشائعة</span>
          <h2 className="h1" style={{ marginTop: 10 }}>ويب وجوال وCRM وسحابة وذكاء اصطناعي مترابط، باختصار.</h2>
        </div>
        <div className="faq">
          {faqs.map((f, idx) => (
            <details key={f.q} open={idx === 0}>
              <summary><span className="i">{String(idx + 1).padStart(3, "0")}</span><span>{f.q}</span><span className="plus">+</span></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <div className="center" style={{ marginTop: 36 }}><Link className="btn" href="/ar/services/">شاهد كل الخدمات</Link></div>
      </div></section>

      {/* CTA band */}
      <section className="sec tight" id="contact"><div className="wrap">
        <div className="cta-band">
          <span className="ring" aria-hidden="true" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
            <span className="pill">احجز في 30 ثانية</span>
            <h2 className="h2">اختر وقتاً. ونحن نأتي بالمنظور.</h2>
            <p className="body" style={{ color: "rgba(255,255,255,.85)" }}>مكالمة 30 دقيقة مع أحد المؤسسين، لا مع مندوب مبيعات. سنسأل عن عملائك وعملياتك وأنظمتك، ونصارحك بأي بُعد يجدر أن تبدأ منه.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn white" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">افتح التقويم ↗</a>
              <a className="btn outline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">واتساب بدلاً من ذلك</a>
            </div>
          </div>
          <div className="slots">
            <span style={{ fontSize: 13, opacity: .8 }}>التواصل المباشر · توقيت الدوحة</span>
            <a className="slot" href={`tel:${siteConfig.phoneHref}`}><b>الهاتف</b><span>{siteConfig.phoneDisplay}</span></a>
            <a className="slot" href={`mailto:${siteConfig.email}`}><b>البريد الإلكتروني</b><span>{siteConfig.email}</span></a>
            <a className="slot" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"><b>LinkedIn</b><span>صفحة الشركة ↗</span></a>
          </div>
        </div>
      </div></section>
    </Shell>
  );
}
