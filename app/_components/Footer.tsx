import Link from "next/link";
import { site, services, nav } from "../_lib/content";
import { Mail, MapPin } from "../_lib/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="brand" href="/" aria-label="Cipherswift — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-img" src="/logo-mark.png" alt="" width={42} height={42} />
              <span className="brand-name">Cipher<span className="brand-accent">swift</span></span>
            </Link>
            <p>{site.description}</p>
            <a className="foot-mail" href={`mailto:${site.email}`}>
              <Mail strokeWidth={1.8} /> {site.email}
            </a>
            <p className="foot-loc"><MapPin strokeWidth={1.8} /> {site.location}</p>
          </div>

          <div className="foot-col">
            <h2>Company</h2>
            <ul>
              {nav.filter((n) => n.label !== "Home").map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h2>Services</h2>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2016 {site.legalName}. All rights reserved.</span>
          <div className="links">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
