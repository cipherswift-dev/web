import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { site } from "./_lib/content";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Interactions from "./_components/Interactions";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/logo-mark.png" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.siteUrl,
    email: site.email,
    description: site.description,
  };
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${inter.variable} ${chakra.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="site-bg" aria-hidden="true">
          <div className="aurora a1"></div>
          <div className="aurora a2"></div>
          <div className="aurora a3"></div>
          <div className="bg-dots"></div>
          <div className="bg-grain"></div>
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
