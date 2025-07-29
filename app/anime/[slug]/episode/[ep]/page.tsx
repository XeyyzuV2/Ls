import EpisodePlayer from "@/components/EpisodePlayer";
import dummy from "@/data/dummy.json";
import { notFound } from "next/navigation";

export default function Watch({
  params,
}: {
  params: { slug: string; ep: string };
}) {
  const anime = dummy.find((a) => a.slug === params.slug);
  const episode = anime?.episodes.find((e) => e.ep === Number(params.ep));
  if (!anime || !episode) notFound();

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        {anime.title} – Episode {episode.ep}
      </h1>
      <EpisodePlayer embedUrl={episode.embedUrl} />
    </section>
  );
}