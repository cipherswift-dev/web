import type { Metadata } from "next";
import {
  Space_Grotesk, Sora, Chakra_Petch, Orbitron, Rajdhani, Audiowide, Michroma, Exo_2,
} from "next/font/google";

export const metadata: Metadata = { title: "Logo lab", robots: { index: false } };

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const sora = Sora({ subsets: ["latin"], weight: ["700"] });
const chakra = Chakra_Petch({ subsets: ["latin"], weight: ["700"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["700"] });
const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });
const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const exo = Exo_2({ subsets: ["latin"], weight: ["700"] });

const fonts = [
  { name: "Space Grotesk", cls: spaceGrotesk.className, note: "modern · geometric · safe default" },
  { name: "Chakra Petch", cls: chakra.className, note: "techy · cyber — fits 'cipher'" },
  { name: "Sora", cls: sora.className, note: "clean · futuristic · friendly" },
  { name: "Exo 2", cls: exo.className, note: "tech · slightly rounded" },
  { name: "Rajdhani", cls: rajdhani.className, note: "condensed · sporty · bold" },
  { name: "Orbitron", cls: orbitron.className, note: "sci-fi · spaced · heavy" },
  { name: "Michroma", cls: michroma.className, note: "wide · minimal · spacey" },
  { name: "Audiowide", cls: audiowide.className, note: "display · retro-tech" },
];

export default function LogoLab() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot"></span>Logo lab</span>
          <h2>Pick the wordmark font</h2>
          <p>Each row shows the hex mark + “CIPHERSWIFT” in a candidate font, in gradient and two-tone. Tell me the name you like and I&apos;ll finalize it everywhere.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {fonts.map((f) => (
            <div key={f.name} className="glass" style={{ borderRadius: 18, padding: "26px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span style={{ fontFamily: "var(--font-brand)", fontWeight: 700, color: "var(--ink)", fontSize: 15 }}>{f.name}</span>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>{f.note}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark.png" alt="" width={56} height={56} style={{ filter: "drop-shadow(0 6px 16px rgba(46,197,160,0.35))" }} />
                <span className={f.cls} style={{ fontSize: "clamp(34px,5vw,56px)", textTransform: "uppercase", letterSpacing: "0.04em", background: "var(--grad)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: 1 }}>
                  Cipherswift
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 18 }}>
                <span className={f.cls} style={{ fontSize: 26, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink)" }}>
                  Cipher<span style={{ background: "var(--grad)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>swift</span>
                </span>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>← two-tone (header style)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
