import Link from "next/link";
import { services, stats, features, process, site } from "./_lib/content";
import { Icon, ArrowRight, Bot, Sparkles, ShieldCheck } from "./_lib/icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal"><span className="dot"></span>Cipher · Swift — secure code, shipped fast</span>
            <h1 className="reveal d1">
              We decode complexity into <span className="grad">swift, secure software</span>
            </h1>
            <p className="hero-sub reveal d2">{site.description}</p>
            <div className="hero-cta reveal d3">
              <Link className="btn btn-primary" href="/contact">Start a project<ArrowRight /></Link>
              <Link className="btn btn-ghost" href="/services">Explore services</Link>
            </div>
            <div className="hero-trust reveal d4">
              <span className="stars">★★★★★</span>
              <span>Trusted by founders and teams building with AI</span>
            </div>
          </div>

          <div className="hero-visual reveal d2" aria-hidden="true">
            <div className="code-card">
              <div className="cc-bar"><i></i><i></i><i></i><span>cipherswift.ts</span></div>
              <pre>
{``}<span className="c">{`// decode → build → ship`}</span>{`
`}<span className="k">const</span>{` build = `}<span className="k">async</span>{` (idea) => {
  `}<span className="k">const</span>{` plan = `}<span className="k">await</span>{` `}<span className="f">decode</span>{`(idea);
  `}<span className="k">const</span>{` app  = `}<span className="k">await</span>{` `}<span className="f">cipher</span>{`(plan, `}<span className="s">{`"secure"`}</span>{`);
  `}<span className="k">return</span>{` `}<span className="f">ship</span>{`(app, `}<span className="s">{`"swiftly"`}</span>{`);
};`}
              </pre>
            </div>
            <div className="chip c1"><Bot strokeWidth={1.9} /> AI Agents</div>
            <div className="chip c2"><Sparkles strokeWidth={1.9} /> Shipped fast</div>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <div className="strip">
        <div className="wrap strip-row">
          <span>Generative AI</span>
          <span>Cloud Native</span>
          <span>Web &amp; Mobile</span>
          <span>Automation</span>
          <span>Consulting</span>
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot"></span>What we do</span>
            <h2>AI &amp; IT services, end to end</h2>
            <p>From intelligent agents to full-stack products — one team to design, build and scale what&apos;s next.</p>
          </div>
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

      {/* Stats */}
      <section className="section alt">
        <div className="wrap">
          <div className="stats reveal">
            <div className="stats-row">
              {stats.map((st) => (
                <div className="stat" key={st.label}>
                  <span className="stat-ic"><Icon name={st.icon} strokeWidth={1.7} /></span>
                  <div className="num"><span data-target={st.target}>0</span><span className="suffix">{st.suffix}</span></div>
                  <div className="label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow"><span className="dot"></span>Why Cipherswift</span>
            <h2>Engineering that turns AI into outcomes</h2>
            <p>We pair frontier AI with disciplined software engineering, so what we build is fast to ship and safe to run.</p>
            <div className="feature-list">
              {features.map((f) => (
                <div className="feature" key={f.title}>
                  <span className="f-icon"><Icon name={f.icon} strokeWidth={1.8} /></span>
                  <div><b>{f.title}</b><p>{f.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="split-art reveal d2" aria-hidden="true">
            <div className="badge x"><ShieldCheck strokeWidth={1.8} /><b>Secure by design</b></div>
            <div className="badge y"><Sparkles strokeWidth={1.8} /><b>AI-native</b></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot"></span>How we work</span>
            <h2>A clear path from idea to scale</h2>
          </div>
          <div className="grid-4 proc-grid">
            {process.map((p, i) => (
              <div className={`proc reveal d${(i % 4) + 1}`} key={p.step}>
                <div className="proc-top">
                  <span className="card-icon"><Icon name={p.icon} strokeWidth={1.8} /></span>
                  <span className="step">{p.step}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="inner">
              <h2>Let&apos;s build something intelligent</h2>
              <p>Tell us what you&apos;re building or the problem you want AI to solve. We&apos;ll map a path forward.</p>
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
