import Image from "next/image";
import Link from "next/link";
import dummy from "@/data/dummy.json";
import { notFound } from "next/navigation";

export default function AnimeDetail({ params }: { params: { slug: string } }) {
  const anime = dummy.find((a) => a.slug === params.slug);
  if (!anime) notFound();

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <Image
          src={anime.poster}
          alt={anime.title}
          width={400}
          height={600}
          className="rounded-xl shadow-2xl"
        />
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold">{anime.title}</h1>
          <div className="flex gap-2">
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
              {anime.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                anime.status === "Ongoing"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-blue-500/20 text-blue-300"
              }`}
            >
              {anime.status}
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {anime.genres.map((g) => (
              <span
                key={g}
                className="border border-secondary px-2 py-0.5 rounded-full text-xs"
              >
                {g}
              </span>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed">{anime.synopsis}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Episodes</h2>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {anime.episodes.map((ep) => (
          <Link
            key={ep.ep}
            href={`/anime/${anime.slug}/episode/${ep.ep}`}
            className="bg-secondary p-4 rounded-xl hover:ring-2 hover:ring-accent transition"
          >
            Episode {ep.ep}
          </Link>
        ))}
      </div>
    </section>
  );
}