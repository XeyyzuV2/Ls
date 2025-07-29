"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  poster: string;
  status: string;
}

export default function AnimeCard({ slug, title, poster, status }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative rounded-xl overflow-hidden shadow-lg"
    >
      <Link href={`/anime/${slug}`}>
        <Image
          src={poster}
          alt={title}
          width={300}
          height={450}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
              status === "Ongoing"
                ? "bg-green-500/20 text-green-300"
                : "bg-blue-500/20 text-blue-300"
            }`}
          >
            {status}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}