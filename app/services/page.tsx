import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../_lib/content";
import { Icon, ArrowRight } from "../_lib/icons";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>Services</span>
          <h1 className="reveal d1">AI &amp; IT services built to ship</h1>
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
    </>
  );
}
