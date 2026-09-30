import type { Metadata } from "next";
import { PageIntro, SiteShell } from "@/app/components/SiteShell";
import { instruments } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Derek Corcoran and the musical world of Glacial Light.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Derek Corcoran" title="A life between landscapes.">
        <p>
          Patagonian-born songwriter, multi-instrumentalist, storyteller and ecologist,
          now based near Aarhus, Denmark.
        </p>
      </PageIntro>

      <section className="about-lead section-shell">
        <div className="about-photo">
          <img
            src="/images/flute-portrait.jpg"
            alt="Close-up of Derek Corcoran playing a dark wooden transverse flute outdoors"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Biography</p>
          <h2>Folk, metal and myth as living material.</h2>
          <p>
            Glacial Light is the creative vessel of Derek Corcoran. Rooted in the
            windswept landscapes of Patagonia and shaped by Irish heritage, migration
            and life between cultures, the project brings maritime imagery and Norse,
            Celtic and Selk’nam-inspired storytelling into folk metal.
          </p>
          <p>
            Derek writes narrative songs about travel, longing, ancestral memory,
            cultural friction, love and belonging. He performs and records the music
            himself, moving between wooden flutes, Irish bouzouki, guitars, bass,
            percussion and voice.
          </p>
        </div>
      </section>

      <section className="artist-statement section-shell">
        <p className="section-index">Artist statement</p>
        <blockquote>
          “I write about what happens when people carry stories across borders: myths
          change, memories are inherited imperfectly, and different cultural worlds
          collide before being negotiated and blended into new identities.”
        </blockquote>
        <p>
          These themes extend beyond one biography. Migration reshapes partners,
          children and grandchildren as much as it reshapes those who move. In Glacial
          Light, traditions are not fixed artifacts; they travel, meet and become
          something new.
        </p>
      </section>

      <section className="instruments-section section-shell">
        <div className="instruments-image">
          <img
            src="/images/basket-flutes.jpg"
            alt="A woven basket filled with wooden and dark-colored flutes beside a bright window"
          />
        </div>
        <div>
          <p className="eyebrow">The instrumentarium</p>
          <h2>Voices gathered from different shores.</h2>
          <div className="instrument-list" aria-label="Main instruments">
            {instruments.map((instrument) => (
              <span key={instrument}>{instrument}</span>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
