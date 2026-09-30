import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Disc3 } from "lucide-react";
import { ExternalCta, PageIntro, SiteShell } from "@/app/components/SiteShell";
import { links, releases } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Music",
  description: "Released music and public chapter demos from Glacial Light.",
};

export default function MusicPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Listen" title="Songs carried across water.">
        <p>
          Folk melody, metal weight and narrative songwriting—performed and recorded
          by Derek Corcoran with flute, bouzouki, guitars, bass, percussion and voice.
        </p>
      </PageIntro>

      <section className="section-shell content-section">
        <div className="section-heading-row bordered-heading">
          <div>
            <p className="eyebrow">Released music</p>
            <h2>Current singles</h2>
          </div>
          <ExternalCta href={links.spotify} variant="text">
            Open artist profile
          </ExternalCta>
        </div>

        <div className="release-list">
          {releases.map((release, index) => (
            <article className="release-row" key={release.title}>
              <p className="release-number">{String(index + 1).padStart(2, "0")}</p>
              <div className="release-main">
                <div className="release-title-row">
                  <h3>{release.title}</h3>
                  <span>{release.date}</span>
                </div>
                <p>{release.description}</p>
                <div className="release-meta">
                  <span>{release.type}</span>
                  <span>{release.language}</span>
                </div>
              </div>
              <a
                className="circle-link"
                href={release.spotify}
                target="_blank"
                rel="noreferrer"
                aria-label={`Listen to ${release.title} on Spotify`}
              >
                <Disc3 size={21} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-separation section-shell">
        <div>
          <p className="eyebrow">A separate body of work</p>
          <h2>Runes of the Drift · public chapter demos</h2>
          <p>
            The Runes chapters are an evolving narrative project. The versions now on
            Spotify and YouTube are clearly presented as public demos or chapter
            releases—not as announcements of unconfirmed future recordings.
          </p>
        </div>
        <img
          src="/images/pirates-performance.jpg"
          alt="Five-panel performance still of Derek Corcoran playing the parts of We Are Pirates"
        />
        <Link className="inline-link" href="/runes-of-the-drift">
          Explore all ten chapters <ArrowRight size={18} />
        </Link>
      </section>

      <section className="status-note section-shell">
        <p className="eyebrow">Forthcoming work</p>
        <p>
          Unannounced recordings, incomplete credits and provisional release plans are
          intentionally not shown in this first draft.
        </p>
      </section>
    </SiteShell>
  );
}
