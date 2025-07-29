"use client";
import { useRouter, useSearchParams } from "next/navigation";

const genres = ["Action", "Adventure", "Comedy", "Supernatural", "Shounen"];

export default function GenreFilter() {
  const router = useRouter();
  const params = useSearchParams();

  const handleGenre = (genre: string) => {
    const newParams = new URLSearchParams(params as any);
    newParams.set("genre", genre);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {genres.map((g) => (
        <button
          key={g}
          onClick={() => handleGenre(g)}
          className="border border-secondary px-3 py-1 rounded-full hover:bg-accent hover:border-accent transition"
        >
          {g}
        </button>
      ))}
    </div>
  );
}