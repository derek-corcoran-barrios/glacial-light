import type { Metadata } from "next";
import { Headphones, Play } from "lucide-react";
import { PageIntro, SiteShell } from "@/app/components/SiteShell";
import { chapters } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Runes of the Drift",
  description:
    "A ten-chapter Glacial Light narrative about migration, myth, memory and the search for home.",
};

export default function RunesPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="The central narrative" title="Runes of the Drift">
        <p>
          A nameless Traveler, born beneath Patagonia’s endless skies but shaped by
          distant myths, old songs and ancestral stories, crosses oceans and
          time in search of belonging, truth and home.
        </p>
      </PageIntro>

      <section className="runes-story section-shell">
        <div className="runes-story-copy">
          <p className="section-index">The album story</p>
          <h2>Home is not a point on a map.</h2>
          <p>
            Across farewell, pirates, whales, northern passage, trickster gods, love,
            fatherhood and the continuing pull of the road, the Traveler learns that
            home can be carried, negotiated and carved in the heart.
          </p>
        </div>
        <div className="video-frame landscape-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Lhc2sGV2r9s"
            title="We Are Pirates: Runes of the Drift Chapter II"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section-shell chapters-section">
        <div className="chapters-heading">
          <p className="eyebrow">The voyage</p>
          <h2>Ten chapters. One changing idea of home.</h2>
          <p>Public demos and chapter releases are linked below.</p>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article className="chapter-card" key={chapter.number}>
              <div className="chapter-topline">
                <span>Chapter {chapter.number}</span>
                <span className="chapter-rule" />
              </div>
              <h3>{chapter.title}</h3>
              <p>{chapter.summary}</p>
              <div className="chapter-actions">
                {chapter.youtube && (
                  <a href={chapter.youtube} target="_blank" rel="noreferrer">
                    <Play size={15} fill="currentColor" /> Watch
                  </a>
                )}
                <a href={chapter.spotify} target="_blank" rel="noreferrer">
                  <Headphones size={15} /> Listen
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
