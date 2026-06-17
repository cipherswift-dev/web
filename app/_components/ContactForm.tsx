"use client";

import { useState } from "react";
import { site } from "../_lib/content";
import { ArrowRight } from "../_lib/icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const topic = String(f.get("topic") || "");
    const message = String(f.get("message") || "");
    const subject = `New enquiry${topic ? ` — ${topic}` : ""} from ${name || "website"}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-card" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="topic">What can we help with?</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>Select a topic</option>
          <option>AI Agents &amp; Automation</option>
          <option>AI Product Development</option>
          <option>Web &amp; App Development</option>
          <option>Cloud &amp; DevOps</option>
          <option>IT Consulting</option>
          <option>Training &amp; Careers</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your project or goal…" required />
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
        Send message<ArrowRight />
      </button>
      {sent && (
        <p style={{ marginTop: 14, fontSize: 14, color: "var(--primary-deep)" }}>
          Your mail app should have opened. If not, email us at {site.email}.
        </p>
      )}
    </form>
  );
}
