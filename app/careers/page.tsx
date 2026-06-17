import type { Metadata } from "next";
import { site } from "../_lib/content";
import { Icon, ArrowRight, Check } from "../_lib/icons";

export const metadata: Metadata = { title: "Careers" };

const perks = [
  { icon: "Sparkles", title: "Work on frontier AI", text: "Ship real generative-AI products, not toy demos." },
  { icon: "GraduationCap", title: "Learn fast", text: "Mentorship, training and room to grow into new areas." },
  { icon: "Globe2", title: "Flexible & remote-friendly", text: "Outcome-driven culture, async by default." },
  { icon: "Rocket", title: "Real ownership", text: "Small team, big impact — your work ships." },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>Careers</span>
          <h1 className="reveal d1">Build the future of AI with us</h1>
          <p className="reveal d2">
            We&apos;re always looking for curious engineers, designers and AI builders. Join us, or start
            with our training and mentorship programs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-4">
            {perks.map((p, i) => (
              <div className={`proc reveal d${(i % 4) + 1}`} key={p.title}>
                <span className="card-icon"><Icon name={p.icon} strokeWidth={1.8} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap prose reveal">
          <h2>Who we hire</h2>
          <ul>
            <li><Check strokeWidth={2.2} />AI / ML engineers and applied researchers</li>
            <li><Check strokeWidth={2.2} />Full-stack & mobile developers (Next.js, React, Node)</li>
            <li><Check strokeWidth={2.2} />Cloud / DevOps engineers</li>
            <li><Check strokeWidth={2.2} />Product designers and AI-curious generalists</li>
            <li><Check strokeWidth={2.2} />Interns and entry-level talent via our training track</li>
          </ul>
          <h2>How to apply</h2>
          <p>
            Send your CV and a note about what you&apos;d like to work on to{" "}
            <a href={`mailto:${site.email}?subject=Careers%20at%20Cipherswift`} style={{ color: "var(--primary-deep)", fontWeight: 600 }}>{site.email}</a>.
            We read every application.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=Careers%20at%20Cipherswift`}>Email your CV<ArrowRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}
