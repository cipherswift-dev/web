import type { Metadata } from "next";
import { site } from "../_lib/content";
import { Mail, MapPin } from "../_lib/icons";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>Contact</span>
          <h1 className="reveal d1">Let&apos;s talk about what you&apos;re building</h1>
          <p className="reveal d2">Tell us about your project or the problem you want AI to solve — we&apos;ll get back quickly.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="reveal">
            <h2 className="sr-only">Send us a message</h2>
            <ContactForm />
          </div>

          <aside className="reveal d1">
            <ul className="ci-list">
              <li className="ci-row">
                <span className="ci-badge"><Mail strokeWidth={1.8} /></span>
                <div>
                  <div className="ci-label">Email</div>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li className="ci-row">
                <span className="ci-badge"><MapPin strokeWidth={1.8} /></span>
                <div>
                  <div className="ci-label">Location</div>
                  <p>{site.location}</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
