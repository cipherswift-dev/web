import type { Metadata } from "next";
import Link from "next/link";
import { stats, features, site } from "../_lib/content";
import { Icon, ArrowRight } from "../_lib/icons";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>About us</span>
          <h1 className="reveal d1">An AI-first studio for the next wave of software</h1>
          <p className="reveal d2">
            Cipherswift builds intelligent products and helps teams adopt AI — combining generative
            AI, solid engineering and a bias for shipping.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="stats reveal">
            <div className="stats-row">
              {stats.map((st) => (
                <div className="stat" key={st.label}>
                  <div className="num"><span data-target={st.target}>0</span><span className="suffix">{st.suffix}</span></div>
                  <div className="label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose reveal">
          <h2>Our vision</h2>
          <p>
            We aim to build scalable AI models and intelligent systems that solve real-world problems
            across industries — enabling faster innovation and smarter automation for the teams we work with.
          </p>
          <h2>What we believe</h2>
          <p>
            AI is most powerful when it&apos;s engineered, not improvised. We design products around data
            and outcomes, keep humans in the loop where it matters, and treat security and reliability
            as first-class features — not afterthoughts.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot"></span>How we&apos;re different</span>
            <h2>Strengths we bring to every build</h2>
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
              <h2>Work with us</h2>
              <p>Have a problem worth solving with AI? Let&apos;s talk.</p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/contact">Get in touch<ArrowRight /></Link>
                <a className="btn btn-light" href={`mailto:${site.email}`}>Email us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
