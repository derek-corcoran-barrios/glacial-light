import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageIntro, SiteShell } from "@/app/components/SiteShell";
import { links } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Press",
  description: "Press coverage and a concise Glacial Light artist overview.",
};

export default function PressPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Press" title="Glacial Light in the wild.">
        <p>
          Selected coverage and concise, verified context for editors, curators and
          collaborators.
        </p>
      </PageIntro>

      <section className="press-feature section-shell">
        <img
          src="/images/carlow-performance.jpg"
          alt="Multi-panel performance of Follow Me Up to Carlow on flute, bouzouki, guitar and voice"
        />
        <div className="press-feature-copy">
          <p className="eyebrow">40MAG · August 2026</p>
          <h2>Derek Corcoran Layers Irish Flutes Over Heavy Guitars on “Follow Me Up to Carlow”</h2>
          <p>
            The feature highlights Derek’s folk-metal arrangement of the Irish
            historical song: Irish flutes, distorted guitars, bouzouki, harsh vocals
            and the half-time bridge that emerged during recording.
          </p>
          <a href={links.press} target="_blank" rel="noreferrer">
            Read the feature at 40MAG <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="press-facts section-shell">
        <article>
          <p className="eyebrow">One-line description</p>
          <p className="large-fact">
            Mythic folk metal shaped by Patagonia, migration, maritime stories and
            life between cultures.
          </p>
        </article>
        <article>
          <p className="eyebrow">Core sound</p>
          <p>Irish flute · GDAD bouzouki · heavy guitars · bass · percussion · voice</p>
        </article>
        <article>
          <p className="eyebrow">Based</p>
          <p>Near Aarhus, Denmark · rooted in Patagonia, Chile</p>
        </article>
      </section>

      <section className="press-contact section-shell">
        <div>
          <p className="eyebrow">Press contact</p>
          <h2>For features, interviews and approved materials.</h2>
        </div>
        <a href={links.email}>
          <Mail size={18} /> derek.corcoran.barrios@gmail.com
        </a>
      </section>
    </SiteShell>
  );
}
