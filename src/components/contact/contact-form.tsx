"use client";

import { useState, type FormEvent } from "react";

const whatsappNumber = "97430313046";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();
    const text = [
      "New Sixth Lens project enquiry",
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service}`,
      `Project: ${message}`,
    ].join("\n");

    setStatus("Opening WhatsApp with your enquiry. Review it, then press send.");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submitToWhatsApp}>
      <div className="form-row">
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
      </div>
      <label>What do you need?
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Website or digital platform</option>
          <option>Digital marketing and SEO</option>
          <option>Mobile application</option>
          <option>CRM and automation</option>
          <option>Cloud and integration</option>
          <option>Data and applied AI</option>
          <option>E-invoicing workflow and integration</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>Tell us about the opportunity<textarea name="message" required rows={5} placeholder="What are you trying to improve, launch or grow?" /></label>
      <div className="form-submit"><button className="button" type="submit">Send enquiry on WhatsApp <span aria-hidden="true">↗</span></button><p>We typically respond within one business day.</p></div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
