import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { ExternalCta, SiteShell } from "@/app/components/SiteShell";
import { links } from "@/app/lib/content";

export default function Home() {
  return (
    <SiteShell>
      <section className="hero">
        <img
          className="hero-image"
          src="/images/hero-bouzouki.jpg"
          alt="Derek Corcoran playing Irish bouzouki outdoors beside flowering branches"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content section-shell">
          <p className="eyebrow">Patagonia → Denmark · Mythic folk metal</p>
          <h1>Music from the edges of the world.</h1>
          <p className="hero-copy">
            Glacial Light is the music of Derek Corcoran—heavy riffs, wandering flutes
            and old stories reshaped by migration, memory and life between cultures.
          </p>
          <div className="cta-row">
            <ExternalCta href={links.spotify}>Listen on Spotify</ExternalCta>
            <ExternalCta href={links.mailingList} variant="secondary">
              Follow the Traveler
            </ExternalCta>
          </div>
        </div>
        <p className="hero-caption">Derek Corcoran · Aarhus area, Denmark</p>
      </section>

      <section className="manifesto section-shell">
        <p className="section-index">01 · The crossing</p>
        <div>
          <h2>When stories cross borders, they do not stay unchanged.</h2>
          <p>
            Glacial Light follows what happens next: myths collide, memories are
            inherited imperfectly, and cultural friction becomes a new musical
            language. Patagonia, Irish heritage, Nordic landscapes and maritime lore
            meet in songs about longing, transformation and belonging.
          </p>
        </div>
      </section>

      <section className="feature-project">
        <div className="feature-image-wrap">
          <img
            src="/images/pirates-performance.jpg"
            alt="Derek Corcoran performing multiple instrumental layers of We Are Pirates"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Central narrative project</p>
          <h2>Runes of the Drift</h2>
          <p>
            Ten chapters follow a nameless Traveler from Patagonia across oceans and
            through myth in search of belonging, truth and home.
          </p>
          <Link className="inline-link" href="/runes-of-the-drift">
            Enter the story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="sound-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">The sound in motion</p>
            <h2>Traditional breath. Electric weight.</h2>
          </div>
          <Link className="inline-link" href="/videos">
            Watch all videos <ArrowRight size={18} />
          </Link>
        </div>
        <div className="image-pair">
          <Link href="/videos" className="image-card portrait-card">
            <img
              src="/images/condor-performance.jpg"
              alt="Derek layering quena and Irish bouzouki for El Cóndor Pasa"
            />
            <span className="image-card-label">
              <Play size={15} fill="currentColor" /> Basket of Flutes #1
            </span>
          </Link>
          <Link href="/music" className="image-card square-card">
            <img
              src="/images/carlow-performance.jpg"
              alt="Multi-panel performance of Follow Me Up to Carlow on flute, bouzouki, guitar and voice"
            />
            <span className="image-card-label">Follow Me Up to Carlow</span>
          </Link>
        </div>
      </section>

      <aside className="press-ribbon section-shell" aria-label="Featured press">
        <p>Featured by 40MAG</p>
        <a href={links.press} target="_blank" rel="noreferrer">
          “Derek Corcoran Layers Irish Flutes Over Heavy Guitars”
          <ArrowRight size={18} />
        </a>
      </aside>

      <section className="mailing-panel section-shell">
        <p className="eyebrow">Follow the Traveler</p>
        <h2>Hear when the next chapter finds shore.</h2>
        <p>
          Join the mailing list for new chapter releases and news when the music finds
          its way to a stage.
        </p>
        <ExternalCta href={links.mailingList}>Join the mailing list</ExternalCta>
      </section>
    </SiteShell>
  );
}
