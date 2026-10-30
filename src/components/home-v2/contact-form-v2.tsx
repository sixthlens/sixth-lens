"use client";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

const waNumber = siteConfig.whatsappUrl.replace(/\D/g, "");
type Lang = "en" | "ar";
const t = (en: string, ar: string, lang: Lang) => (lang === "ar" ? ar : en);

export function ContactFormV2({ language = "en" }: { language?: Lang }) {
  const [status, setStatus] = useState("");
  const isAr = language === "ar";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const f = new FormData(event.currentTarget);
    const name = String(f.get("name") || "").trim();
    const company = String(f.get("company") || "").trim();
    const service = String(f.get("service") || "").trim();
    const message = String(f.get("message") || "").trim();
    const text = [
      t("New Sixth Lens project enquiry", "استفسار مشروع جديد إلى سِكْسث لينس", language),
      `${t("Name", "الاسم", language)}: ${name}`,
      `${t("Company", "الشركة", language)}: ${company || t("Not provided", "غير محدد", language)}`,
      `${t("Service", "الخدمة", language)}: ${service}`,
      `${t("Project", "المشروع", language)}: ${message}`,
    ].join("\n");
    setStatus(t("Opening WhatsApp with your enquiry. Review it, then press send.", "سيتم فتح واتساب برسالتك. راجعها ثم اضغط إرسال.", language));
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const services = [
    t("Website or digital platform", "موقع أو منصة رقمية", language),
    t("Digital marketing and SEO", "التسويق الرقمي وتحسين البحث", language),
    t("Mobile application", "تطبيق جوال", language),
    t("CRM & WhatsApp automation", "CRM والأتمتة", language),
    t("Cloud and integration", "السحابة والتكامل", language),
    t("Data & applied AI", "البيانات والذكاء الاصطناعي", language),
    t("E-invoicing workflow", "الفوترة الإلكترونية", language),
    t("MVP development", "تطوير MVP", language),
    t("Not sure yet", "لست متأكداً بعد", language),
  ];

  return (
    <form className="sl-form" onSubmit={submit}>
      <div className="row">
        <div className="sl-field"><label htmlFor="cf-name">{t("Name", "الاسم", language)}</label><input id="cf-name" name="name" autoComplete="name" required placeholder={t("Your name", "اسمك", language)} /></div>
        <div className="sl-field"><label htmlFor="cf-co">{t("Company", "الشركة", language)}</label><input id="cf-co" name="company" autoComplete="organization" placeholder={t("Company name", "اسم الشركة", language)} /></div>
      </div>
      <div className="sl-field">
        <label htmlFor="cf-svc">{t("What do you need?", "ما الخدمة التي تحتاجها؟", language)}</label>
        <select id="cf-svc" name="service" required defaultValue="">
          <option value="" disabled>{t("Select a service", "اختر خدمة", language)}</option>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="sl-field">
        <label htmlFor="cf-msg">{t("Tell us about your project", "أخبرنا عن احتياجك", language)}</label>
        <textarea id="cf-msg" name="message" required rows={5} placeholder={t("What are you trying to improve, launch or grow?", "ما الذي تريد تحسينه أو إطلاقه أو تطويره؟", language)} />
      </div>
      <div className="form-foot">
        <button className="btn" type="submit">{t("Send enquiry via WhatsApp ↗", "أرسل استفسارك عبر واتساب ↗", language)}</button>
        <p>{t("We reply within one business day.", "عادةً ما نرد خلال يوم عمل.", language)}</p>
      </div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
