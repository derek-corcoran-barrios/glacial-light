import Link from "next/link";
import { ArrowUpRight, Camera, Video } from "lucide-react";
import { links } from "@/app/lib/content";

const navigation = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Runes of the Drift", "/runes-of-the-drift"],
  ["Videos", "/videos"],
  ["About", "/about"],
  ["Press", "/press"],
  ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Glacial Light home">
          <span className="wordmark-mark" aria-hidden="true">
            GL
          </span>
          <span>
            Glacial Light
            <small>Mythic folk metal</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Glacial Light</p>
          <p>Music carried between Patagonia and Denmark.</p>
        </div>
        <div className="footer-links">
          <a href={links.spotify} target="_blank" rel="noreferrer">
            Spotify <ArrowUpRight size={14} />
          </a>
          <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="Glacial Light on YouTube">
            <Video size={16} /> YouTube
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Glacial Light on Instagram">
            <Camera size={16} /> Instagram
          </a>
        </div>
        <p className="footer-note">© 2026 Derek Corcoran</p>
      </footer>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="page-intro section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </header>
  );
}

export function ExternalCta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
}) {
  return (
    <a className={`cta cta-${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
