import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, process, site } from "../../_lib/content";
import { Icon, Check, ArrowRight } from "../../_lib/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s ? s.title : "Service" };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>Service</span>
          <h1 className="reveal d1">{s.title}</h1>
          <p className="reveal d2">{s.blurb}</p>
          <div className="hero-cta reveal d3" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">Discuss your project<ArrowRight /></Link>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>

      {/* What's included + visual */}
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow"><span className="dot"></span>What&apos;s included</span>
            <h2>Everything you need in {s.title.toLowerCase()}</h2>
            <p>We tailor every engagement to your goals — start small, prove value fast, and scale what works with production-grade engineering.</p>
            <div className="incl-grid">
              {s.points.map((p) => (
                <div className="incl" key={p}><Check strokeWidth={2.4} /><span>{p}</span></div>
              ))}
            </div>
          </div>
          <div className="service-art reveal d2" aria-hidden="true">
            <span className="sa-icon"><Icon name={s.icon} strokeWidth={1.6} /></span>
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot"></span>How we deliver</span>
            <h2>From idea to production</h2>
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

      {/* Related services */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot"></span>Explore more</span>
            <h2>Related services</h2>
          </div>
          <div className="grid-3">
            {related.map((r, i) => (
              <Link className={`card reveal d${(i % 3) + 1}`} href={`/services/${r.slug}`} key={r.slug}>
                <span className="card-icon"><Icon name={r.icon} strokeWidth={1.8} /></span>
                <h3>{r.title}</h3>
                <p>{r.blurb}</p>
                <span className="card-link">Learn more <ArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="inner">
              <h2>Ready to build {s.title.toLowerCase()}?</h2>
              <p>Tell us what you&apos;re building and we&apos;ll map a path forward.</p>
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
