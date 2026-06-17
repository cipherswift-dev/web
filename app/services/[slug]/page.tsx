import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site } from "../../_lib/content";
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

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="dot"></span>Service</span>
          <h1 className="reveal d1">{s.title}</h1>
          <p className="reveal d2">{s.blurb}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose reveal">
          <span className="card-icon"><Icon name={s.icon} strokeWidth={1.8} /></span>
          <h2>What&apos;s included</h2>
          <ul>
            {s.points.map((p) => (
              <li key={p}><Check strokeWidth={2.2} />{p}</li>
            ))}
          </ul>
          <p>
            Every engagement is tailored to your goals. We start small, prove value fast, and scale
            what works — with the engineering rigor to keep it reliable in production.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Discuss your project<ArrowRight /></Link>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>
    </>
  );
}
