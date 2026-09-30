import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SiteShell } from "@/app/components/SiteShell";
import { links, videos } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Videos",
  description: "Glacial Light performances, chapter videos and recording process.",
};

export default function VideosPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Watch" title="Every instrument leaves a trace.">
        <p>
          Public performances, chapter videos and close views of the layered process
          behind Glacial Light.
        </p>
      </PageIntro>

      <section className="section-shell video-grid">
        {videos.map((video) => (
          <article className={`video-card video-card-${video.format}`} key={video.id}>
            <div className={`video-frame ${video.format === "short" ? "short-video" : "landscape-video"}`}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-copy">
              <p className="eyebrow">{video.label}</p>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="channel-cta section-shell">
        <p>More performance clips, chapter videos and works in process live on YouTube.</p>
        <a href={links.youtube} target="_blank" rel="noreferrer">
          Visit the channel <ArrowUpRight size={17} />
        </a>
      </section>
    </SiteShell>
  );
}
