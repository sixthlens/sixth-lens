"use client";

import { useState, type FormEvent } from "react";

const whatsappNumber = "97430313046";

export function ContactForm({ language = "en" }: { language?: "en" | "ar" }) {
  const [status, setStatus] = useState("");
  const isArabic = language === "ar";

  function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();
    const text = [
      isArabic ? "استفسار مشروع جديد إلى سايكسث لينس" : "New Sixth Lens project enquiry",
      `${isArabic ? "الاسم" : "Name"}: ${name}`,
      `${isArabic ? "الشركة" : "Company"}: ${company || (isArabic ? "غير محدد" : "Not provided")}`,
      `${isArabic ? "الخدمة" : "Service"}: ${service}`,
      `${isArabic ? "تفاصيل المشروع" : "Project"}: ${message}`,
    ].join("\n");

    setStatus(isArabic ? "سيتم فتح واتساب برسالتك. راجعها ثم اضغط إرسال." : "Opening WhatsApp with your enquiry. Review it, then press send.");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submitToWhatsApp}>
      <div className="form-row">
        <label>{isArabic ? "الاسم" : "Name"}<input name="name" autoComplete="name" required placeholder={isArabic ? "اسمك" : "Your name"} /></label>
        <label>{isArabic ? "الشركة" : "Company"}<input name="company" autoComplete="organization" placeholder={isArabic ? "اسم الشركة" : "Company name"} /></label>
      </div>
      <label>{isArabic ? "ما الخدمة التي تحتاجها؟" : "What do you need?"}
        <select name="service" required defaultValue="">
          <option value="" disabled>{isArabic ? "اختر خدمة" : "Select a service"}</option>
          <option>{isArabic ? "موقع أو منصة رقمية" : "Website or digital platform"}</option>
          <option>{isArabic ? "التسويق الرقمي وتحسين البحث" : "Digital marketing and SEO"}</option>
          <option>{isArabic ? "تطبيق جوال" : "Mobile application"}</option>
          <option>{isArabic ? "CRM والأتمتة" : "CRM and automation"}</option>
          <option>{isArabic ? "السحابة والتكامل" : "Cloud and integration"}</option>
          <option>{isArabic ? "البيانات والذكاء الاصطناعي" : "Data and applied AI"}</option>
          <option>{isArabic ? "الفوترة الإلكترونية والتكامل" : "E-invoicing workflow and integration"}</option>
          <option>{isArabic ? "تطوير MVP" : "MVP development"}</option>
          <option>{isArabic ? "لست متأكداً بعد" : "Not sure yet"}</option>
        </select>
      </label>
      <label>{isArabic ? "أخبرنا عن احتياجك" : "Tell us about the opportunity"}<textarea name="message" required rows={5} placeholder={isArabic ? "ما الذي تريد تحسينه أو إطلاقه أو تطويره؟" : "What are you trying to improve, launch or grow?"} /></label>
      <div className="form-submit"><button className="button" type="submit">{isArabic ? "أرسل استفسارك عبر واتساب" : "Send enquiry on WhatsApp"} <span aria-hidden="true">↗</span></button><p>{isArabic ? "عادةً ما نرد خلال يوم عمل." : "We typically respond within one business day."}</p></div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
