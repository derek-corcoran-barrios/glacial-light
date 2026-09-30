import type { Metadata } from "next";
import { ArrowUpRight, Camera, Mail, Music2, Video } from "lucide-react";
import { ExternalCta, PageIntro, SiteShell } from "@/app/components/SiteShell";
import { links } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Derek Corcoran and follow Glacial Light.",
};

const channels = [
  {
    name: "Email",
    detail: "Press, collaboration and general enquiries",
    href: links.email,
    icon: Mail,
  },
  {
    name: "Spotify",
    detail: "Listen and follow the released catalogue",
    href: links.spotify,
    icon: Music2,
  },
  {
    name: "YouTube",
    detail: "Chapter videos, performances and process",
    href: links.youtube,
    icon: Video,
  },
  {
    name: "Instagram",
    detail: "New music and behind-the-scenes clips",
    href: links.instagram,
    icon: Camera,
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Contact" title="Send a signal across the water.">
        <p>
          For press, musical collaboration or a simple hello, choose the channel that
          fits the journey.
        </p>
      </PageIntro>

      <section className="section-shell contact-grid">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const external = channel.href.startsWith("http");
          return (
            <a
              className="contact-card"
              href={channel.href}
              key={channel.name}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              <Icon size={24} />
              <div>
                <h2>{channel.name}</h2>
                <p>{channel.detail}</p>
              </div>
              <ArrowUpRight size={19} />
            </a>
          );
        })}
      </section>

      <section className="mailing-panel section-shell contact-mailing">
        <p className="eyebrow">Follow the Traveler</p>
        <h2>One message when a new chapter arrives.</h2>
        <p>
          Join for release news and the occasional signal when Glacial Light reaches a
          stage.
        </p>
        <ExternalCta href={links.mailingList}>Join the mailing list</ExternalCta>
      </section>
    </SiteShell>
  );
}
