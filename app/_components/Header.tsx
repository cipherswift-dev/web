import Link from "next/link";
import { nav, services } from "../_lib/content";
import { ChevronDown, ArrowRight } from "../_lib/icons";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="Cipherswift — home">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span className="brand-name">Cipher<span className="brand-accent">swift</span></span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) =>
              n.label === "Services" ? (
                <div className="nav-item" key={n.href}>
                  <Link className="nav-link" href={n.href}>
                    Services<ChevronDown className="chev" />
                  </Link>
                  <div className="dropdown">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="nav-item" key={n.href}>
                  <Link className="nav-link" href={n.href}>{n.label}</Link>
                </div>
              )
            )}
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-primary" href="/contact">
              Start a project<ArrowRight />
            </Link>
            <button className="hamburger" aria-label="Open menu" aria-expanded="false">
              <span className="hb"><i></i><i></i><i></i></span>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-panel">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>{n.label}</Link>
        ))}
        <Link className="btn btn-primary" href="/contact">Start a project</Link>
      </div>
    </>
  );
}
