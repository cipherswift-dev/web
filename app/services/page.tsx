import type { Metadata } from "next";
import Link from "next/link";
import { services, features, site } from "../_lib/content";
import { Icon, ArrowRight } from "../_lib/icons";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>Services</span>
          <h1 className="reveal d1">AI &amp; IT services built to <span className="grad">ship</span></h1>
          <p className="reveal d2">Everything you need to design, build and scale intelligent software — under one roof.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-3">
            {services.map((s, i) => (
              <Link className={`card reveal d${(i % 3) + 1}`} href={`/services/${s.slug}`} key={s.slug}>
                <span className="card-icon"><Icon name={s.icon} strokeWidth={1.8} /></span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="card-link">Learn more <ArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot"></span>Why teams choose us</span>
            <h2>Engineering that turns AI into outcomes</h2>
          </div>
          <div className="grid-4">
            {features.map((f, i) => (
              <div className={`proc reveal d${(i % 4) + 1}`} key={f.title}>
                <span className="card-icon"><Icon name={f.icon} strokeWidth={1.8} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="inner">
              <h2>Not sure where to start?</h2>
              <p>Tell us your goal and we&apos;ll recommend the right path — no commitment.</p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/contact">Start a project<ArrowRight /></Link>
                <a className="btn btn-light" href={`mailto:${site.email}`}>Email us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
