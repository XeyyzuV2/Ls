import AnimeCard from "@/components/AnimeCard";
import GenreFilter from "@/components/GenreFilter";
import dummy from "@/data/dummy.json";

export default function Home({
  searchParams,
}: {
  searchParams?: { q?: string; genre?: string; status?: string };
}) {
  const filtered = dummy.filter((a) => {
    const q = searchParams?.q?.toLowerCase() || "";
    const g = searchParams?.genre || "";
    return (
      a.title.toLowerCase().includes(q) &&
      (g ? a.genres.includes(g) : true)
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Discover Anime</h1>
      <GenreFilter />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {filtered.map((anime) => (
          <AnimeCard key={anime.slug} {...anime} />
        ))}
      </div>
    </section>
  );
}